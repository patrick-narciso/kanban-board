import styled from 'styled-components';

const textInputCSSReset = `
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: none;
  &:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #666666;
  background-color: #ffffff;
  min-width: 266px;
  min-height: 179px;
  padding: 8px;
`;

export const Description = styled.textarea`
  color: #221c1d;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 95px;
  resize: none;
  ${textInputCSSReset}
`;

export const Title = styled.input`
  color: #000000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ${textInputCSSReset}
`;
