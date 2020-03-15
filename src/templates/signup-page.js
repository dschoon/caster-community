import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

export const SignUpPageTemplate = ({ title, description, button, price, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return (
        <div className='signup-page'>
            <div className='left-section'>
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}
                </h2>
                <div className='description'>{description}</div>
                <div className='price'>{price}</div>
                <div className='button-container'>
                    <a href='http://eepurl.com/gPvg4D'>
                        <button className='signup-btn noselect' onClick={e => {
                            e.preventDefault();
                            trackCustomEvent({
                                category: "Button",
                                action: "Click",
                                label: "Join the waitlist - Signup Page"
                            });
                        }}>{button}</button>
                    </a>
                </div>
            </div>
            <div className='right-section'>
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <PageContent className="content" content={content} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

SignUpPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    button: PropTypes.string,
    price: PropTypes.string,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const SignupPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <SignUpPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                button={post.frontmatter.button}
                price={post.frontmatter.price}
                content={post.html}
            />
        </Layout>
    )
};

SignupPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SignupPage;

export const signUpPageQuery = graphql`
  query SignUpPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        button
        price
      }
    }
  }
`;
