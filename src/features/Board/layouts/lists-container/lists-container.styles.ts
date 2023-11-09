import { List } from '@/components';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 2vw;
  padding-right: 5vw;
  padding-left: 10vw;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstList = styled(List)`
  margin-top: 30px;
`;
