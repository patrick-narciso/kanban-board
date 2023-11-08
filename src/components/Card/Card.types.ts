import { Card } from '@/entities';
import { ChangeEvent } from 'react';

export type CardProps = {
  title: string;
  description: string;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSave: (title: string, description: string, list: string) => Card;
  handleDelete: (id: number) => Card[];
};
