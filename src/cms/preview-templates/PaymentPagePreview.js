import React from 'react';
import PropTypes from 'prop-types';
import { PaymentPageTemplate } from '../../templates/payment-page';

const PaymentPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <PaymentPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
};

PaymentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PaymentPagePreview;
