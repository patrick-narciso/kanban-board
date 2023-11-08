import { UpdateCardApi } from './update-cards.types';
import { useApi } from '@/hooks/use-api';

export const UpdateCards: UpdateCardApi = ({ id, titulo, conteudo, lista }) => {
  const { data: card } = useApi({
    path: `/cards/${id}`,
    method: 'put',
    body: {
      id,
      titulo,
      conteudo,
      lista,
    },
  });

  return {
    card,
  };
};
