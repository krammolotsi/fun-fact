import { useEffect, useState } from 'react';
//import Header from '../components/header';
import Tyres from '../components/tyres';
export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  //count the buttons clicked

  let num;
  let idArray = [];
  function countClicks(numq) {
    num = numq;
    idArray.unshift(num);

    console.log('this is the params = ' + num);
    console.log('this is the first array = ' + idArray);
  }
  //conditions

  // if (count == 1) {
  //   setReveal(<p>{firstDYK}</p>);
  // }
  // if (count == 2) {
  //   setReveal(<p>{secondDYK}</p>);
  // }
  // if (count == 3) {
  //   setReveal(<p>{win}</p>);
  // } else {
  //   setReveal(<p>{lose}</p>);
  // }          {/* <Tyres id="1" increaseCount={countClicks} text={idArray} /> */}
  return (
    <div className="grid gap-2 grid-cols-4">
      <Tyres id="1" increaseCount={countClicks} text={idArray} />
      <Tyres id="2" increaseCount={countClicks} text={idArray} />
      <Tyres id="3" increaseCount={countClicks} text={idArray} />
      <Tyres id="4" increaseCount={countClicks} text={idArray} />
      <Tyres id="5" increaseCount={countClicks} text={idArray} />
      <Tyres id="1" increaseCount={countClicks} text={idArray} />
      <Tyres id="2" increaseCount={countClicks} text={idArray} />
      <Tyres id="3" increaseCount={countClicks} text={idArray} />
      <Tyres id="4" increaseCount={countClicks} text={idArray} />
      <Tyres id="5" increaseCount={countClicks} text={idArray} />
    </div>
  );
}
