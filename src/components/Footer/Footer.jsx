import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    <div id='edamam-badge' data-color='badge' />
  </Wrapper>
);

export default Footer;
