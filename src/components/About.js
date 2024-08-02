import React from "react";
import User from "./User";
import UserLevelTwo from "./UserLevelTwo";
import UserFunctional from "./UserFunctional";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Class interval");
    // }, 1000);
    /// console.log("Parent component Did mount");
  }

  componentDidUpdate() {
    // console.log("Parent component Did update");
  }

  componentWillUnmount() {
    // console.log("class component will unmount");
    // clearInterval(this.timer);
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>This is About Us page</h1>
        {/* <User name="First " location="Vijayawada as Prop" />
        <User name="Second " location="Gollapudi as Prop" />
        <UserLevelTwo /> */}
        <UserFunctional />
      </div>
    );
  }
}

export default About;
