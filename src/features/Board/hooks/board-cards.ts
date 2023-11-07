import { GetCards } from '../adapters/get-cards/get-cards';

export const useBoardCards = () => {
  const { cards } = GetCards();

  return {
    cards,
  };
};
