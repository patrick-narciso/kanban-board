import { FunctionComponent, useState } from 'react';
import {
  FiEdit as Edit,
  FiSave as Save,
  FiXCircle as Cancel,
  FiTrash as Delete,
} from 'react-icons/fi';
import { CardProps } from './Card.types';
import { Container, Description, Title, Row, Column } from './Card.styles';

const Card: FunctionComponent<CardProps> = ({
  title,
  description,
  onChangeTitle,
  onChangeDescription,
  handleSave,
  handleDelete,
}) => {
  const [isEditMode, setEditMode] = useState<boolean>(false);

  return (
    <Container>
      <Row>
        <Title
          readOnly={!isEditMode}
          placeholder="Your title here..."
          value={title}
          onChange={onChangeTitle}
        />
        {!isEditMode && <Edit onClick={() => setEditMode(true)} />}
      </Row>
      <Description
        readOnly={!isEditMode}
        placeholder="Your description here..."
        value={description}
        onChange={onChangeDescription}
      />
      <Row>
        {isEditMode ? (
          <>
            <Cancel onClick={() => setEditMode(false)} />
            <Save onClick={handleSave} />
          </>
        ) : (
          <Column>
            <Delete onClick={handleDelete} />
          </Column>
        )}
      </Row>
    </Container>
  );
};

export default Card;
