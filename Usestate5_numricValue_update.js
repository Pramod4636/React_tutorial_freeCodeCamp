import React, { useState } from 'react';


const UseStateCounter = () => {
  const [value,setValue] = useState(0);
  const [complexvalue,setComplexvalue] = useState(0);

  
  const complexinc = () => { 
   
   // setTimeout(()=>{setComplexvalue(complexvalue+1);}, 2000);
   setTimeout(   
    ()=>{ setComplexvalue( (complexvalue) => { return (complexvalue+1);})}
    , 2000)
  }
  
  
  return (
    <React.Fragment>
      <h2>Counter value </h2>
      <h2> {value}</h2>

      <button type = "button" className='btn' onClick={()=>setValue(value+1)}>increment</button>
      <button type = "button" className='btn' onClick = {()=>setValue(0)}>reset</button>
      <button type = "button" className='btn' onClick = {()=>setValue(value-1)}>Decrement</button>
      <h2>Coxplex Counter value </h2>
      <h2> {complexvalue}</h2>
       {console.log(complexvalue)}
      <button type = "button" className='btn' onClick={complexinc}>increment complex value</button>

    </React.Fragment>
  );

};

export default UseStateCounter;
