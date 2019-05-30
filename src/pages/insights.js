import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import ArticlePreview from '../components/ArticlePreview';
import Layout from '../components/layout';
import { colors } from '../styles';

export default () => {
  const List = styled.div`
    display: grid;
    margin: 0 auto;
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 250px;
    place-items: center center;
  `;
  const Categories = styled.nav`
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      margin: 5rem auto;
    }
    li {
      text-decoration: none;
      font-variant: small-caps;
      list-style: none;
      font-family: NBInternationalPro-Bol;
      font-size: 15px;
      color: #757575;
      letter-spacing: 2px;
      text-align: right;
      line-height: 36px;
      padding-right: 15px;
      cursor: pointer;
      &.active {
        color: ${colors.darkgray};
      }
    }
  `;
  return (
    <StaticQuery
      query={graphql`
        {
          allInsight {
            nodes {
              id
              title
              field_inverse_header
              created(formatString: "MMMM DD YYYY")
              relationships {
                node_type {
                  name
                }
                field_tags {
                  id
                }
                uid {
                  name
                }
                field_components {
                  ... on component__text {
                    relationships {
                      component_type {
                        name
                      }
                    }
                    field_body {
                      processed
                    }
                  }
                  ... on component__image {
                    relationships {
                      component_type {
                        name
                      }
                      field_image {
                        localFile {
                          publicURL
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const articles = data.allInsight.nodes;
        // newest article is in the header
        const headerArticle = articles[0];
        // remove the header article so it isnt repeated
        articles.shift();
        return (
          <Layout
            headerData={{
              children: (
                <>
                  <span
                    css={css`
                      font-family: 'NB International Pro';
                      font-size: 15px;
                      padding: 2rem;
                    `}
                  >
                    {`${headerArticle.created} - ${
                      headerArticle.relationships.uid.name
                    }`}
                  </span>
                  <h3
                    css={css`
                      font-size: 72px;
                      font-family: 'Canela-Medium';
                      font-weight: 200;
                      width: 70%;
                      text-align: center;
                    `}
                  >
                    {headerArticle.title}
                  </h3>
                  <Link
                    css={css`
                      text-decoration: none;
                      color: white;
                    `}
                    to={`/insights/${headerArticle.title
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                  >
                    read more
                  </Link>
                </>
              ),
            }}
          >
            <Categories>
              <ul>
                <li className='active'>all</li>
                <li>design</li>
                <li>strategy</li>
                <li>engineering</li>
                <li>shopify</li>
                <li>acquia</li>
                <li>drupal</li>
              </ul>
            </Categories>
            <List>
              {articles.map(article => (
                <ArticlePreview key={article.title} article={article} />
              ))}
            </List>
          </Layout>
        );
      }}
    />
  );
};
