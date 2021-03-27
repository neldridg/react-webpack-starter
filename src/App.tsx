import React, { Component } from 'react';
import './styles/App.scss';
import SampleComponent from "./components/SampleComponent";

interface AppProps {
  AppName: string;
}

export default class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hello world!</h1>
        <SampleComponent />
      </div>
    )
  }
}
