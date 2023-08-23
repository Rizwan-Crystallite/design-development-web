const theme = {
    tabsHeader: {
        defaultProps: {
            className: "flex-wrap justify-center gap-4 bg-transparent rounded-none p-0",
        }
    },
    tab: {
        defaultProps: {
            className: "transition-none",
            activeClassName: "text-white",
            disabled: false,
        },
        styles: {
            base: {
                tab: {
                    initial: {
                        w: "w-max",
                        bg: "bg-transparent",
                        py: "py-3",
                        px: "px-4",
                        color: "text-blue-gray-900",
                        fontSmoothing: "antialiased",
                        fontFamily: "font-sans",
                        fontSize: "text-lg",
                    }
                },
                indicator: {
                    position: "absolute transition-none",
                    inset: "inset-0",
                    zIndex: "z-10",
                    height: "h-full",
                    bg: "bg-[#665FF3]",
                    borderRadius: "rounded-[10px]",
                    boxShadow: "shadow-none",
                },
            },
        },
    },
};
export default theme;