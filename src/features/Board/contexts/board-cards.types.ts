import { Card } from '@/entities';
import { Dispatch, SetStateAction } from 'react';

export type BoardCardsContextProps = {
  title: { [x: number]: string };
  description: { [x: number]: string };
  cards: Card[];
  isEditMode: { [x: number]: boolean };
  setEditMode: Dispatch<SetStateAction<{ [x: number]: boolean }>>;
  handleTitle: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleDescription: (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => void;
  handleCreateCard: (
    e: React.MouseEvent<HTMLElement>,
    title: string,
    description: string,
    list: string
  ) => Promise<{ card: Card }>;
  handleCancel: (e: React.MouseEvent<HTMLElement>, id: number) => void;
  handleUpdateCard: (
    e: React.MouseEvent<HTMLElement>,
    id: number,
    list?: string
  ) => Promise<{ card: Card }>;
  handleDeleteCard: (e: React.MouseEvent<HTMLElement>, id: number) => Promise<{ cards: Card[] }>;
  moveCard: (e: React.MouseEvent<HTMLElement>, id: number, list: string) => Promise<{ card: Card }>;
};
