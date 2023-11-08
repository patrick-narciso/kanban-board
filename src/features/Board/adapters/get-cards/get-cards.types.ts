import { Card } from '@/entities';

export type GetCardsApi = () => {
  cards: Card[];
};
