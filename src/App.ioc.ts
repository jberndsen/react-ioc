import { Container } from './ioc/ioc';
import { INameService, NameService } from './services/name.service';

// create a new IOC container
export const container = new Container();

// register injectable services used by our app (currently in transient scope, inversify default)
container.bind<INameService>('nameService').to(NameService);
