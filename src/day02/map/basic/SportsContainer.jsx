import React from 'react';
import Sports from './Sports';

const sportsList = [
  {
    name : "축구",
    member : 11
  },
  {
    name : "농구",
    member : 5
  },
  {
    name : "테니스",
    member : 4
  },
  {
    name : "야구",
    member : 9
  },
  {
    name : "배구",
    member : 6
  },
]

const SportsContainer = () => {
  return (
    <div>
      <ul>
        {sportsList.map((sports, i) => <Sports key={i} sports={sports}/>)}
      </ul>
    </div>
  );
};

export default SportsContainer;

// {
//   id: 10,
//   name: "Clementina DuBuque",
//   username: "Moriah.Stanton",
//   email: "Rey.Padberg@karina.biz",
//   address: {
//     street: "Kattie Turnpike",
//     suite: "Suite 198",
//     city: "Lebsackbury",
//     zipcode: "31428-2261",
//     geo: {
//       lat: "-38.2386",
//       lng: "57.2232",
//     },
//   },
//   phone: "024-648-3804",
//   website: "ambrose.net",
//   company: {
//     name: "Hoeger LLC",
//     catchPhrase: "Centralized empowering task-force",
//     bs: "target end-to-end models",
//   },
// },