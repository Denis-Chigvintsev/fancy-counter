import { rxjsStore } from './store/rxjsStore';
import { useEffect, useState } from 'react';

function Count() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    rxjsStore.getStoreCounter().subscribe((count) => {
      setCounter((prev) => count);
    });
  }, []);

  return <p className='count'>{counter}</p>;
}
export default Count;
