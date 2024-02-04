import React, { useState } from "react";

const One = () => {
  const dropArr = [1, 2, 3, 4, 5, 6, 7];
  const dropArr2 = [11, 12, 13];
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(11);
  console.log(value + "=" + value1);
  return (
    <div>
      <main>
        <select
          value={value}
          id=""
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {dropArr.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        {value == 6 ? (
          <select
            value={value1}
            id=""
            onChange={(e) => {
              setValue1(e.target.value);
            }}
          >
            {dropArr2.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default One;
