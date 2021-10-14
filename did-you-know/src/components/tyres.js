import React from 'react';
import { useState } from 'react';

function Tyres(props) {
  //random number
  const random = Math.floor(Math.random() * 11);
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

  //reveal
  const [reveal, setReveal] = useState(<div></div>);

  const showAnswer = () => {
    //increase count
    props.increaseCount(props.id);

    let test = props.text;
    if (test.length <= answerArray.length) {
      setReveal(
        <div className="max-w-md py-3 px-3 shadow-lg rounded-lg my-19 bg-red-primary">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://img.favpng.com/12/0/9/incandescent-light-bulb-clip-art-idea-lamp-png-favpng-1mAgcWvFPYXaK1Yzrer2h8CUT.jpg"
              alt="flip tyre"
            />
          </div>
          <div>
            <p className="mt-2 font-semibold text-2xl text-white">
              {answerArray[test.length - 1]}
            </p>
          </div>
        </div>
      );
    } else if (test.length === 5) {
      let goldenNum = test[0].includes(random.toString());
      let goldenNum2 = test[1].includes(random.toString());
      let goldenNum3 = test[2].includes(random.toString());
      // console.log('this is the randcom number ' + random.toString());
      // console.log(test[0] + '  < - > ' + test[1]);
      // console.log(
      //   'First golden num = ' + goldenNum + ' Second golden num = ' + goldenNum2
      // );
      if (goldenNum || goldenNum2 || goldenNum3) {
        setReveal(
          <div className="max-w-md py-3 px-3 shadow-lg rounded-lg my-19 bg-white">
            <div>
              <h2 className="text-3xl font-bold text-red-primary">
                Congratulations
              </h2>
            </div>
            <img
              className="w-40 h-50 object-cover"
              src="egg.jpg"
              alt="you win"
            />
          </div>
        );
      } else {
        setReveal(
          <div className="max-w-md py-3 px-3 shadow-lg rounded-lg my-19 bg-white">
            <div>
              <h2 className=" text-3xl font-bold text-red-primary">
                Try Again Next Time
              </h2>
            </div>
            <img
              className="w-40 h-50 object-cover"
              src="lose.png"
              alt="you win"
            />
          </div>
        );
      }
    } else {
      setReveal(<div></div>);
    }
  };
  return (
    <div className=" max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-20">
      {reveal}
      <div className="  flex justify-end mt-4">
        <button onClick={showAnswer}>
          <img
            src="dyk.png"
            alt="flip tyre"
            className="animate-wiggle w-25 h-20 object-cover"
          />
        </button>
      </div>
    </div>
  );
}

export default Tyres;
