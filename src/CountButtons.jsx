import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

import { rxjsStore } from './store/rxjsStore';
import { useEffect, useState } from 'react';

import { from, fromEvent, map } from 'rxjs';

function CountButtons() {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    rxjsStore.setStoreCounter(counter - 1);
  };
  const handlePlus = () => {
    rxjsStore.setStoreCounter(counter + 1);
  };

  useEffect(() => {
    rxjsStore.getStoreCounter().subscribe((count) => {
      setCounter((prev) => count);
    });
  }, []);

  useEffect(() => {
    let stream$ = fromEvent(window, 'keyup')
      .pipe(
        map((x) => {
          if (x.code == 'Space') handlePlus();
        }),
      )
      .subscribe();
    return () => stream$.unsubscribe();
  }, [counter]);

  return (
    <div className='button-container'>
      <button className='count-btn' onClick={handleMinus}>
        <MinusIcon className='count-btn-icon' />
      </button>
      <button className='count-btn' onClick={handlePlus}>
        <PlusIcon className='count-btn-icon' />
      </button>
    </div>
  );
}
export default CountButtons;
