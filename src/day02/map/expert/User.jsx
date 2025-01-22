import React from 'react';

const User = ({users}, i) => {
  // 유저의 이름(name), 전화번호(phone), 회사의 이름(company name), 도시이름(city)

  const {name, phone, company, address} = users;


  return (
    <div>
      <li>
        <p>이름 : {name}</p>
        <p>주소 : {phone}</p>
        <p>회사이름 : {company.name}</p>
        <p>도시이름 : {address.city}</p>
      </li>
    </div>
  );
};

export default User;