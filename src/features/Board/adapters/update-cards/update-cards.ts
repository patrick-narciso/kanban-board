import { UpdateCardApi } from './update-cards.types';
import { api } from '@/services/api';

export const UpdateCards: UpdateCardApi = async ({ id, titulo, conteudo, lista }) => {
  const { data } = await api.put(`/cards/${id}`, { titulo, conteudo, lista, id });
  return { card: data };
};
