import { useEffect, useState, useRef } from "react";

export const useThrottling = () => {
  const throatleRef = useRef(null);

  function throttle(fun, delay = 1000) {
    if (throatleRef.current === null) {
      fun();
      throatleRef.current = setTimeout(() => {
        throatleRef.current = null;
      }, delay);
    }
  }

  return throttle;
};
