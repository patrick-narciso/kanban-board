import { DeleteCardApi } from './delete-cards.types';
import { useApi } from '@/hooks/use-api';

export const DeleteCards: DeleteCardApi = ({ id }) => {
  const { data: cards } = useApi({
    path: `/cards/${id}`,
    method: 'delete',
  });

  return {
    cards,
  };
};
