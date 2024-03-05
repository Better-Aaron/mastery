import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['NotoSans', 'sans-serif'],
        'notosans-kr': ['NotoSanskr', 'sans-serif'],
      },
      colors: {
        cardinal: '#A41850',
        davidson_orange: '#C13515',
        tawny: '#D93900',
        amaranth: '#E51E53',
        oragne: '#FC642D',
        main_pink: '#FF385C',
        bittersweet: '#FF5A5F',
        black: '#222222',
        charcoal: '#484848',
        snow: '#FFF8F6',
        gray_48: '#484848',
        gray_71: '#717171',
        gray_76: '#767676',
        gray_80: '#808080',
        gray_85: '#858585',
        gray_aa: '#aaa',
        gray_bb: '#bbb',
        gray_b0: '#b0b0b0',
        gray_c4: '#c4c4c4',
        gray_dd: '#ddd',
        gray_eb: '#ebebeb',
        gray_e5: '#e5e5e5',
        gray_f7: '#f7f7f7',
        dark_cyan: '#008489',
        green: '#008A05',
      },
    },
  },
  plugins: [],
};
export default config;
