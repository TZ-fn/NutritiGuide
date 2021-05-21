import React from 'react';
import styled from 'styled-components';
import theme from 'theme/mainTheme';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background: linear-gradient(
    66deg,
    ${theme.backgroundLightGreen} 66%,
    ${theme.backgroundLighterGreen}
  );
  border-top: 2px solid ${theme.accentDarkGreen};
  border-radius: 7px 7px 0 0;
`;

const AttributionsWrapper = styled.div`
  display: inherit;
  flex-direction: row;
  align-items: center;
  font-size: ${theme.fontSize.x4s};

  & > div {
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    & {
      transform: scale(0.8);
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <AttributionsWrapper>
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
      <div id='edamam-badge' data-color='transparent' />
    </AttributionsWrapper>
  </Wrapper>
);

export default Footer;
