import React from 'react';

const Part = (props) => {
  if (props.state === '.') {
    return <button disabled={true} onClick={() => {props.changeState(props.id)}} style={{ fontSize: '50px', color: 'blue' }}>〇</button>;
  } else if (props.state === 'x') {
    return <button disabled={true} onClick={() => {props.changeState(props.id)}} style={{ fontSize: '50px' }}>×</button>;
  } else if (props.state === '〇') {
    return <button disabled={true} onClick={() => {props.changeState(props.id)}} style={{ color: 'blue' }}>{props.state}</button>;
  } else if (props.state === '×') {
    return <button disabled={true} onClick={() => {props.changeState(props.id)}}>{props.state}</button>;
  }
  return <button disabled={props.isVictory === null ? false: true} onClick={() => {props.changeState(props.id)}}>{props.state}</button>;
};


export default Part;