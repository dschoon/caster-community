import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';


export const PaymentPageTemplate = () => (
  <div className="payment-page">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="payment-content">
              <iframe width="480" height="480" src="https://api.pico.tools/pn/castercommunity" frameBorder="0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

PaymentPageTemplate.propTypes = {
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
};

const PaymentPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PaymentPageTemplate />
    </Layout>
  )
};

PaymentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PaymentPage;

export const pageQuery = graphql`
  query PaymentPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "payment-page" } }) {
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
