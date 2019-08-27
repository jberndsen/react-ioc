import { injectable } from '../ioc/ioc';

export interface INameService {
  hello(): string;
}

@injectable()
export class NameService implements INameService {
  hello() {
    return 'World';
  }
}
