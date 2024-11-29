const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Includes all source files for Tailwind processing
    './public/index.html',
  ],
  theme: {
    extend: {}, // Custom theme extensions can go here
  },
  plugins: [],
});
