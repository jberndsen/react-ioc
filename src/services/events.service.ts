import { injectable } from '../ioc/ioc';

export interface IEventService {
  subscribe(callback: Function): Function;
  notify(event: IEvent): void;
}

export interface IEvent {
  type: string;
  payload?: any;
}

@injectable()
export class EventService implements IEventService {
  private subscriptions: Array<Function>;

  constructor() {
    this.subscriptions = [];
  }

  subscribe(fn: Function): Function {
    const index = this.subscriptions.push(fn);
    return () => {
      this.subscriptions = this.subscriptions.splice(index, 1);
    };
  }

  notify(event: IEvent) {
    this.subscriptions.forEach(subscription => {
      subscription(event);
    });
  }
}
