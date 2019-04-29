import PropTypes from 'prop-types';
import React from 'react';
import { css } from '@emotion/core';

import TopNav from '../TopNav';
import { colors } from '../../styles';

const Header = ({ defaultBackground, title, fade, height, children }) => {
  const headerTitle = css`
    @keyframes fadeInOut {
      0%,
      3% {
        opacity: 0;
      }
      10%,
      90% {
        opacity: 1;
      }
      98%,
      100% {
        opacity: 0;
      }
    }
    animation: ${fade ? `fadeInOut ${fade}ms ease infinite` : `none`};
    font-size: 72px;
    font-weight: 300;
    width: 60%;
    text-align: center;
    color: ${defaultBackground ? '#282829' : '#efefef'};
  `;
  return (
    <>
      <TopNav />
      <header
        css={css`
          width: 100%;
          height: ${height || '700px'};
          display: flex;
          font-family: 'Canela-Medium';
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: ${defaultBackground
            ? colors.yellow
            : colors.lightblue};
        `}
      >
        <h1 css={headerTitle}>{title}</h1>
        {children && children}
      </header>
    </>
  );
};

Header.propTypes = {
  defaultBackground: PropTypes.bool,
  title: PropTypes.string,
  fade: PropTypes.number,
  height: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  defaultBackground: true,
};

export default Header;
