
import { BrowserRouter as Router } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import Header from "../designSystem/Header";
import { links } from "../routes/routeConfig";
import { BRAND } from "../utils/constants";
import { withAuthProvider } from "../../.storybook/decorator";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [withAuthProvider],
};

const Template: StoryFn = () => (
  <Router>
    <Header brand={BRAND} links={links} />
  </Router>
);

export const Default = Template.bind({});
