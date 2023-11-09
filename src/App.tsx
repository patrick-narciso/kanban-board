import { BoardCardsProvider } from './features/Board/contexts/board-cards';
import KanbanBoard from './pages/KanbanBoard';

function App() {
  return (
    <BoardCardsProvider>
      <KanbanBoard />
    </BoardCardsProvider>
  );
}

export default App;
