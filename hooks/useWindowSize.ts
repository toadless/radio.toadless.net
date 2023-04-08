import { useEffect, useState } from "react";

type WindowSize = {
    width: number | undefined,
    height: number | undefined
};

export default function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined
    });

    function handleResize(): void {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return (): void => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}