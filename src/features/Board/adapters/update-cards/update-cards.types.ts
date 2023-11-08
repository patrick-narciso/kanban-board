import { Card } from '@/entities';

export type UpdateCardParams = {
  id: number;
  titulo: string;
  conteudo: string;
  lista: string;
};

export type UpdateCardApi = (params: UpdateCardParams) => {
  card: Card;
};
