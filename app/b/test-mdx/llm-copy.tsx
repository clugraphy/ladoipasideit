'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const highwayStructure = {
    segments: ['Entry', 'Highway 101', 'Express Lane', 'Exit'],
    conditions: [
        Array(4).fill('Traffic'),
        Array(4).fill('Weather'),
        Array(4).fill('Speed'),
    ],
    destination: 'ETA',
};

const nodePositions = {
    xGap: 100,
    yGap: 30,
    radius: 12,
    startX: 60,
};

export function HighwayJourney() {
    const [activeConnections, setActiveConnections] = React.useState<string[]>([]);
    const [activeNodes, setActiveNodes] = React.useState<string[]>([]);
    const [speed, setSpeed] = React.useState(1);
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [currentSegmentIndex, setCurrentSegmentIndex] = React.useState(0);
    const [journey, setJourney] = React.useState<string[]>([]);
    const [estimatedTime, setEstimatedTime] = React.useState(0);
    const [showOutput, setShowOutput] = React.useState(false);

    React.useEffect(() => {
        if (!isPlaying) return;

        let step = 0;
        const totalSteps = 5; // Number of animation phases

        const timer = setInterval(
            () => {
                step = (step + 1) % totalSteps;

                // Reset animation when reaching the end
                if (step === 0) {
                    setActiveConnections([]);
                    setActiveNodes([]);
                    setEstimatedTime(0);
                    setShowOutput(false);

                    // Move to next segment
                    const newCurrentSegmentIndex = currentSegmentIndex + 1;

                    if (newCurrentSegmentIndex >= highwayStructure.segments.length) {
                        setCurrentSegmentIndex(0);
                        setJourney([]);
                    } else {
                        setCurrentSegmentIndex(newCurrentSegmentIndex);
                    }

                    return;
                }

                // Animate through the highway network
                const newActiveNodes: string[] = [];
                const newActiveConnections: string[] = [];

                // Add current segment node
                if (step >= 1) {
                    newActiveNodes.push(
                        `segment-${highwayStructure.segments[currentSegmentIndex]}` as never
                    );
                }

                // Add traffic condition nodes and connections
                if (step >= 2) {
                    highwayStructure.conditions[0].forEach((_, i) => {
                        newActiveNodes.push(`traffic-${i}` as never);
                        newActiveConnections.push(`segment-traffic-${i}` as never);
                    });
                }

                // Add weather condition nodes and connections
                if (step >= 3) {
                    highwayStructure.conditions[1].forEach((_, i) => {
                        newActiveNodes.push(`weather-${i}` as never);
                        newActiveConnections.push(`traffic-weather-${i}` as never);
                    });
                }

                // Add speed condition nodes and connections
                if (step >= 4) {
                    highwayStructure.conditions[2].forEach((_, i) => {
                        newActiveNodes.push(`speed-${i}` as never);
                        newActiveConnections.push(`weather-speed-${i}` as never);
                    });
                    newActiveNodes.push('output' as never);
                    newActiveConnections.push('speed-output' as never);

                    // Calculate estimated time based on conditions
                    const baseTime = 30; // Base time in minutes
                    const variation = currentSegmentIndex * 5;
                    setEstimatedTime(baseTime + variation);

                    setJourney((prev) => {
                        const newJourney = [
                            ...prev,
                            highwayStructure.segments[currentSegmentIndex],
                        ];
                        return newJourney.length > 4 ? newJourney.slice(-4) : newJourney;
                    });
                    setShowOutput(true);
                }

                setActiveNodes(newActiveNodes);
                setActiveConnections((prevConnections) => {
                    const newConnections = [...prevConnections, ...newActiveConnections];
                    return Array.from(new Set(newConnections));
                });
            },
            (step === 4 ? 1500 : 1000) / speed
        );

        return () => clearInterval(timer);
    }, [isPlaying, currentSegmentIndex, speed]);

    const renderNetwork = () => {
        const canvasWidth = 650;
        const canvasHeight = 200;
        const centerY = canvasHeight / 2;
        const scale = 0.9;

        return (
            <svg
                width={canvasWidth}
                height={canvasHeight}
                viewBox={`0 0 580 ${canvasHeight}`}
            >
                <g
                    transform={`scale(${scale}) translate(${((1 - scale) * canvasWidth) / 2 / scale
                        }, ${((1 - scale) * canvasHeight) / 2 / scale})`}
                >
                    {/* Render all connections first */}
                    {highwayStructure.conditions[0].map((_, condIdx) => {
                        const connectionId = `segment-traffic-${condIdx}`;
                        return (
                            <motion.line
                                key={`segment-traffic-${condIdx}`}
                                x1={nodePositions.startX}
                                y1={centerY}
                                x2={nodePositions.startX + nodePositions.xGap}
                                y2={condIdx * nodePositions.yGap + 40}
                                stroke={
                                    activeConnections.includes(connectionId)
                                        ? 'rgb(37, 99, 235)'
                                        : '#ddd'
                                }
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{
                                    pathLength: activeConnections.includes(connectionId) ? 1 : 0,
                                }}
                                transition={{ duration: 0.5 / speed }}
                            />
                        );
                    })}

                    {/* Connections between condition layers */}
                    {highwayStructure.conditions.slice(0, -1).map((layer, layerIdx) => {
                        return layer.map((_, nodeIdx) => {
                            return highwayStructure.conditions[layerIdx + 1].map(
                                (_, nextNodeIdx) => {
                                    const connectionId = `${layerIdx === 0 ? 'traffic' : 'weather'
                                        }-${layerIdx === 0 ? 'weather' : 'speed'}-${nextNodeIdx}`;
                                    return (
                                        <motion.line
                                            key={`condition-${layerIdx}-${nodeIdx}-${nextNodeIdx}`}
                                            x1={
                                                nodePositions.startX +
                                                nodePositions.xGap * (layerIdx + 1)
                                            }
                                            y1={nodeIdx * nodePositions.yGap + 40}
                                            x2={
                                                nodePositions.startX +
                                                nodePositions.xGap * (layerIdx + 2)
                                            }
                                            y2={nextNodeIdx * nodePositions.yGap + 40}
                                            stroke={
                                                activeConnections.includes(connectionId)
                                                    ? 'rgb(37, 99, 235)'
                                                    : '#ddd'
                                            }
                                            strokeWidth="1"
                                            initial={{ pathLength: 0 }}
                                            animate={{
                                                pathLength: activeConnections.includes(connectionId)
                                                    ? 1
                                                    : 0,
                                            }}
                                            transition={{ duration: 0.5 / speed }}
                                        />
                                    );
                                }
                            );
                        });
                    })}

                    {/* Connections to output node */}
                    {highwayStructure.conditions[2].map((_, condIdx) => {
                        const connectionId = 'speed-output';
                        return (
                            <motion.line
                                key={`speed-output-${condIdx}`}
                                x1={nodePositions.startX + nodePositions.xGap * 3}
                                y1={condIdx * nodePositions.yGap + 40}
                                x2={nodePositions.startX + nodePositions.xGap * 4}
                                y2={centerY}
                                stroke={
                                    activeConnections.includes(connectionId)
                                        ? 'rgb(37, 99, 235)'
                                        : '#ddd'
                                }
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{
                                    pathLength: activeConnections.includes(connectionId) ? 1 : 0,
                                }}
                                transition={{ duration: 0.5 / speed }}
                            />
                        );
                    })}

                    {/* Current Segment Node */}
                    <AnimatePresence mode="wait">
                        <motion.g
                            key={highwayStructure.segments[currentSegmentIndex]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.circle
                                cx={nodePositions.startX}
                                cy={centerY}
                                r={nodePositions.radius}
                                fill={
                                    activeNodes.includes(
                                        `segment-${highwayStructure.segments[currentSegmentIndex]}`
                                    )
                                        ? 'rgb(251, 146, 60)'
                                        : '#fcd34d'
                                }
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            />
                            <motion.text
                                x={nodePositions.startX - 20}
                                y={centerY}
                                className="text-sm font-medium"
                                textAnchor="end"
                                dominantBaseline="middle"
                            >
                                {highwayStructure.segments[currentSegmentIndex]}
                            </motion.text>
                        </motion.g>
                    </AnimatePresence>

                    {/* Condition Layer Nodes */}
                    {highwayStructure.conditions.map((layer, layerIdx) => {
                        return layer.map((_, nodeIdx) => {
                            const nodeId = `${layerIdx === 0
                                ? 'traffic'
                                : layerIdx === 1
                                    ? 'weather'
                                    : 'speed'
                                }-${nodeIdx}`;
                            return (
                                <motion.circle
                                    key={nodeId}
                                    cx={
                                        nodePositions.startX + nodePositions.xGap * (layerIdx + 1)
                                    }
                                    cy={nodeIdx * nodePositions.yGap + 40}
                                    r={nodePositions.radius}
                                    fill={
                                        activeNodes.includes(nodeId)
                                            ? 'rgb(37, 99, 235)'
                                            : '#93c5fd'
                                    }
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                            );
                        });
                    })}

                    {/* Output Node (ETA) */}
                    <g>
                        <motion.circle
                            cx={nodePositions.startX + nodePositions.xGap * 4}
                            cy={centerY}
                            r={nodePositions.radius}
                            fill={
                                activeNodes.includes('output') ? 'rgb(30, 58, 138)' : '#93c5fd'
                            }
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                        <AnimatePresence>
                            {showOutput && (
                                <motion.text
                                    key={estimatedTime}
                                    x={nodePositions.startX + nodePositions.xGap * 4 + 35}
                                    y={centerY}
                                    className="text-xs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {`ETA: ${estimatedTime} min`}
                                </motion.text>
                            )}
                        </AnimatePresence>
                    </g>
                </g>
            </svg>
        );
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 relative bg-white border border-gray-200 rounded-md">
            <div className="flex flex-col items-center space-y-4">
                <div className="scale-90 h-[250px] w-full flex items-center justify-center">
                    <AnimatePresence mode="wait">{renderNetwork()}</AnimatePresence>
                </div>
                <div className="text-sm text-gray-600 self-start">
                    Journey: {journey.length > 0 ? journey.join(' → ') : ''}
                </div>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center space-x-1">
                <button
                    className="p-[2px] rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? (
                        <svg
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 9v6m4-6v6"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                        </svg>
                    )}
                </button>
                {[0.5, 1, 1.5, 2].map((s) => (
                    <button
                        key={s}
                        className={`px-2 py-1 text-xs rounded ${speed === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                            } hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
                        onClick={() => setSpeed(s)}
                    >
                        {s}x
                    </button>
                ))}
            </div>
        </div>
    );
}
