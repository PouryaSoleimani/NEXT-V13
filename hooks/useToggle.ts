import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = (): void => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
}
