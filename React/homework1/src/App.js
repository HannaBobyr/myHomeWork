import "./App.scss";
import React, { Component } from "react";
import Button from "./Components/Button/Button.js";
import Modal from "./Components/Modal/Modal";
class App extends Component {
  state = {
    isActive: false,
    isActiveShare: false,
  };
  openButtonDelete = () => {
    this.setState({ isActiveDelete: true });
  };
  openButtonShare = () => {
    this.setState({ isActiveShare: true });
  };
  deleteButtonDelete = () => {
    this.setState({ isActiveDelete: false });
  };
  deleteButtonShare = () => {
    this.setState({ isActiveShare: false });
  };
  render() {
    return (
      <>
        <Button
          isActiveDelete={this.state.isActiveDelete}
          isActiveShare={this.state.isActiveShare}
          className="button"
          text="Open first modal"
          onClick={this.openButtonDelete}
          backgroundColor="#9932CC"
        />
        <Button
          isActiveDelete={this.state.isActiveDelete}
          isActiveShare={this.state.isActiveShare}
          className="button"
          text="Open second modal"
          onClick={this.openButtonShare}
          backgroundColor="#8B008B"
        />
        <Modal
          isActive={this.state.isActiveDelete}
          header="Do you want to delete this file?"
          closeButton={true}
          text="Are you sure you want to delete this file?"
          actions={
            <>
              <Button
                className="button"
                text="Cancel"
                onClick={this.deleteButtonDelete}
                backgroundColor="#A52A2A"
              />
              <Button
                className="button"
                text="OK"
                onClick={this.deleteButtonDelete}
                backgroundColor="#A52A2A"
              />
            </>
          }
          clickOnCloseButton={this.deleteButtonDelete}
        />
        <Modal
          isActive={this.state.isActiveShare}
          header="Do you share your location?"
          closeButton={false}
          text="Are you sure you want to share your location?"
          actions={
            <>
              <Button
                className="button"
                text="Cancel"
                onClick={this.deleteButtonShare}
                backgroundColor="#A52A2A"
              />
              <Button
                className="button"
                text="OK"
                onClick={this.deleteButtonShare}
                backgroundColor="#A52A2A"
              />
            </>
          }
          clickOnCloseButton={this.deleteButtonShare}
        />
      </>
    );
  }
}
export default App;
