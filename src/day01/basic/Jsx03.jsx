// name과 age를 입력 후 화면에 랜더링 시키기 실습.
// 5분

import React from "react";

export default function Jsx03(){
  const name = "김동건"
  const age = 26
  return (
    <React.Fragment>
      <p>저의 이름은 {name}이고 나이는 {age}입니다.</p>
    </React.Fragment>
  )
}
