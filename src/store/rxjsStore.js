import { BehaviorSubject } from 'rxjs';

const counterGlobalStore = new BehaviorSubject(0);

function setStoreCounter(newValue) {
  counterGlobalStore.next(newValue);
}

function getStoreCounter() {
  return counterGlobalStore;
}

export const rxjsStore = { setStoreCounter, getStoreCounter };
