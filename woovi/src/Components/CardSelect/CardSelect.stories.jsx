import CardSelect from '.';

export default {
  title: 'Example/CardSelect',
  component: CardSelect,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
};

const Template = (args) => <CardSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

