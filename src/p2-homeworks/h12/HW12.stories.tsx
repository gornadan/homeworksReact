import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Provider} from "react-redux";
import store from "../h10/bll/store";
import HW12 from "./HW12";

export default {
  title: 'Example/HW12',
  component: HW12,
  decorators: [(Story) => <Provider store={store}><Story /></Provider>]
} as Meta;

const Template: Story = () => <HW12  />;

export const Themes = Template.bind({});
