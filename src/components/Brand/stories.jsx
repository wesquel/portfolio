import { Brand } from '.';

export default {
  title: 'Brand',
  component: Brand,
  args: {
    brand: 'assets/images/logoJava.svg',
  },
  argTypes: {
    brand: { type: 'path' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Brand {...args} />
    </div>
  );
};
