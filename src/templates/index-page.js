import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  heading,
  mainpitch,
}) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h1 style={{ marginTop: '-30px', textAlign: 'center' }}>{heading}</h1>
                <div style={{ marginTop: '60px' }}>
                  <div dangerouslySetInnerHTML={{ __html: mainpitch.description }} />
                </div>
                <div style={{ marginTop: '60px' }}>
                  <div className='signup-btn noselect'>{mainpitch.button}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        mainpitch {
          title
          description
          button
        }
      }
    }
  }
`;
