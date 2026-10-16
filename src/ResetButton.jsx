import { rxjsStore } from './store/rxjsStore';
import { useEffect, useState } from 'react';

import { ResetIcon } from '@radix-ui/react-icons';

function ResetButton() {
  function handleClick() {
    rxjsStore.setStoreCounter(0);
  }
  return (
    <button className='rest-btn' onClick={handleClick}>
      <ResetIcon className='reset-btn-icon' />
    </button>
  );
}
export default ResetButton;
