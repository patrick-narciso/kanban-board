import { FunctionComponent } from 'react';
import { CardProps } from './Card.types';
import { Container, Description, Title } from './Card.styles';

const Card: FunctionComponent<CardProps> = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
