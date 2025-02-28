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



//set colorArray using from instead of fill and map
const colorArray = Array.from({length: 10}, () => `#${hexGen()}`);

const EthanHalf = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(false);

  const prev = (current + 9) % 10;
  const next = (current + 1) % 10;

  function handlePrevClick() {
    setCurrent((index) => (index + 9) % 10);
  }

  function handleNextClick() {
    setCurrent((index) => (index + 1) % 10);
  }

  function handleSelect() {
    setSelected(true);
  }

  return (
    //i was assigned the top half of the screen
    //
    <div style={{verticalAlign: "top", height: "50vh"}}>
        {selected ? (
          <div>
            <div style={{backgroundColor: colorArray[current] }}>
            <h1>GOOD CHOICE</h1>
              <button onClick={() => setSelected(false)}>Go Back</button>
            </div>
          </div>
        ) : (
          <div>
            <div className="colorDiv" style={{backgroundColor: colorArray[current] }}>
              <h1>Choose Your Fighter</h1>
              <p>Current Color: {colorArray[current]}</p>
              <p>Prev: {colorArray[prev]}</p>
              <p>Next: {colorArray[next]}</p>

              <button className='select'
                onClick={handleSelect}>
                  Select
              </button>
            </div>

            <div className="buttons">
              <button className="previous"
                onClick={handlePrevClick}
                style={{backgroundColor: colorArray[prev]}}>
                  {colorArray[prev]}
              </button>

              <button className="next"
                onClick={handleNextClick}
                style={{backgroundColor: colorArray[next]}}>
                  {colorArray[next]}
              </button>

            </div>

          </div>
      )}
    </div>
  )
}

export default EthanHalf