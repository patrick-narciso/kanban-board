import { FunctionComponent } from 'react';
import {
  FiEdit as Edit,
  FiSave as Save,
  FiXCircle as Cancel,
  FiTrash as Delete,
  FiArrowLeft as ArrowLeft,
  FiArrowRight as ArrowRight,
} from 'react-icons/fi';
import { CardProps } from './Card.types';
import { Container, Description, Title, Row, MarkdownContent } from './Card.styles';
import { parseMarkdown } from '@/utils/parseMarkdown';

const Card: FunctionComponent<CardProps> = ({
  id,
  title,
  description,
  isEditMode,
  originalTitle,
  originalContent,
  list,
  moveLeft,
  moveRight,
  setEditMode,
  handleTitle,
  handleDescription,
  handleUpdateCard,
  handleDeleteCard,
  handleCancel,
}) => {
  return (
    <Container>
      <Row>
        <Title
          readOnly={!isEditMode}
          placeholder="Your title here..."
          value={isEditMode ? title[id] : originalTitle}
          onChange={handleTitle}
        />
        {!isEditMode && <Edit onClick={() => setEditMode((prev) => ({ ...prev, [id]: true }))} />}
      </Row>
      {isEditMode && (
        <Description
          placeholder="Your description here..."
          value={isEditMode ? description[id] : originalContent}
          onChange={handleDescription}
        />
      )}
      {!isEditMode && (
        <MarkdownContent dangerouslySetInnerHTML={{ __html: parseMarkdown(description[id]) }} />
      )}
      <Row>
        {isEditMode ? (
          <>
            <Cancel onClick={handleCancel} />
            <Save onClick={handleUpdateCard} />
          </>
        ) : (
          <>
            {list !== 'To Do' && <ArrowLeft onClick={moveLeft} />}
            <Delete onClick={handleDeleteCard} />
            {list !== 'Done' && <ArrowRight onClick={moveRight} />}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Card;
