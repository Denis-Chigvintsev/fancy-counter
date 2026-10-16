import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

import { rxjsStore } from './store/rxjsStore';
import { useEffect, useState } from 'react';

import {
  from,
  fromEvent,
  map,
  distinctUntilChanged,
  debounceTime,
  take,
} from 'rxjs';

function CountButtons() {
  const [counter, setCounter] = useState(0);

  const handleMinus = (e) => {
    rxjsStore.setStoreCounter(counter - 1);
    e.currentTarget.blur();
  };
  const handlePlus = (e) => {
    rxjsStore.setStoreCounter(counter + 1);
    e.currentTarget.blur();
  };

  useEffect(() => {
    rxjsStore.getStoreCounter().subscribe((count) => {
      setCounter((prev) => count);
    });
  }, []);

  useEffect(() => {
    let stream$ = fromEvent(document, 'keyup')
      .pipe(
        map((x) => {
          if (x.code == 'Space') handlePlus();
        }),
        debounceTime(300),
        take(1),
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
