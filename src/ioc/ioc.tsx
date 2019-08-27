import React, { useContext } from 'react';
import { Container, interfaces, injectable } from 'inversify';

const InjectorContext = React.createContext<{ container: Container | null }>({
  container: null
});

type Props = {
  container: Container;
};

export const InjectorProvider: React.FC<Props> = props => {
  return (
    <InjectorContext.Provider value={{ container: props.container }}>
      {props.children}
    </InjectorContext.Provider>
  );
};

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(InjectorContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}

export { Container, injectable };
