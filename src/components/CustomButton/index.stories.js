import React from "react";

import CustomButton from ".";

export default {
  component: CustomButton,
  title: "CustomButton",
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "soy un fan",
  hrefTo: "/bares",
  bgColor: "green",
  hoverBG: "green.400",
};

/* 
hasRightIcon: PropTypes.bool,
    hasLeftIcon: PropTypes.bool,
    viewIcon: PropTypes.bool,
    headerSection: PropTypes.bool,
    text: PropTypes.string.isRequired,
    hrefTo: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
*/
