import Layout from ".";

export default {
  title: 'Layout',
  component: Layout,
  tags: ['autodocs'],

};

const Template = (args) => <Layout {...args}>Corpo da página</Layout>;

export const Primary = Template.bind({});
Primary.args = {
    Title: "Título"
};

