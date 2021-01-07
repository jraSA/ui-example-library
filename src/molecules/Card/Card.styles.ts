import styled from 'styled-components';
import BaseTheme from '../../theme/BaseTheme';
import { getThemeValue } from '../../theme/ThemeUtils';

const { space, padding, sizes, radii, fonts, color } = BaseTheme;

const { lightboxBackground, black, white } = color;
const { primaryFont, fontSizes } = fonts;

const { card } = sizes;

export const CardFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${card.width};
  height: ${card.height}px;
  padding: ${padding[4]}px;
  border-radius: ${radii[3]}px;
  background-color: ${(props) =>
    getThemeValue(props, 'primaryBackground', white)};
  box-shadow: ${space[1]}px ${space[1]}px ${space[2]}px ${lightboxBackground};
  &:hover {
    box-shadow: ${space[2]}px ${space[2]}px ${space[3]}px ${lightboxBackground};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${primaryFont}, arial, sans-serif;
  font-size: ${(props) => getThemeValue(props, 'titleSize', fontSizes[8])}px;
  text-align: left;
  color: ${(props) => getThemeValue(props, 'titleColor', black)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
