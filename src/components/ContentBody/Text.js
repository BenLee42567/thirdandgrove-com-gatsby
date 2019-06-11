import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import useWindow from '../../hooks/useWindow';
import { colors, jsBreakpoints, fonts } from '../../styles';
import FullWidthSection from '../FullWidthSection';

const Text = ({ data }) => {
  const { width } = useWindow();

  const textCss = css`
    p {
      font-family: ${fonts.sans};
      font-size: 21px;
      color: ${colors.darkgray};
      letter-spacing: 0;
      line-height: 36px;
    }
  `;
  return (
    <FullWidthSection
      height='100%'
      padding={width > jsBreakpoints.phoneLarge ? '3rem 16rem' : '3rem'}
    >
      <section
        css={textCss}
        dangerouslySetInnerHTML={{ __html: data.field_body.processed }}
      />
    </FullWidthSection>
  );
};

Text.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Text;
