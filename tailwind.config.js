// tailwind.config.js
module.exports = {
     content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    

// // tailwind.config.js
// const { platformSelect } = require('nativewind/dist/theme-functions')
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//        'platform-color': platformSelect({
//           // Now you can provide platform specific values
//           ios: "green",
//           android: "blue",
//           default: "#BABABA",
//         }),
//         dark: {
//           DEFAULT: '#1C1C1E',
//         },
//         'soft-dark': {
//           DEFAULT: '#2A2A2F',
//         },
//       },
//     },
//   },
//   plugins: [],
// }