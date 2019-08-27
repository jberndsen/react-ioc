import React from 'react';
import { useInjection } from './ioc/ioc';
import { INameService } from './services/name.service';

export const SomeOtherComponent: React.FC = () => {
  const nameService = useInjection<INameService>('nameService');

  return <div>hello {nameService.hello()}</div>;
};
