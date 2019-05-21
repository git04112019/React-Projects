import React, {useState} from 'react';
import { useCountUp } from 'react-countup';


const CounterBox = (props) => {
  // Use hooks and destructuring to extend the props of countUp to this new component
  const { countUp } = useCountUp({ end: props.number, duration:6 });

return (

  <div className="counter-box counter-box pt-4 pt-md-0" >
    <div className="counter-ico">
      <span className="ico-circle" ><i className={props.icon} /></span>
    </div>
    <div className="counter-num">
      {/* Use hook */}
      <p className="counter">{countUp}</p>
      <span className="counter-text">{props.text}</span>
    </div>
  </div>

);
}


export default CounterBox;