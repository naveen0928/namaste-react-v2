import React from "react";
import UserLevelTwo from "./UserLevelTwo";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component Did mount");
    const data = await fetch("https://api.github.com/users/naveen0928");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child component Did update");
  }

  render() {
    console.log(this.props.name + "Child render");
    // const { name, location } = this.props;
    const { name, type, avatar_url } = this.state.userInfo;
    return (
      <div className="class-card">
        {/* <div>
          <h1>Count : {this.state.count}</h1>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increase count
          </button>
        </div> */}
        <img src={avatar_url} />
        <h1>This is Class Component</h1>
        <h2>{name}</h2>
        <h4>{type}</h4>
        {/* <UserLevelTwo /> */}
      </div>
    );
  }
}

export default User;
