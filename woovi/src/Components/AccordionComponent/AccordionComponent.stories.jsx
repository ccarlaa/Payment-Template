import AccordionComponent from ".";

export default {
  title: 'AccordionComponent',
  component: AccordionComponent,
  tags: ['autodocs'],

};

const Template = (args) => <AccordionComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    label: "Accordion"
};

