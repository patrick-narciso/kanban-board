import { SetCardsApi } from './set-cards.types';
import { useApi } from '@/hooks/use-api';

export const SetCards: SetCardsApi = ({ titulo, conteudo, lista }) => {
  const { data: card } = useApi({
    path: '/cards',
    method: 'post',
    body: {
      titulo,
      conteudo,
      lista,
    },
  });

  return {
    card,
  };
};
