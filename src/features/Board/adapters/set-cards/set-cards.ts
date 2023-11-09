import { SetCardsApi } from './set-cards.types';
import { api } from '@/services/api';

export const SetCards: SetCardsApi = async ({ titulo, conteudo, lista }) => {
  const { data } = await api.post('/cards', { titulo, conteudo, lista });

  return {
    card: data,
  };
};
