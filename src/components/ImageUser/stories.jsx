import { ImageUser } from ".";

export default {
  title: "ImageUser",
  component: ImageUser,
  args: {
    children: "ImageUser",
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <ImageUser {...args} />
    </div>
  );
};
