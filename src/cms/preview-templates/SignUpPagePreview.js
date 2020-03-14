import React from 'react';
import PropTypes from 'prop-types';
import { SignUpPageTemplate } from '../../templates/signup-page';

const SignUpPagePreview = ({ entry, widgetFor }) => (
  <SignUpPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

SignUpPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SignUpPagePreview;
