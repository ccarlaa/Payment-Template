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
    borderTopRounded: {
      control: {
        type: 'boolean'
      }
    },
    borderBottomRounded: {
      control: {
        type: 'boolean'
      }
    },
    selected: {
      control: {
        type: 'boolean'
      }
    }
  },
};

const Template = (args) => <CardSelect {...args} />;

const values = 
{
  installmentsNumber: 1,
  installmentsValue: 30500.00,
  cashback: 3,
  interest: 4
}


export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  infos: values,
  selected: false
};

