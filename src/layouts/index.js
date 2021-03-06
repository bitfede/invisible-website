import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="INVISIBLE GLASS"
      meta={[
        { name: 'description', content: 'Invisible Glass' },
        { name: 'keywords', content: 'Opaque Glass, Office Glass' },
      ]}
    />

    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
