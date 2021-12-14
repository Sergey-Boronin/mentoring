import React from "react";

class ProfileCC extends React.Component {
  render() {
    return (
      <>
        <h2>Привет, {this.props.name}!</h2>
        <p>Дата ресгистрации: {this.props.registeredAt}</p>
      </>
    );
  }
}

export default ProfileCC;
