export interface TabItem {
    icon: string;
    label: string;
}

export interface AnimatedTabsProps {
    items?: TabItem[];
    defaultTab?: TabItem;
    className?: string;
    onChange?: (tab: TabItem) => void;
} 