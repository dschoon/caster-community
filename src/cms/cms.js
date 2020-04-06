import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import SignUpPagePreview from './preview-templates/SignUpPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PaymentPagePreview from './preview-templates/PaymentPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('signup', SignUpPagePreview);
CMS.registerPreviewTemplate('join', PaymentPagePreview);
