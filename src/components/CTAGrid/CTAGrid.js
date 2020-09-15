import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { container, mediaQueries } from '../../styles';
import FullWidthSection from '../FullWidthSection';
import { FakeButton } from '../Button';

import CTAGridItem from './CTAGridItem';

const CTAGrid = ({
  items,
  images,
  header,
  backgroundColor,
  link,
  altStyle,
}) => {
  const ctaGridContainer = css`
    display: grid;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 7%;
    grid-row-gap: 70px;
    width: 100%;
    padding-bottom: 36px;

    ${mediaQueries.phoneLarge} {
      ${container.textOnly}
      display: grid;
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 70px;
      grid-row-gap: 70px;
      padding-bottom: 72px;
    }
  `;

  const ctaGridContainerAlt = css`
    display: block;

    ${mediaQueries.phoneLarge} {
      ${container.textOnly}
      display: grid;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 100px;
    }
  `;

  const sectionPadding = css`
    padding: 100px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 125px 0;
    }
  `;

  const sectionStyles = css`
    ${sectionPadding}

    clear: both;

    h3 {
      font-size: 27px;
      text-align: center;
      padding-bottom: 24px;

      ${mediaQueries.phoneLarge} {
        width: 820px;
        max-width: 100%;
        margin: 0 auto;
        font-size: 39px;
        padding-bottom: 48px;
      }
    }
  `;
  const getImageSrc = name => images.filter(({ node }) => name === node.name);
  return (
    <FullWidthSection css={sectionStyles} backgroundColor={backgroundColor}>
      {header !== '' && <h3>{header}</h3>}
      <div css={!altStyle ? ctaGridContainer : ctaGridContainerAlt}>
        {items.map(({ node }) => (
          <CTAGridItem
            key={node.title}
            icon={getImageSrc(node.icon)}
            title={node.title}
            description={node.description}
            altStyle={altStyle}
          />
        ))}
      </div>
      {!altStyle && (
        <Link to={link}>
          <FakeButton>Get Support Now</FakeButton>
        </Link>
      )}
    </FullWidthSection>
  );
};

CTAGrid.propTypes = {
  items: PropTypes.array,
  images: PropTypes.array,
  altStyle: PropTypes.bool,
  header: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string,
};

CTAGrid.defaultProps = {
  items: [],
  images: [],
  altStyle: false,
  header: '',
  backgroundColor: '#FFF',
  link: '/',
};

export default CTAGrid;
