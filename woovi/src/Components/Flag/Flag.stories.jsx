import Flag from ".";

export default {
  title: 'Flag',
  component: Flag,
  tags: ['autodocs'],

};

const Template = (args) => <Flag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "descrição",
    boldText: "Destaque"
};

