/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: ['node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  addons: [
    // your addons here
    'storybook-addon-theme-changer',

    'themeprovider-storybook/register',
  ],

  // theme: {
  //   // Override the default Tailwind theme config here.
  //   extend: {
  //     colors: {
  //       accent: 'var(--color-accent)',
  //       outline: {
  //         accent: ['2px dotted var(--color-accent)', '2px'],
  //       },
  //     },
  //     backgroundColor: {
  //       accent: 'var(--color-bg-accent)',
  //       primary: 'var(--color-bg-primary)',
  //       secondary: 'var(--color-bg-secondary)',
  //     },
  //     textColor: {
  //       accent: 'var(--color-text-accent)',
  //       primary: 'var(--color-text-primary)',
  //       secondary: 'var(--color-text-secondary)',
  //     },
  //   },
  // },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    // darkTheme: 'dark',
    // themes: [
    //   {
    //     mytheme: {
    //       primary: 'yellow',

    //       secondary: 'pink',

    //       accent: 'red',
    //       themes: [
    //         {
    //           light: {
    //             primary: 'black',

    //             secondary: 'pink',

    //             accent: 'red',

    //             neutral: 'blue',

    //             'base-100': '#FFFFFF',

    //             info: '#3ABFF8',

    //             success: '#36D399',

    //             warning: '#FBBD23',

    //             error: '#F87272',
    //           },
    //           // light: {
    //           //   ...require('./.storybook/theming/consts')['[data-theme=light]'],
    //           //   primary: 'green',
    //           //   'primary-focus': 'mediumblue',
    //           // },
    //         },
    //       ],
    //       neutral: 'green',

    //       // 'base-100': 'red',
    //       // 'base-200': 'green',

    //       info: 'red',

    //       success: '#36D399',

    //       warning: 'green',

    //       error: '#F87272',
    //     },
    //   },
    // ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'), require('tailwindcss-debug-screens')],
};
