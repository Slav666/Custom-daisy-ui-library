import React from 'react';
import '../src/index.css';
import { Theme } from 'react-daisyui';
import { withThemesProvider } from 'themeprovider-storybook';
// import StoryLayout from './story-layout';
import { DEFAULT_THEME, STORAGE_KEY, THEME_PICKER_LIST } from './theming';
import { useGlobalTheme } from './theming';
import { ThemeProvider } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  previewTabs: {
    'storybook/docs/panel': { hidden: true },
  },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Welcome', 'Utils', 'Actions', 'Data Display', 'Data Input', 'Layout', 'Navigation', 'Mockup'],
    },
  },
  themes: {
    default: window.localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME,
    onChange: (theme: any) => {
      // STORAGE_KEY does not work in onChange... not sure why
      if (theme) {
        window.localStorage.setItem('sb-react-daisyui-preview-theme', theme.class);
      } else {
        window.localStorage.removeItem('sb-react-daisyui-preview-theme');
      }
    },
    list: THEME_PICKER_LIST,
  },
  // docs: {
  //   theme: docsTheme,
  //   options: {
  //     layout: 'fullscreen',
  //   },
  // },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: THEME_PICKER_LIST.map(element => element.name),
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
export const decorators = [
  (Story: any, context: any) => (
    <Theme dataTheme={useGlobalTheme()}>
      {/* <CssBaseline /> */}
      <Story {...context} />
    </Theme>
  ),
];
console.log('decorators:', decorators);
