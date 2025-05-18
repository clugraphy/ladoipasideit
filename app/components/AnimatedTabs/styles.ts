export const styles = {
    container: {
        width: "100%",
        height: "60vh",
        maxHeight: 360,
        borderRadius: 10,
        background: "white",
        overflow: "hidden",
        boxShadow:
            "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
        display: "flex",
        flexDirection: "column",
    } as React.CSSProperties,

    nav: {
        background: "#fdfdfd",
        padding: "5px 5px 0",
        borderRadius: "10px",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottom: "1px solid #eeeeee",
        height: 44,
    } as React.CSSProperties,

    tabsBase: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        fontWeight: 500,
        fontSize: 14,
    } as React.CSSProperties,

    tabsContainer: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        fontWeight: 500,
        fontSize: 14,
        display: "flex",
        width: "100%",
    } as React.CSSProperties,

    tab: {
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: "100%",
        padding: "10px 15px",
        position: "relative",
        background: "white",
        cursor: "pointer",
        height: 24,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        minWidth: 0,
        userSelect: "none",
        color: "#0f1115",
        listStyle: "none",
        fontWeight: 500,
        fontSize: 14,
    } as React.CSSProperties,

    underline: {
        position: "absolute",
        bottom: -2,
        left: 0,
        right: 0,
        height: 2,
        background: "var(--accent)",
    } as React.CSSProperties,

    iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    } as React.CSSProperties,

    icon: {
        fontSize: 128,
    } as React.CSSProperties,
}; 