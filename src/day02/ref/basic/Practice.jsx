import React, { useRef, useState } from 'react';

const Practice = () => {
  const inputRef = useRef(null)
  // current는 해당 객체가 참조하고 있는 값을 저장하는 프로퍼티
  const [text, setText] = useState("")
  // text는 읽기 전용, 현재 상태값
  // setText는 상태 업데이트 함수

  const onClickToText = () => {
    setText(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={onClickToText}>입력</button>
      <p>{text}</p>
    </div>
  );
};

export default Practice;