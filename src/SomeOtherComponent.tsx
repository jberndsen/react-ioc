import React from 'react';
import { useInjection } from './ioc/ioc';
import { IEventService, IEvent } from './services/events.service';

export const SomeOtherComponent: React.FC = () => {
  const events = useInjection<IEventService>('eventService');

  const unsubscribe = events.subscribe((event: IEvent) =>
    console.log('SomeOtherComponent received: ', event)
  );

  setTimeout(() => {
    events.notify({ type: 'ADDED_TO_CART', payload: 1 });
    unsubscribe();
    events.notify({ type: 'ADDED_TO_CART', payload: 2 });
  }, 100);

  return <div>This is SomeOtherComponent</div>;
};
