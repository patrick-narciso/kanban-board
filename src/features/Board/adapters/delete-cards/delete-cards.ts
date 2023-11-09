import { DeleteCardApi } from './delete-cards.types';
import { api } from '@/services/api';

export const DeleteCards: DeleteCardApi = async ({ id }) => {
  const { data } = await api.delete(`/cards/${id}`);

  return {
    cards: data,
  };
};
