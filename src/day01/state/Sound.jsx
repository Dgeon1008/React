import React, { useState } from 'react';
// 강아지 버튼, 고양이 버튼 2개를 생성한다.
// 버튼을 눌렀을 때 각 울음소리가 나오도록 화면에 구현한다.
// 강아지 버튼을 누르면 멍멍이 화면에 출력되고,
// 고양이 버튼을 누르면 야옹이 화면에 출력된다.
const Sound = () => {
  const [sound, setSound] = useState("")
  const dog = () => {
    setSound("멍멍")
  }
  const cat = () => {
    setSound("야옹")
  }
  return (
    <div>
      <button onClick={dog}>강아지 버튼</button>
      <button onClick={cat}>고양이 버튼</button>
      <div>{sound}</div>
    </div>
  );
};

export default Sound;