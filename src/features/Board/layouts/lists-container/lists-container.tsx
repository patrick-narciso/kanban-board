import { FunctionComponent } from 'react';

import { Column, Container } from './lists-container.styles';
import { Card, List, ListItem } from '@/components';
import { useBoardCards } from '../../contexts/use-board-cards';
import { FiPlus as AddIcon } from 'react-icons/fi';
import { Row } from '@/components/Card/Card.styles';

export const ListsContainer: FunctionComponent = () => {
  const {
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
  } = useBoardCards();

  return (
    <Container>
      <Column>
        <List title="To Do">
          <ListItem>
            {cards?.map(({ id, lista, titulo, conteudo }) => {
              if (lista === 'To Do')
                return (
                  <Card
                    key={id}
                    id={id}
                    list={lista}
                    title={title}
                    description={description}
                    originalTitle={titulo}
                    originalContent={conteudo}
                    isEditMode={isEditMode[id]}
                    setEditMode={() => setEditMode((prev) => ({ ...prev, [id]: !prev[id] }))}
                    handleTitle={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitle(event, id)
                    }
                    handleDescription={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleDescription(event, id)
                    }
                    moveRight={(event) => moveCard(event, id, 'Doing')}
                    handleCancel={(event) => handleCancel(event, id)}
                    handleUpdateCard={(event) => handleUpdateCard(event, id, lista)}
                    handleDeleteCard={(event) => handleDeleteCard(event, id)}
                  />
                );
            })}
          </ListItem>
          <Row onClick={(event) => handleCreateCard(event, 'New Card', 'New Content', 'To Do')}>
            <AddIcon /> Add new task
          </Row>
        </List>
      </Column>
      <List title="Doing">
        {cards.length > 0 && (
          <ListItem>
            {cards.map(({ id, lista, titulo, conteudo }) => {
              if (lista === 'Doing')
                return (
                  <Card
                    key={id}
                    id={id}
                    list={lista}
                    title={title}
                    description={description}
                    originalTitle={titulo}
                    originalContent={conteudo}
                    isEditMode={isEditMode[id]}
                    setEditMode={() => setEditMode((prev) => ({ ...prev, [id]: !prev[id] }))}
                    handleTitle={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitle(event, id)
                    }
                    handleDescription={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleDescription(event, id)
                    }
                    handleCancel={(event) => handleCancel(event, id)}
                    handleUpdateCard={(event) => handleUpdateCard(event, id, lista)}
                    moveRight={(event) => moveCard(event, id, 'Done')}
                    moveLeft={(event) => moveCard(event, id, 'To Do')}
                    handleDeleteCard={(event) => handleDeleteCard(event, id)}
                  />
                );
            })}
          </ListItem>
        )}
      </List>
      <List title="Done">
        {cards.length > 0 && (
          <ListItem>
            {cards.map(({ id, lista, titulo, conteudo }) => {
              if (lista === 'Done')
                return (
                  <Card
                    key={id}
                    id={id}
                    title={title}
                    list={lista}
                    description={description}
                    originalTitle={titulo}
                    originalContent={conteudo}
                    isEditMode={isEditMode[id]}
                    setEditMode={() => setEditMode((prev) => ({ ...prev, [id]: !prev[id] }))}
                    handleTitle={(event: React.ChangeEvent<HTMLInputElement>) =>
                      handleTitle(event, id)
                    }
                    handleDescription={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleDescription(event, id)
                    }
                    handleCancel={(event) => handleCancel(event, id)}
                    handleUpdateCard={(event) => handleUpdateCard(event, id, lista)}
                    moveLeft={(event) => moveCard(event, id, 'Doing')}
                    handleDeleteCard={(event) => handleDeleteCard(event, id)}
                  />
                );
            })}
          </ListItem>
        )}
      </List>
    </Container>
  );
};
