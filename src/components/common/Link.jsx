import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  text-decoration: underline;

  &:visited {
    color: inherit;
  }
`;

const Link = ({ children, href }) => <StyledLink href={href}>{children}</StyledLink>;

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
