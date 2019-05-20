import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { colors } from '../styles';
import Layout from '../components/layout';
import FullWidthSection from '../components/FullWidthSection';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allResumatorJob {
        nodes {
          title
          description
          department
        }
      }
    }
  `);
  const Filter = styled.nav`
    width: 100%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      margin: 5rem auto;
      margin-top: 1rem;
    }
    li {
      text-decoration: none;
      font-variant: small-caps;
      list-style: none;
      font-family: NBInternationalPro-Bol;
      font-size: 15px;
      color: ${colors.mediumgray};
      letter-spacing: 2px;
      text-align: right;
      line-height: 36px;
      padding-right: 15px;
      /* cursor: pointer; */
      &.active {
        color: ${colors.darkgray};
        text-decoration: underline;
      }
    }
  `;

  const JobList = styled.ul`
    margin: 0 auto;
    li {
      list-style: none;
      font-family: Canela-Bold;
      font-size: 57px;
      color: #282829;
      letter-spacing: 0;
      text-align: center;
      line-height: 72px;
      padding: 2rem;
    }
  `;

  return (
    <Layout
      headerData={{
        title: 'Careers',
        height: '450px',
      }}
    >
      {/* <Filter>
        <ul
          css={css`
            margin: 0 auto !important;
          `}
        >
          <li
            css={css`
              margin: 0 auto;
            `}
          >
            filter jobs
          </li>
        </ul>
        <ul>
          <li>creative</li>
          <li>delivery</li>
          <li>strategy</li>
          <li>engineering</li>
        </ul>
      </Filter> */}
      <FullWidthSection height='100%'>
        <JobList>
          {data.allResumatorJob.nodes.map(job => (
            <li>{job.title}</li>
          ))}
        </JobList>
      </FullWidthSection>
    </Layout>
  );
};

// TODO: Build out individual job page
// TODO: implement filtering
