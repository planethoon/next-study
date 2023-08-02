import { useCallback, useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");
  // const onChangeValue = useCallback(
  //   (e) => {
  //     setValue(e.target.value);
  //   },
  //   [value]
  // );

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const isEmpty = (e) => {
    return e.length === 0;
  };

  return [value, onChangeValue, isEmpty(value)];
}
