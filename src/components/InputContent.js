import React, { useRef, useState } from "react";

const InputContent = () => {
  const radio = [
    { id: "_1", num: 1 },
    { id: "_2", num: 2 },
    { id: "_3", num: 3 },
  ];
  const [radioValue, setRadioValue] = useState("");

  const radioHandler = (e) => {
    const value = e.target.value;
    setRadioValue(value);
    console.log(checkboxRef);
    for (const element of checkboxRef.current) {
      element.checked = false;
      setChkArr([]);
    }
  };
  const checkbox = [
    { id: "_c1", num: "1c" },
    { id: "_c2", num: "2c" },
    { id: "_c3", num: "3c" },
  ];
  const [chkArr, setChkArr] = useState([]);
  const unitCheck = (e) => {
    if (e.target.checked) {
      setChkArr([...chkArr, e.target.value]);
    } else {
      setChkArr(chkArr.filter((item) => item !== e.target.value));
    }
  };
  const checkboxRef = useRef([]);
  return (
    <div>
      <h1>InputContent</h1>
      <div>
        {radio.map((value) => (
          <label key={value.id}>
            <input
              type="radio"
              value={value.num}
              name="radio-content"
              onClick={radioHandler}
            />
            {value.num}번
          </label>
        ))}
      </div>
      <h3>radioValue: {radioValue}</h3>
      <div>CheckboxContent</div>
      <div>
        {checkbox.map((value, index) => (
          <label key={value.id}>
            <input
              type="checkbox"
              value={value.num}
              onChange={unitCheck}
              ref={(el) => (checkboxRef.current[index] = el)}
            />
            {value.num}박스
          </label>
        ))}
      </div>
    </div>
  );
};

export default InputContent;
