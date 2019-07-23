import React from 'react';

const defaultTheme = {
  backgroundColor: 'transparent',
  border: '2px solid white',
  borderRadius: '4px',
  primaryFont: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  primaryFontColor: 'white',
  treeBackgroundColor: '#282c34',
  headingFont: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  headingFontColor: 'white',
  headingFontSize: '24px',
  nodeBackgroundColor: '#282c34',
  nodeBorderColor: 'white',
  nodeOverlayColor: 'white',
  nodeActiveBackgroundColor: `linear-gradient(
      to right,
      #d0e6a5 0%,
      #86e3ce 50%,
      #ccabd8 100%
    )`,
  nodeHoverBorder: '4px solid',
  nodeHoverBorderColor: `linear-gradient(
      to right,
      #d0e6a5 0%,
      #86e3ce 50%,
      #ccabd8 100%
    )`,
  nodeIconWidth: '64px',
  nodeMobileTextNodeHeight: '32px',
  nodeMobileTextNodeWidth: '108px',
  nodeMobileFontSize: '14px',
  nodeDesktopTextNodeHeight: '28px',
  nodeDesktopTextNodeWidth: '144px',
  nodeDesktopFontSize: '16px',
  edgeBorder: '1px solid white',
};

export type SkillThemeType = typeof defaultTheme;

export default defaultTheme;

declare class ThemeProvider extends React.Component<ThemeProviderProps, any> {}

type ThemeProviderProps = {
  theme: SkillThemeType;
};

export type ThemeProviderType = typeof ThemeProvider;
