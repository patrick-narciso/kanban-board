import { Card } from '@/entities';

export type GetCardsApi = () => Promise<{ cards: Card[] }>;
