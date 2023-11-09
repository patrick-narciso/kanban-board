import { Card } from '@/entities';

export type SetCardParams = {
  titulo: string;
  conteudo: string;
  lista: string;
};

export type SetCardsApi = (params: SetCardParams) => Promise<{ card: Card }>;
