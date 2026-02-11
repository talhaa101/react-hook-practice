// useEffext without Dependencys

import React, { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  // const [otherCount, setOtherCount] = useState(5);
  // const [time, setTime]= useState(0);

  // useEffect clean up function example 
  // useEffect(()=>){
  //   setInterval(()=>{
  //     setTime(time+1);
  //   },1000);

  //   return () => {  
  //     clearInterval(time);                                 

  //   });

  // let's learn about clean up function in useEffect

  useEffect(() => {
    console.log(`useEffect called! Count is: ${count}`);`` ;
    document.title = `${count} new messages!`;
  } );


  // useEffect(() => {
  //   document.title = `${otherCount} new messages!`;
  // }, [otherCount]);
  // // empty dependency array means this effect runs only once after the initial render

  return (
    // <div>
    //   <h1>Count: {count}</h1>
    //   <button onClick={() => setCount(count + 1)}>
    //     Increment +1
    //   </button>

    //   <h1>Other Count: {otherCount}</h1>
    //   <button onClick={() => setOtherCount(otherCount + 5)}>
    //     Increment Other Count +5
    //   </button> 
    // </div>

  
  <div>
    <h3>Count: {count}</h3>
    <button onClick={() => setCount(count + 1)}>
      Increment +1
    </button>
  </div>

  );
};

export default UseEffectDemo;
