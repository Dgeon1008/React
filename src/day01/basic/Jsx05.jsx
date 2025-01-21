// age를 상수로 임의로 설정하고,
// 20세 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력한다.

import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
  const age = 25;
  // const [pass, notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨", "꽝"];
  const isAdult = age > 19;
  const isEven = isAdult % 2 === 0;

  const passComponent = <PassComponent />
  const notPassComponent = <NotPassComponent />
  const luckyComponent = <luckyComponent/>
  const unLuckyComponent = <UnLuckyComponent/>

  const enter = isAdult ? passComponent : notPassComponent
  const win = isEven ? luckyComponent : unLuckyComponent

  return (
    <div>
      당신의 나이는 {age}이므로
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;