export type SaveCardParams = {
  titulo: string;
  conteudo: string;
  lista: string;
};

export type UpdateCardParams = {
  id: number;
} & SaveCardParams;

export type DeleteCardParams = {
  id: number;
};
