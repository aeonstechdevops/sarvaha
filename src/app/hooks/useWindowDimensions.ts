import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

interface WindowDimensions {
  width: number;
  height: number;
}

const getWindowDimensions = (): WindowDimensions => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    // Return default dimensions if window is not available (e.g., server-side rendering)
    return { width: isMobile ? 360 : 1920, height: isMobile ? 800 : 1080 };
  }
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions(),
  );

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
};
