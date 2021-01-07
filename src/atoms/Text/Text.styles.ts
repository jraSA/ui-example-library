import styled from 'styled-components';
import BaseTheme from '../../theme/BaseTheme';
import { getThemeValue } from '../../theme/ThemeUtils';

const { color, fonts } = BaseTheme;

const { black } = color;
const { primaryFont, fontSizes } = fonts;

const TextContainer = styled.div`
  font-family: ${primaryFont}, arial, sans-serif;
  font-size: ${(props) => getThemeValue(props, 'textSize', fontSizes[6])}px;
  text-align: left;
  color: ${(props) => getThemeValue(props, 'textColor', black)};
`;

export { TextContainer };
