import React from 'react';
import { useInjection } from './ioc/ioc';
import { IEventService, IEvent } from './services/events.service';

export const AnotherComponent: React.FC = () => {
  const events = useInjection<IEventService>('eventService');

  events.subscribe((event: IEvent) =>
    console.log('AnotherComponent received: ', event)
  );

  return <div>This is AnotherComponent</div>;
};
