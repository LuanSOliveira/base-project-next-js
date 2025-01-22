import { bgDefault, txDefault } from './src/shared/constants';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Background
        'bgpacc-dark-blue': bgDefault.bgDefaultDarkBlue,
        'bgpacc-green-blue': bgDefault.bgDefaultGreenBlue,
        'bgpacc-blue': bgDefault.bgDefaultBlue,
        'bgpacc-success': bgDefault.bgDefaultSuccess,
        'bgpacc-error': bgDefault.bgDefaultError,
        'bgpacc-alert': bgDefault.bgDefaultAlert,
        'bgpacc-info': bgDefault.bgDefaultInfo,

        //Text
        'txpacc-black': txDefault.txDefaultBlack,
        'txpacc-white': txDefault.txDefaultWhite,
        'txpacc-success': txDefault.txDefaultSuccess,
        'txpacc-error': txDefault.txDefaultError,
        'txpacc-alert': txDefault.txDefaultAlert,
        'txpacc-info': txDefault.txDefaultInfo,
      },
    },
  },
  plugins: [],
};
export default config;
