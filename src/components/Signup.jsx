import React from "react";

function Signup({ title, inputType, value, onChange, isEmpty }) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{title}</div>
        <input type={inputType} value={value} onChange={onChange} />
        {isEmpty && <p>값을 입력하세요.</p>}
      </div>
    </div>
  );
}

const areEqual = (prev, next) => {
  return prev.value === next.value && prev.isEmpty === next.isEmpty;
};

export default React.memo(Signup, areEqual);
