import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Layout from '../components/Layout';
import { InjectedCheckoutForm } from '../components/StripePayment';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_zGuxi8G0lnNaj6b4Idx23FVB009bvpYm6o');

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};

export const PaymentPageTemplate = ({
  heading,
  mainpitch,
}) => (
  <div className="home-page">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="payment-content">
                <iframe width="480" height="480" src="https://api.pico.tools/pn/castercommunity/7ya952k4" frameBorder="0"/>
              </div>
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
      <PaymentPageTemplate
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
      />
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
