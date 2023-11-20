import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      style: '#663399',
      white: '#ffffff',
      primary: {
        DEFAULT: '#663399',
        hover: '#ca9cda',
        pressed: '#6401b1',
        disabled: '#9582a0',
      },
      secondary: {
        DEFAULT: '#ff9c71',
        hover: '#ffb79a',
        pressed: '#e86527',
        disabled: '#3f444d',
      },
      alert: {
        error: '#be2b13',
        warning: '#fc9403',
        success: '#1aaa55',
        inform: '#1f78d1',
      },
      background: {
        global: '#fdf7ff',
        light: '#e9f1ff',
        dark: '#011639',
        card: {
          light: '#fcfcff',
          dark: '#ffffff',
          tertiary: '#fbece9',
        },
        error: '#ffddd8',
        warning: '#ffe5c1',
        success: '#deffec',
        inform: '#e4f2ff',
      },
      text: {
        primary: {
          light: '#5F6675',
          dark: '#ffffff',
        },
        secondary: {
          light: '#5a5a5a',
          dark: '#f1f0f0',
        },
        disabled: '#cccccc',
        button: {
          primary: '#ffffff',
          secondary: '#333645',
        },
        success: '#15793e',
        warning: '#cb7600',
        error: '#f6391b',
      },
    },
  },
  plugins: [],
};
export default config;
