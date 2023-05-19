/** @type { import('@storybook/react').Preview } */
import primaryPalette from "./primary.json";
import neutralPalette from "./neutral.json";
import "../src/index.css";
import "swiper/css";
import "keen-slider/keen-slider.min.css";
import "swiper/css/bundle";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    colorPicker: {
      primaryPalette: "primary", // Name of primary palette for all components and its stories. Optional (fallback to first palette from the palettes array).
      palettes: [
        {
          name: "primary", // string
          palette: primaryPalette, // Palette as an Object or an Array. See bellow.
        },
        {
          name: "neutral",
          palette: neutralPalette,
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
