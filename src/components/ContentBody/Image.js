import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { css } from '@emotion/react';

import { container, mediaQueries } from '../../styles';

const Image = ({ data }) => {
  console.log(data);
  return data.relationships.field_image.localFile.childImageSharp ? (
    <Img
      fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
      alt={data.field_image.alt}
      css={css`
        margin: 0 20px 70px;

        ${mediaQueries.phoneLarge} {
          ${container.min};
          padding-left: 0;
          padding-right: 0;
          margin: 0 auto 70px;
        }
      `}
    />
  ) : (
    <div
      css={css`
        width: 680px;
        max-width: 100%;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto 70px;
      `}
    >
      <img
        src={data.relationships.field_image.localFile.publicURL}
        alt={data.field_image.alt}
        css={css`
          margin: 0 20px 70px;

          ${mediaQueries.phoneLarge} {
            ${container.min};
            padding-left: 0;
            padding-right: 0;
            margin: 0 auto 70px;
          }
        `}
      />
    </div>
  );
};

Image.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Image;
