import { getThemeValue } from './ThemeUtils';

describe('theme tests', () => {
  const mockPropsWithoutTheme = {};
  const mockPropsWithTheme = {
    theme: {
      fooColor: 'white',
      nestedField: {
        fooBooColor: 'green',
      },
    },
  };
  test.each`
    props                    | field         | defaultValue | result
    ${mockPropsWithoutTheme} | ${'fooColor'} | ${'black'}   | ${'black'}
    ${mockPropsWithTheme}    | ${'booColor'} | ${'black'}   | ${'black'}
    ${mockPropsWithTheme}    | ${'fooColor'} | ${'black'}   | ${'white'}
  `('double($props)', ({ props, field, defaultValue, result }) => {
    expect(getThemeValue(props, field, defaultValue)).toBe(result);
  });
});
