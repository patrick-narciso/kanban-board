import { useState } from 'react';
import { Card } from './components';

interface CardContent {
  [x: string]: string;
}

function App() {
  const [value, setValue] = useState<CardContent>({ title: '', description: '' });

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, title: event.target.value }));
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue((prev) => ({ ...prev, description: event.target.value }));
  };

  return (
    <>
      <Card
        title={value.title}
        description={value.description}
        onChangeTitle={handleTitle}
        onChangeDescription={handleDescription}
      />
    </>
  );
}

export default App;
