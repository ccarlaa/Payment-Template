import Header from "."

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Title: "Título"
};

