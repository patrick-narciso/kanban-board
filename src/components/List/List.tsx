import { FunctionComponent } from 'react';
import { ListItemProps, ListProps } from './List.types';
import { Container, Title } from './List.styles';

const ListItem: FunctionComponent<ListItemProps> = ({ children }) => {
  return <>{children}</>;
};

const List: FunctionComponent<ListProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export { List, ListItem };
