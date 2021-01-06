import styled from 'styled-components';
import BaseTheme from '../../theme/BaseTheme';
import { getThemeValue } from '../../theme/ThemeUtils';

const { color, fonts } = BaseTheme;

const { black } = color;
const { primaryFont } = fonts;

const Message = styled.div`
  font-family: ${primaryFont}, arial, sans-serif;
  text-align: left;
  color: ${(props) => getThemeValue(props, 'textColor', black)};
`;

export { Message };
