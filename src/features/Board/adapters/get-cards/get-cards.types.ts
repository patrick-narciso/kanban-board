export type Card = {
  id: number;
  titulo: string;
  conteudo: string;
  lista: string;
};

export type GetCardsApi = () => {
  cards: Card[];
};
