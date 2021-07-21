import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import {applyNumber,changeOperation,clearDisplay,clearMemory,currentMemory,newMemory} from './actions/index'
import { useReducer } from 'react';
import reducer, {initialState} from './reducers/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  const applyClick = (num) => {
      dispatch(applyNumber(num))
  }
  const applyOpChange = (op) => {
     dispatch((changeOperation(op)))
  }

  const clearDisplayCLick = () => {
    dispatch(clearDisplay());
  }
 

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png" alt='Lambda'/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(newMemory())}/>
              <CalcButton value={"MR"} onclick={() => dispatch(currentMemory())}/>
              <CalcButton value={"MC"} onclick={() => dispatch(clearMemory())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => applyClick(1)}/>
              <CalcButton value={2} onClick={() => applyClick(2)}/>
              <CalcButton value={3} onClick={() => applyClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applyClick(4)}/>
              <CalcButton value={5} onClick={() => applyClick(5)}/>
              <CalcButton value={6} onClick={() => applyClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applyClick(7)}/>
              <CalcButton value={8} onClick={() => applyClick(8)}/>
              <CalcButton value={9} onClick={() => applyClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => applyOpChange('+')}/>
              <CalcButton value={"*"} onClick={() => applyOpChange('*')}/>
              <CalcButton value={"-"} onClick={() => applyOpChange('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearDisplayCLick}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
