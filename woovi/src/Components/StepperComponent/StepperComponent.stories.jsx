import StepperComponent from '.';

export default {
  title: 'StepperComponent',
  component: StepperComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
  },
};

const Template = (args) => <StepperComponent {...args} />;

const values = [{
  installmentsNumber: 4,
  installmentsValue: 30500.00,
  cashback: 3,
  interest: 4,
}];

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  payment: values[0],
};
