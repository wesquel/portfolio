import { ButtonTable } from '.';

export default {
    title: 'ButtonTable',
    component: ButtonTable,
    args: {
        children: 'ButtonTable',
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <ButtonTable {...args} />
        </div>
    );
};
