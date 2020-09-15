import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import Quote from '../components/ContentBody/Quote';
import LogoGrid from '../components/LogoGrid';
import ProjectsSlider from '../components/ProjectsSlider';
import FullWidthSection from '../components/FullWidthSection';
import Layout from '../components/layout';
import { container, mediaQueries, weights, fonts, colors } from '../styles';
import ContactForm from '../components/ContactForm';
import CTA from '../components/CTA';
import CTAGrid from '../components/CTAGrid';
import drupalLogo from '../images/drupal-support/drupal-logo.png';
import preserver from '../images/drupal-support/preserver.png';

const DrupalSupport = ({ data }) => {
  console.log(data);
  const height = `100px`;
  const sectionPadding = css`
    padding: 50px 20px;

    ${mediaQueries.phoneLarge} {
      padding: 50px 0;
    }
  `;

  const sectionStyles = css`
    ${sectionPadding}
    h3 {
      font-family: ${fonts.sans};
      font-size: 32px;
      font-weight: ${weights.bold};
      line-height: 1.39;
      margin-bottom: 24px;
    }
    p {
      font-weight: ${weights.light};
    }
    div {
      ${mediaQueries.phoneLarge} {
        display: flex;
        justify-content: space-between;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-family: ${fonts.sans};
      font-weight: ${weights.light};
      list-style: none;

      ${mediaQueries.phoneLarge} {
        &:last-of-type {
          margin-right: 100px;
        }
      }

      li {
        margin-bottom: 4px;
        padding-left: 0;

        &:before {
          content: '—';
          padding-right: 2px;
        }
      }
    }

    ${mediaQueries.phoneLarge} {
      ${container.min}
    }
  `;

  const sectionStylesWithImage = css`
    ${sectionPadding}
    h3 {
      font-family: ${fonts.sans};
      font-size: 32px;
      font-weight: ${weights.bold};
      line-height: 1.39;
      margin-bottom: 24px;
    }
    p {
      font-weight: ${weights.light};
    }
    ul {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-family: ${fonts.sans};
      font-weight: ${weights.light};
      list-style: none;

      ${mediaQueries.phoneLarge} {
        &:last-of-type {
          margin-right: 100px;
        }
      }

      li {
        margin-bottom: 4px;
        padding-left: 0;

        &:before {
          content: '—';
          padding-right: 2px;
        }
      }
    }

    position: relative;

    &:after {
      content: '';
      background-image: url(${preserver});
      position: absolute;
      bottom: 0;
      right: 0;
      width: calc(425px / 2);
      height: calc(500px / 2);
      background-size: contain;
      background-repeat: no-repeat;

      ${mediaQueries.phoneLarge} {
        content: '';
        background-image: url(${preserver});
        position: absolute;
        top: 15%;
        right: 0;
        width: 425px;
        height: 500px;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    .basic-block--container {
      display: flex;
      flex-direction: column-reverse;
      ${mediaQueries.phoneLarge} {
        display: block;
      }
    }

    .basic-block--right {
      height: 150px;
      ${mediaQueries.phoneLarge} {
        float: right;
        shape-outside: circle(44% at 47% 68%);
        width: 500px;
        height: 580px;
        margin-top: 0px;
        shape-margin: 2%;
        margin-bottom: 0px;
      }
    }

    .basic-block--left {
      ${container.min}
    }

    ${mediaQueries.phoneLarge} {
    }
  `;

  return (
    <Layout
      headerData={{
        metaTitle: `24/7 Drupal Support, Maintenance, & Optimization`,
        title: <>24/7 Drupal Support, Maintenance, & Optimization</>,
        mobileMinHeight: '93vh',
        hideNav: true,
        color: colors.drupalBlue,
        invert: true,
      }}
    >
      <CTA
        backgroundColor={colors.lightgray}
        headline='Catering to complex and integrated Drupal environments.'
        subTitle='Managed Services offering leading 24x7 support, maintenance, and optimization to mid-market organizations'
        cta='GET SUPPORT NOW'
        icon={drupalLogo}
        iconAlt='Drupal'
        altStyle
      />
      <ProjectsSlider
        data={data.allCaseStudy}
        backgroundColor={colors.white}
        minHeight='750'
      />{' '}
      <Quote
        size='large'
        padding='100px 0 100px 0'
        backgroundColor={colors.yellow}
        quoteColor={colors.white}
        data={{
          field_quote:
            'I wanted to let you know how much I have enjoyed working with the amazing team at Third and Grove. You guys go above and beyond!',
          field_footer_text:
            'Brittany Juliano, Digital Content Specialist, Draper Labs',
        }}
      />
      <section css={sectionStylesWithImage}>
        <div className='basic-block--container'>
          <div className='basic-block--right' />
          <div className='basic-block--left'>
            <h2>
              We offer a full suite of support options for Drupal 7, 8, and 9,
              handling all of your complex front end, back end, integration, and
              compliance needs.{' '}
            </h2>

            <p>
              Support services include proactive Drupal patching, migrations and
              upgrades to Drupal 8 and 9, content migrations, new features, bug
              fixes, resource augmentation, training, optimization, digital
              strategy, UX/UI improvements, and Google Analytics
              industrialization.{' '}
            </p>

            <p>
              Our support packages are fully customizable for each organization,
              and can be changed or cancelled for any reason (or no reason) with
              30thirty days’ notice. We aren’t a cell phone company;, if you
              don’t like us, you shouldn’t have we don’t want you to have to
              work with us.{' '}
            </p>

            <p>
              We are experts on the Acquia and Platform, Pantheon platforms, as
              well asnd custom hosting platforms in use by our clients.{' '}
            </p>
          </div>
        </div>
      </section>
      <CTAGrid
        items={data.allDrupalSupportCtaGridOneJson.edges}
        images={data.allFile.edges}
        altStyle={false}
      />
      <LogoGrid logoset='drupalSupport' title='A few of our friends' />
      <CTAGrid
        header='Why brands work with Third and Grove for Drupal support, maintenance, and optimization:'
        items={data.allDrupalSupportCtaGridTwoJson.edges}
        images={data.allFile.edges}
        backgroundColor={colors.lightblue}
        altStyle
      />
      <FullWidthSection
        backgroundColor={colors.yellow}
        padding='75px 0 100px 0'
        minHeight='100%'
      >
        <h3>Contact Us</h3>
        <ContactForm />
      </FullWidthSection>
    </Layout>
  );
};

DrupalSupport.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DrupalSupport;

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/drupal-support/" } }) {
      edges {
        node {
          name
          publicURL
          absolutePath
        }
      }
    }
    allDrupalSupportCtaGridOneJson {
      edges {
        node {
          icon
          title
          description
        }
      }
    }
    allDrupalSupportCtaGridTwoJson {
      edges {
        node {
          icon
          title
          description
        }
      }
    }
    allCaseStudy(
      sort: { fields: created, order: DESC }
      limit: 1
      filter: { field_hidden: { eq: false }, title: { eq: "VMware" } }
    ) {
      nodes {
        ...CaseStudyFragment
      }
    }
  }
  fragment CaseStudyFragment on case_study {
    id
    title
    field_subtitle
    field_inverse_header
    field_image_arrangement
    field_image {
      alt
    }
    field_secondary_image {
      alt
    }
    field_tertiary_image {
      alt
    }
    path {
      alias
    }
    relationships {
      field_tags {
        name
      }
      field_image {
        id
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 850, cropFocus: NORTH) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 335, height: 260, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 450, height: 320, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 380, height: 420, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 420, height: 340, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
      field_secondary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 850) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 1, height: 1) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 250, height: 180, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 340, height: 260, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 270, height: 210, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
      field_tertiary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 850) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 1, height: 1) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 250, height: 495, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 230, height: 210, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 320, height: 210, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
