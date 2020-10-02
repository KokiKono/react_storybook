import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Card, {IProps as CardProps} from '../components/Card/';
import CardTitle, {IProps as CardTitleProps} from '../components/CardTitle';

export default {
    title: 'MyLib/Card',
    component: Card,
    argTypes: {
        backgroundColor: {control: 'color'},
        shadowColor: {control: 'color'},
    }
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} >
        <CardTitle title="サンプル"/>
    </Card>;

export const Default = Template.bind({});