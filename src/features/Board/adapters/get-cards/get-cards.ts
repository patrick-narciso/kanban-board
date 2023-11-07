import { GetCardsApi } from './get-cards.types';
import { useApi } from '@/hooks/use-api';

export const GetCards: GetCardsApi = () => {
  const { data: cards } = useApi({
    path: '/cards',
    method: 'get',
  });

  return {
    cards,
  };
};
