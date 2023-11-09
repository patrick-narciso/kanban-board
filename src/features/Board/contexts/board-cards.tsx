import { createContext, FunctionComponent, PropsWithChildren, useState, useEffect } from 'react';
import { BoardCardsContextProps } from './board-cards.types';
import { SetCards } from '../adapters/set-cards/set-cards';
import { UpdateCards } from '../adapters/update-cards/update-cards';
import { DeleteCards } from '../adapters/delete-cards/delete-cards';
import { GetCards } from '../adapters/get-cards/get-cards';
import { Card } from '@/entities';

export const BoardCardsContext = createContext<BoardCardsContextProps>(
  {} as BoardCardsContextProps
);

export const BoardCardsProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [title, setTitle] = useState<{ [x: number]: string }>({});
  const [description, setDescription] = useState<{ [x: number]: string }>({});
  const [isEditMode, setEditMode] = useState<{ [x: number]: boolean }>({});
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    getCards();
  }, []);

  const findCard = (id: number) => {
    return cards.find(({ id: cardId }) => cardId === id);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    event.stopPropagation();
    const card = findCard(id);
    if (card) setTitle({ [id]: event.target.value });
  };

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => {
    event.stopPropagation();
    const card = findCard(id);
    if (card) setDescription({ [id]: event.target.value });
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.stopPropagation();
    getCards();
    setEditMode((prev) => ({ ...prev, [id]: false }));
  };

  const getCards = async () => {
    const { cards } = await GetCards();
    setCards(cards);

    return {
      cards,
    };
  };

  const handleCreateCard = async (
    e: React.MouseEvent<HTMLElement>,
    title: string,
    description: string,
    list: string
  ) => {
    e.stopPropagation();
    const { card } = await SetCards({ titulo: title, conteudo: description, lista: list });
    setCards((prev) => [...prev, card]);

    return {
      card,
    };
  };

  const moveCard = async (e: React.MouseEvent<HTMLElement>, id: number, list: string) => {
    e.stopPropagation();
    const foundCard = findCard(id);
    const { card } = await UpdateCards({
      id,
      titulo: foundCard!.titulo,
      conteudo: foundCard!.conteudo,
      lista: list,
    });
    getCards();

    return {
      card,
    };
  };

  const handleUpdateCard = async (e: React.MouseEvent<HTMLElement>, id: number, list?: string) => {
    e.stopPropagation();
    const { card } = await UpdateCards({
      id,
      titulo: title[id],
      conteudo: description[id],
      lista: list || 'To Do',
    });
    setEditMode((prev) => ({ ...prev, [id]: false }));
    getCards();

    return {
      card,
    };
  };

  const handleDeleteCard = async (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.stopPropagation();
    const { cards } = await DeleteCards({ id });
    setCards(cards);

    return {
      cards,
    };
  };

  return (
    <BoardCardsContext.Provider
      value={{
        title,
        description,
        cards,
        isEditMode,
        setEditMode,
        handleTitle,
        handleDescription,
        handleCreateCard,
        handleUpdateCard,
        handleDeleteCard,
        handleCancel,
        moveCard,
      }}
    >
      {children}
    </BoardCardsContext.Provider>
  );
};
