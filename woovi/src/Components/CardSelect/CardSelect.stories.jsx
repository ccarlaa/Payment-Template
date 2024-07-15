import CardSelect from ".";

export default {
  title: 'CardSelect',
  component: CardSelect,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

const Template = (args) => <CardSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

