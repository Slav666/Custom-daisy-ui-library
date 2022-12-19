/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: ['node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  addons: [
    // your addons here
    'storybook-addon-theme-changer',
  ],

  theme: {
    // Override the default Tailwind theme config here.
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        outline: {
          accent: ['2px dotted var(--color-accent)', '2px'],
        },
      },
      backgroundColor: {
        accent: 'var(--color-bg-accent)',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
    },
  },
  daisyui: {
    // styled: true,
    // themes: true,
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: '',
    // darkTheme: 'dark',
    // themes: [
    //   {
    //     light: {
    //       ...require('daisyui/src/colors/themes')['[data-theme=light]'],
    //       primary: 'blue',
    //       'primary-focus': 'mediumblue',
    //     },
    //   },
    // ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'), require('tailwindcss-debug-screens')],
};
