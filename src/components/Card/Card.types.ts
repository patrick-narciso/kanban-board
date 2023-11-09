import { Card } from '@/entities';
import { Dispatch, SetStateAction } from 'react';

type MoveCard = (
  e: React.MouseEvent<HTMLElement>,
  id: number,
  list: string
) => Promise<{ card: Card }>;

export type CardProps = {
  title: { [x: number]: string };
  id: number;
  list: string;
  description: { [x: number]: string };
  isEditMode: boolean;
  originalTitle: string;
  originalContent: string;
  setEditMode: Dispatch<SetStateAction<{ [x: number]: boolean }>>;
  handleTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescription: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleCancel: (e: React.MouseEvent<HTMLElement>, id: number) => void;
  handleUpdateCard: (e: React.MouseEvent<HTMLElement>, id: number) => Promise<{ card: Card }>;
  moveLeft?: MoveCard;
  moveRight?: MoveCard;
  handleDeleteCard: (e: React.MouseEvent<HTMLElement>, id: number) => Promise<{ cards: Card[] }>;
};
