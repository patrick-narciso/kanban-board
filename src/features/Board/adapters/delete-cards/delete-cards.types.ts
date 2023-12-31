import { Card } from '@/entities';

export type DeleteCardParams = {
  id: number;
};

export type DeleteCardApi = (params: DeleteCardParams) => Promise<{ cards: Card[] }>;
