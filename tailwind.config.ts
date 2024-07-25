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
      },
      lineHeight: {
        '12': '30px',
      },
      fontSize: {
        '20': '20px',
        '16': '16px',
      },
      screens: {
        'custom': '864px',
      },
    },
  },
  plugins: [],
};

export default config;
