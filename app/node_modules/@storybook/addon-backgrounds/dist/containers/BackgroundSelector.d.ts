import { Component } from 'react';
import { API } from '@storybook/api';
interface GlobalState {
    name: string | undefined;
    selected: string | undefined;
}
interface Props {
    api: API;
}
export declare class BackgroundSelector extends Component<Props> {
    change: ({ selected, name }: GlobalState) => void;
    render(): JSX.Element;
}
export {};
