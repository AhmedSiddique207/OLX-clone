import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset,incrementByAmount } from "../features/CounterSlice";


function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount,setIncrementAmount]=useState(0)
  const addValue = Number(incrementAmount)||0;

  return (
    <>
      <center>
        <b>
          <h1 className="mt-3"> {count}</h1>
        </b>
        <div>
          <button onClick={() => dispatch(increment())} style={{ width: "7rem", color: "white", backgroundColor: "black", cursor: "pointer" }}   >Increment</button>&nbsp;
          <button onClick={() => dispatch(decrement())} style={{ width: "7rem", color: "black", backgroundColor: "white", cursor: "pointer" }} >Decrement</button>&nbsp;
          
        </div>
        <div className="mt-3">
          <input type="text" value={incrementAmount} onChange={(event) => setIncrementAmount(event.target.value)} style={{ width: "14rem"}}/>
          <br/>
          <button className="mt-3" onClick={() => dispatch(incrementByAmount(addValue))} style={{ width: "7rem", color: "black", backgroundColor: "white", cursor: "pointer" }}   >Add Amount</button>&nbsp;
          <button className="mt-3" onClick={() => dispatch(reset())} style={{ width: "7rem", color: "white", backgroundColor: "black", cursor: "pointer" }}   >Reset</button>&nbsp;
        
        </div>
      </center>
    </>
  );
}

export default Counter;

