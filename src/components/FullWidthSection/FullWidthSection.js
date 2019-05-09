import styled from '@emotion/styled';

export default styled.section`
  width: 100%;
  height: ${props => props.height || '700px'};
  display: flex;
  font-family: 'Canela-Medium';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  overflow: hidden;
`;
