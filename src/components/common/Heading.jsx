import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ HeadingLevel, children }) => <HeadingLevel>{children}</HeadingLevel>;

Heading.propTypes = {
  HeadingLevel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  HeadingLevel: 'p',
};

export default Heading;
