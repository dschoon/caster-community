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
            <div className="payment-content" style={{ width: '600px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>Congratulations! You've been invited to the April cohort of the Caster Community.</div>
              <div>As we continue to work on building up our community of podcasters, we've temporarily lowered the price to $25/year. This fee is 100% refundable at anytime.</div>
              <a href='https://api.pico.tools/pn/castercommunity'>
                <button>
                  Join Now
                </button>
              </a>
              <div className='disclaimer'>Payment handled by <a href='https://trypico.com/' target='_blank'>Pico</a></div>
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
