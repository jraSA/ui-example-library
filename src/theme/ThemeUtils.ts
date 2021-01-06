export const getThemeValue = (props: any, value: string, defaultValue: any) => {
  const { theme } = props;

  if (theme) {
    return theme[value] ? theme[value] : defaultValue;
  }

  return defaultValue;
};
