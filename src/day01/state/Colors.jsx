import React, { useState } from 'react';

// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자의 색깔을 없앤다.

const Colors = () => {
  const result = "김동건"
  const [color, setColor] = useState({color : "orange"})
  const red = () => {
    setColor({color : "red"})
  }
  const blue = () => {
    setColor({color : "blue"})
  }
  const onPink = (e) => {
    const pink = (e).target.value === "핑크색"
    if(pink){
      setColor({color : "pink"})
    }
  }
  return (
    <div>
      <p style={color}>{result}</p>
      <input onChange={onPink}type="text" placeholder='핑크색 입력'/>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  );
};

export default Colors;
