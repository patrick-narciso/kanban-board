import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const parseMarkdown = (content: string = '') => DOMPurify.sanitize(marked(content));
