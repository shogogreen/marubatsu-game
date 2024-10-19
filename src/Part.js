import React from 'react';

const Part = (props) => {
  if (props.state === '.') {
    return <button disabled={props.state === '' ? false: true} onClick={() => {props.changeState(props.id)}} style={{ fontSize: '50px' }}>〇</button>;
  } else if (props.state === 'x') {
    return <button disabled={props.state === '' ? false: true} onClick={() => {props.changeState(props.id)}} style={{ fontSize: '50px' }}>×</button>;
  }
  return <button disabled={(props.state === '' && props.isVictory === null) ? false: true} onClick={() => {props.changeState(props.id)}}>{props.state}</button>;
};


export default Part;