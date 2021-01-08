import styled from 'styled-components';
import BaseTheme from '../../theme/BaseTheme';
import { getThemeValue } from '../../theme/ThemeUtils';

const { margin } = BaseTheme;

const { color, fonts, padding, radii, space } = BaseTheme;

const { black, white, lightboxBackground, grays } = color;
const { primaryFont, fontSizes } = fonts;

const Button = styled.button`
    width: 20%;
    margin-top: ${margin[5]}px;
    margin-bottom: ${margin[5]}px;
    padding: ${padding[4]}px;
    border-radius: ${radii[3]}px;

    align-self: center;

    background-color: ${(props) => getThemeValue(props, 'primaryBackground', white)};
    box-shadow: ${space[1]}px ${space[1]}px ${space[2]}px ${lightboxBackground};
    &:hover {
        box-shadow: ${space[2]}px ${space[2]}px ${space[3]}px ${lightboxBackground};
        background-color: ${(props) => getThemeValue(props, 'secondaryBackground', grays[300])};
    };
    outline: none;
    border: none;

    font-family: ${primaryFont}, arial, sans-serif;
    font-size: ${(props) => getThemeValue(props, 'titleSize', fontSizes[8])}px;    
    color: ${(props) => getThemeValue(props, 'titleColor', black)};
`;

export default Button;