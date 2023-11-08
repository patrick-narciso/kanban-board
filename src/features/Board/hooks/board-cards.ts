import { DeleteCards } from '../adapters/delete-cards/delete-cards';
import { GetCards } from '../adapters/get-cards/get-cards';
import { SetCards } from '../adapters/set-cards/set-cards';
import { UpdateCards } from '../adapters/update-cards/update-cards';
import { DeleteCardParams, SaveCardParams, UpdateCardParams } from './board-cards.types';

export const useGetBoardCards = () => {
  const { cards } = GetCards();

  return {
    cards,
  };
};

export const useCreateBoardCards = ({ titulo, conteudo, lista }: SaveCardParams) => {
  const { card } = SetCards({ titulo, conteudo, lista });

  return {
    card,
  };
};

export const useUpdateBoardCards = ({ id, titulo, conteudo, lista }: UpdateCardParams) => {
  const { card } = UpdateCards({ id, titulo, conteudo, lista });

  return {
    card,
  };
};

export const useDeleteBoardCards = ({ id }: DeleteCardParams) => {
  const { cards } = DeleteCards({ id });

  return {
    cards,
  };
};
