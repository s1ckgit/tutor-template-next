import { useState } from "react";

export const useSlider = (maxIndex: number) => {
  const [index, setIndex] = useState<number>(0);
  const toggleUp = () => setIndex(prev => (prev + 1) > maxIndex ? 0 : prev + 1);
  const toggleDown = () => setIndex(prev => (prev - 1) < 0 ? maxIndex : prev - 1);

  return {
    index,
    toggleUp,
    toggleDown
  };
};
