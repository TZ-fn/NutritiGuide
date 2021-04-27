import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ HeadingLevel, children }) => <HeadingLevel>{children}</HeadingLevel>;

Heading.propTypes = {
  HeadingLevel: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Heading;
