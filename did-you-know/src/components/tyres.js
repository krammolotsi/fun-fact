import React from 'react';
import { useState } from 'react';

function Tyres(props) {
  //tyre clicked
  let myid = props.id;
  let idArray = [];

  //random number
  //const random = Math.floor(Math.random() * 11);

  //first and second did you know
  const firstDYK = 'October is Breast Cancer Awareness Month?';
  const secondDYK =
    'Every minute, somewhere in the world, a woman dies from breast cancer. That is more than 1,400 women every day.';
  const thirdDYK =
    'Women who get regularly screened for breast cancer have a 47% lower risk of dying from the disease compared to those who don’t?';
  const forthDYK =
    'Breast cancer cannot be prevented, but there are things such as diet, exercise, and other healthy lifestyle choices that can help decrease your risk for developing breast cancer.';
  //array of answers
  const answerArray = [firstDYK, secondDYK, thirdDYK, forthDYK];
  //golden egg or not
  const win = 'golden egg';
  const lose = 'silver egg';

  //reveal
  const [reveal, setReveal] = useState(<div className={{ zIndex: 0 }}></div>);
  idArray.unshift(...myid);

  const showAnswer = () => {
    //increase count
    props.increaseCount(props.id);
    let test = props.text;
    if (test.length <= answerArray.length) {
      setReveal(
        <div className="max-w-md py-3 px-3 shadow-lg rounded-lg my-19 bg-blue-medium">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://img.favpng.com/12/0/9/incandescent-light-bulb-clip-art-idea-lamp-png-favpng-1mAgcWvFPYXaK1Yzrer2h8CUT.jpg"
              alt="flip tyre"
            />
          </div>
          <div>
            <p className="mt-2 text-gray-600">{answerArray[test.length - 1]}</p>
          </div>
        </div>
      );
    } else {
      console.log('we done now');
    }
  };
  return (
    <div className="max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-20">
      {reveal}
      <div className="flex justify-end mt-4">
        <button onClick={showAnswer}>
          <img
            src="dyk.png"
            alt="flip tyre"
            className="w-25 h-20 object-cover"
          />
        </button>
      </div>
    </div>
  );
}

export default Tyres;
