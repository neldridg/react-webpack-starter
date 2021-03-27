import React, { Component } from 'react';
import '../styles/SampleComponent.scss'

interface SampleComponentProps {
  Sample: string;
}

export default class SampleComponent extends Component<SampleComponentProps> {
  constructor(props: SampleComponentProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>Sample Component</div>
    )
  }

}
