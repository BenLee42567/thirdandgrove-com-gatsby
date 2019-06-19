import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { mediaQueries } from '../../styles';

const Wrapper = styled.div`
  ${mediaQueries.phoneLarge} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const SplitSection = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

SplitSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SplitSection;
