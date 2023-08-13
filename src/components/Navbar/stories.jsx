import { NavBar } from ".";
import links from "../NavLink/mock";
export default {
  title: "NavBar",
  component: NavBar,
  args: {
    links: links,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavBar {...args} />
    </div>
  );
};
