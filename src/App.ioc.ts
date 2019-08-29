import { Container } from './ioc/ioc';
import { IEventService, EventService } from './services/events.service';

// create a new IOC container
export const container = new Container();

// register injectable services used by our app (currently in transient scope, inversify default)
container
  .bind<IEventService>('eventService')
  .to(EventService)
  .inSingletonScope();
