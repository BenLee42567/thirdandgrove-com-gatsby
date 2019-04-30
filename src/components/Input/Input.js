import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../../styles';

export default styled.input`
  background: transparent;
  outline: 1px solid ${colors.darkgray};
  border: none;
  width: 480px;
  height: 61px;
  color: ${colors.darkgray};
  font-family: 'NB International Pro';
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 36px;
  text-transform: uppercase;
  padding: 20px;
  &:placeholder {
    font-family: 'NB International Pro';
    font-weight: 600;
    color: ${colors.darkgray};
    text-transform: uppercase;
  }
`;
