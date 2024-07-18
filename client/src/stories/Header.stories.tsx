import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../designSystem/Header";
import { links } from "../routes/routeConfig";
import { BRAND } from "../utils/constants";
import { withAuthProvider } from "../../.storybook/decorator";
import { HeaderProps } from "../types/header";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
    withAuthProvider,
  ],
} as Meta;

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {
  brand: BRAND,
  links: links,
  title: "Pack your stuff and join an activity now.",
  backgroundImage:
    "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  onLogout: () => console.log("Logout"),
  isAuthenticated: true,
};
