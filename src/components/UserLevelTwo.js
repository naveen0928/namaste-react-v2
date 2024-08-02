import React from "react";

class UserLevelTwo extends React.Component {
  constructor(props) {
    super(props);
    console.log("Third child constructor");
  }

  componentDidMount() {
    console.log("Third Child component Did mount");
  }

  componentDidUpdate() {
    console.log("Third Child component Did update");
  }

  render() {
    console.log("Third child render");
    return <div>User Class level 2</div>;
  }
}

export default UserLevelTwo;
