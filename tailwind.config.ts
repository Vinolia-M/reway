import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Reway-blue': "#00A2FF",
        'Reway-darkgrey': "#828282",
        'ReqayWhite': "rgb(125 125 125)",
      },
      backgroundColor: {
        'bgRewayBlue': '#00A2FF',
        'bgRewayBlack': '#4A4A4A',
        'bgRewayGrey': '#EAEAEA',
        'overlayBg': 'rgba(0, 0, 0, 0.5)',
      },
      lineHeight: {
        '12': '30px',
        '26': '26px',
      },
      fontSize: {
        '30': '30px',
        '20': '20px',
        '16': '16px',
        '17': '17px',
        '14': '14px',
        '12': '12px',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
