import React from 'react';

export default class ErrorBoundry extends React.Component {
  constructor() {
    super();
    this.state = {
      isError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      isError: true
    }
  }

  componentDidCatch() {
    console.log("Error Occured...");
  }

  render() {
    return (
      <div>
        {this.state.isError === true && <h1>This is an Error Situation</h1>}
        {this.state.isError === false && <ErrorThrowingComponent></ErrorThrowingComponent>}
      </div>
    )
  }
}


class ErrorThrowingComponent extends React.Component {

  updateName(event) {
    if(event.target.value.indexOf(" ") > -1) {
      throw "Name Cannot Contain blank Spaces";
    }
  }

  render() {
    return (
      <div>
        <h2>This is Child Component</h2>
        <input type="button" onClick={this.updateName} value="Click for Error" />
      </div>
    )
  }
}