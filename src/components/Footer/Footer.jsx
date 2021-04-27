import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/mainTheme';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.background};
  border-top: 2px solid ${theme.accentDarkGreen};
`;

const Footer = () => (
  <Wrapper>
    <div>
      Icons made by{' '}
      <a href='https://www.freepik.com' title='Freepik'>
        Freepik
      </a>{' '}
      from{' '}
      <a href='https://www.flaticon.com/' title='Flaticon'>
        www.flaticon.com
      </a>
    </div>
    <div id='edamam-badge' data-color='light' />
  </Wrapper>
);

export default Footer;
