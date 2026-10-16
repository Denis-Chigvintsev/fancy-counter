import React, { useState } from 'react';

import Count from './Count';
import ResetButton from './ResetButton';
import CountButtons from './CountButtons';

function Card() {
  return (
    <div className='card'>
      <Title />
      <Count />
      <ResetButton />
      <CountButtons />
    </div>
  );
}

export default Card;

function Title() {
  return <h1 className='title'>Fancy Counter</h1>;
}
