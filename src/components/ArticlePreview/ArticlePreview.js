import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { colors } from '../../styles';

const ArticlePreview = ({ article }) => {
  const Card = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    div {
      height: 400px;
      width: 400px;
      background-color: ${colors.gray};
    }
    span {
      display: flex;
      flex-direction: column;
      width: 85%;
      p {
        font-family: Canela-Bold;
        font-size: 33px;
        color: ${colors.darkgray};
        letter-spacing: 0;
        line-height: 52px;
        padding: 0;
      }
      footer {
        font-family: 'NB International Pro';
        font-size: 15px;
      }
    }
    &:hover {
      div {
        transition: all 0.2s ease;
        background-color: ${colors.white};
      }
    }
  `;
  return (
    <Card>
      <div />
      <span>
        <Link
          css={css`
            text-decoration: none;
            color: ${colors.black};
          `}
          to={`/articles${article.path.alias}`}
        >
          <p
            css={css`
              padding: 0.3rem;
            `}
          >
            {article.title}
          </p>
          <footer>
            {`${article.created} -
        ${article.relationships.uid.field_first_name} ${
              article.relationships.uid.field_last_name
            }`}
          </footer>
        </Link>
      </span>
    </Card>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticlePreview;
