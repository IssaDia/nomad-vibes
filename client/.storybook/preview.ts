import type { Preview } from "@storybook/react";
import { withAuthProvider } from "./decorator";
import "../src/index.css";

export const decorators = [withAuthProvider];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
