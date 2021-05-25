import theme from 'theme/mainTheme';

const setHslaColor = (type, alphaType) => `hsla(
    ${theme.messageBoxColors[type]},
    ${theme.messageBoxColors.alpha[alphaType]}
  )`;

export default setHslaColor;
