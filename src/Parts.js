import React from 'react';
import Part from './Part';

const Parts = (props) => {
  const state = ['', '', '', '', '', '', '', '', ''];

  if (props.isMaruPhase === true && props.maru.length === 3) {
    props.maru.forEach((num) => {
      state[num] = "〇";
    });
    state[props.maru[0]] = ".";
  
    props.batsu.forEach((num) => {
      state[num] = "×";
    });
  } else if (props.isMaruPhase === false && props.batsu.length === 3) {
    props.maru.forEach((num) => {
      state[num] = "〇";
    });
  
    props.batsu.forEach((num) => {
      state[num] = "×";
    });
    state[props.batsu[0]] = "x";
  } else {
    props.maru.forEach((num) => {
      state[num] = "〇";
    });
  
    props.batsu.forEach((num) => {
      state[num] = "×";
    });
  }

  return (
    <div>
      <div>
        <Part id={0} state={state[0]} changeState={props.changeState} isVictory={props.isVictory}/>
        <Part id={1} state={state[1]} changeState={props.changeState} isVictory={props.isVictory}/>
        <Part id={2} state={state[2]} changeState={props.changeState} isVictory={props.isVictory}/>
      </div>
      <div>
        <Part id={3} state={state[3]} changeState={props.changeState} isVictory={props.isVictory}/>
        <Part id={4} state={state[4]} changeState={props.changeState} isVictory={props.isVictory}/>
        <Part id={5} state={state[5]} changeState={props.changeState} isVictory={props.isVictory}/>
      </div>
      <div>
        <Part id={6} state={state[6]} changeState={props.changeState} isVictory={props.isVictory}/>
        <Part id={7} state={state[7]} changeState={props.changeState} isVictory={props.isVictory}/>
        <Part id={8} state={state[8]} changeState={props.changeState} isVictory={props.isVictory}/>
      </div>
    </div>
  );
};

export default Parts;