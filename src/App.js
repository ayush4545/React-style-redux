import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux"
// import { Button } from './component/Button'
// import { GlobalStyles } from './component/GlobalStyle'

import { incNumber, decNumber } from './actions/index'

function App() {
  //For Style-Componet 
  // return (
  //   <div>
  //     <GlobalStyles />
  //     <Button text="click me" color="lightblue"></Button>
  //     <Button text="click me" color="blue"></Button>
  //     <Button text="click me" color="lightgray"></Button>
  //   </div>
  // );

  const mystate = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  console.log(mystate)
  return (
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input type="text" className="quantity__input" name="quantity" value={mystate} />
        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
      </div>

    </div>
  );
}

export default App;
