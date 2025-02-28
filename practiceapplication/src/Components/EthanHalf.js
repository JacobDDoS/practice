//ethan dye's code 
//practice react for 2025 cornhack
//"character select screen" with colors


import React, {useState} from 'react';
import "../CSS/ethan.css";

//stolen from colorpage
const hexGen = () => {
  const randomHex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  return randomHex() + randomHex() + randomHex();
}

//functions for buttons
function Previous({prevColor, onPreviousClick}) {
  return (
    <button className="previous"
      onClick={onPreviousClick}
      style={{backgroundColor: prevColor}}>
        {prevColor}
      </button>
  );
}

function Next({nextColor, onNextClick}) {
  return (
    <button className="next"
      onClick={onNextClick}
      style={{backgroundColor: nextColor}}>
        {nextColor}
      </button>
  );
}


//set starting variables, colorArray constant
let current = 0;
let next = 1;
let prev = 9;
const colorArray = Array(10).fill().map(() => `#${hexGen()}`);

const EthanHalf = () => {

  const [prevColor, setPrevColor] = useState(colorArray[prev]);
  const [currentColor, setCurrentColor] = useState(colorArray[current]);
  const [nextColor, setNextColor] = useState(colorArray[next]);

  function handlePrevClick() {
    if (current === 0) {
      current = 9;
    } else {
      current--;
    }

    //after current is decremented to 0, jump prev from 0 to 9
    if (current === 0) {
      prev = 9;
      next--;
    // if current is 8, jump next to 9
    } else if ( current === 8) {
      next = 9;
      prev--
    } else {
      prev--;
      next--;
    }
    setPrevColor(colorArray[prev]);
    setCurrentColor(colorArray[current]);
    setNextColor(colorArray[next]);
  }

  function handleNextClick() {
    if (current === 9) {
      current = 0;
    } else {
      current++;
    }

    //similar code to handlePrevClick()
    if (current === 9) {
      next = 0;
      prev++;
    } else if (current === 1) {
      prev = 0;
      next++;
    } else {
      next++;
      prev++;
    }
    setPrevColor(colorArray[prev]);
    setCurrentColor(colorArray[current]);
    setNextColor(colorArray[next]);
  }

  return (
    //i was assigned the top half of the screen
    //could probably do something with the button divs?
    <div style={{verticalAlign: "top", height: "50vh"}}>
        
        <div className="colorDiv" style={{backgroundColor: `${currentColor}`}}>
          <h1>Choose Your Fighter</h1>
          <p>Current Color: {currentColor}</p>
          <p>Prev: {prevColor}</p>
          <p>Next: {nextColor}</p>
        </div>

        <div className="buttons">

          <div className="previousDiv" >
            <Previous prevColor={prevColor} onPreviousClick={() => {handlePrevClick()}}/>
          </div>

          <div className="nextDiv" style={{backgroundColor: `${nextColor}`}}>
            <Next nextColor={nextColor} onNextClick={() => {handleNextClick()}}/>
          </div>

        </div>
    </div>
  )
}

export default EthanHalf