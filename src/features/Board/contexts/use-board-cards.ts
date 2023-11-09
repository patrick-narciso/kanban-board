import { useContext } from 'react';
import { BoardCardsContext } from './board-cards';

export const useBoardCards = () => useContext(BoardCardsContext);
