import { TitleComponent } from ".";

export default {
  title: "TitleComponent",
  component: TitleComponent,
  args: {
    children: "TitleComponent",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TitleComponent {...args} />
    </div>
  );
};
