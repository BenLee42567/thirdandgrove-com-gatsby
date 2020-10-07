import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import useWindow from '../../hooks/useWindow';
import Menu from '../Menu';
import { colors, mediaQueries, jsBreakpoints, container } from '../../styles';
import AcquiaEngage from '../../../static/images/acquia-engage-logo.svg';

import TagLogo from './svg/TagLogo';
import ThirdAndGrove from './svg/ThirdAndGrove';
import Hamburger from './svg/hamburger';

const TopNav = ({ fill, hideNav, banner }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  const { width } = useWindow();
  return (
    <>
      {hideNav && !banner && (
        <div
          css={[
            container.max,
            css`
              position: ${isOpen ? 'fixed' : 'absolute'};
              top: 0;
              padding-top: 20px;
              padding-bottom: 10px;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 4;

              ${mediaQueries.phoneLarge} {
                padding-top: 30px;
              }
            `,
          ]}
        >
          <ThirdAndGrove
            css={css`
              height: 22px;
              fill: ${isOpen ? colors.lightgray : fill};
            `}
          />
        </div>
      )}

      {!hideNav && !banner && (
        <>
          {' '}
          <div
            css={[
              container.max,
              css`
                position: ${isOpen ? 'fixed' : 'absolute'};
                top: 0;
                padding-top: 20px;
                padding-bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 4;

                ${mediaQueries.phoneLarge} {
                  padding-top: 30px;
                }
              `,
            ]}
          >
            <Link to='/' aria-label='return to homepage' data-cy='homeButton'>
              {/* This guard keeps the Gatsby build from breaking by ensuring this code isn't run at build time. */}
              {typeof window !== 'undefined' &&
                (width > jsBreakpoints.phoneLarge ? (
                  <ThirdAndGrove
                    css={css`
                      height: 22px;
                      fill: ${isOpen ? colors.lightgray : fill};
                    `}
                  />
                ) : (
                  <TagLogo
                    css={css`
                      fill: ${isOpen ? colors.lightgray : fill};
                      height: 50px;
                      margin-left: -10px;
                    `}
                  />
                ))}
            </Link>

            <button
              css={css`
                background-color: transparent;
                padding: 0;
                margin: 0;
                border: none;
                min-height: 25px;
                cursor: pointer;
                :focus {
                  outline: none;
                }
              `}
              type='button'
              onClick={() => toggleOpen()}
              data-cy='menuButton'
              aria-label='open site menu'
            >
              <Hamburger
                fill={isOpen ? colors.lightgray : fill}
                isOpen={isOpen}
              />
            </button>
          </div>
          <Menu toggleOpen={toggleOpen} menuOpen={isOpen} />{' '}
        </>
      )}

      {hideNav && banner && (
        <div
          css={[
            container.max,
            css`
              position: absolute;
              top: 0;
              padding-top: 20px;
              padding-bottom: 20px;
              display: flex;

              z-index: 4;
              width: 100%;
              background-color: ${colors.tagGray};
              color: ${colors.white};

              p {
                margin-bottom: 0;
                justify-content: center;
                align-items: center;
              }

              img {
                margin: 0;
                max-width: 200px;
              }

              .top-bar--container {
                display: flex;
                width: 100%;
              }

              .left {
                display: none;
                ${mediaQueries.min} {
                  flex: 1;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                }
              }

              .center {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 1;
                text-align: center;
              }

              .right {
                display: none;

                ${mediaQueries.min} {
                  flex: 1;
                  display: flex;
                  justify-content: flex-end;
                  align-items: center;
                }
              }
            `,
          ]}
        >
          <div className='top-bar--container'>
            <div className='left'>
              <img src={AcquiaEngage} alt='Acquia Engage 2020' />
            </div>
            <div className='center'>
              <p>Join Live Event Now!</p>
            </div>
            <div className='right' />
          </div>
        </div>
      )}
    </>
  );
};

TopNav.propTypes = {
  fill: PropTypes.string,
  hideNav: PropTypes.bool,
  banner: PropTypes.bool,
};

TopNav.defaultProps = {
  fill: colors.lightgray,
  hideNav: false,
  banner: false,
};

export default TopNav;
