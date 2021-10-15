import { useEffect } from 'react';
//import Header from '../components/header';
import Tyres from '../components/tyres';
export default function Home() {
  useEffect(() => {
    document.title = 'Did you know?';
  }, []);

  //count the buttons clicked

  let num;
  let idArray = [];
  function countClicks(numq) {
    num = numq;
    idArray.unshift(num);

    // console.log('this is the params = ' + num);
    // console.log('this is the first array = ' + idArray);
  }
  return (
    <div className="grid gap-2 grid-cols-4">
      <Tyres id="1" increaseCount={countClicks} text={idArray} />
      <Tyres id="2" increaseCount={countClicks} text={idArray} />
      <Tyres id="3" increaseCount={countClicks} text={idArray} />
      <Tyres id="4" increaseCount={countClicks} text={idArray} />
      <Tyres id="5" increaseCount={countClicks} text={idArray} />
      <Tyres id="6" increaseCount={countClicks} text={idArray} />
      <Tyres id="7" increaseCount={countClicks} text={idArray} />
      <Tyres id="8" increaseCount={countClicks} text={idArray} />
      <Tyres id="9" increaseCount={countClicks} text={idArray} />
      <Tyres id="10" increaseCount={countClicks} text={idArray} />
    </div>
  );
}
