import { GetCardsApi } from './get-cards.types';
import { api } from '@/services/api';

export const GetCards: GetCardsApi = async () => {
  const { data } = await api.get('/cards');

  return {
    cards: data,
  };
};
