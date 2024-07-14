// src/stories/Header.stories.tsx

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/auth/AuthContext";
import Header from "../designSystem/Header";
import type { Meta, StoryFn } from "@storybook/react";
import { BRAND } from "../utils/constants";
import { links } from "../routes/routeConfig";

type HeaderArgs = {
  brand: string;
  links: { key: string; path: string; label: string }[];
};

const meta: Meta<typeof Header> = {
  component: Header,
};
export default meta;

const Template: StoryFn<HeaderArgs> = (args: HeaderArgs) => (
  <Router>
    <AuthProvider>
      <Header {...args} />
    </AuthProvider>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  brand: BRAND,
  links: links,
};
