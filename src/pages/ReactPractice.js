import { Component } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

class ReactPractice extends Component {
  // name = "Budi";

  // handleClickVariable = () => {
  //   this.name = "Bapak Budi";

  //   console.log(this.name);
  // };

  state = {
    name: "Irsyaad",
  };

  constructor(props) {
    super(props);

    // binding example
    // this.handleClickState = this.handleClickState.bind(this)

    console.log("[LIFECYCLE] => constructor");
  }

  componentDidMount() {
    console.log("[LIFECYCLE] => componentDidMount");
  }

  componentDidUpdate() {
    console.log("[LIFECYCLE] => componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[LIFECYCLE] => componentWillUnmount");
  }

  handleClickState = () => {
    this.setState({ name: "Bapak Irsyaad" });
  };

  // // binding example
  // handleClickState() {
  //   this.setState({ name: "Bapak Irsyaad" });
  // }

  gotoPagination = () => {
    // console.log(this.props);

    this.props.history.push("/pagination");
  };

  render() {
    console.log("[LIFECYCLE] => render");
    return (
      <div style={{ padding: 12 }}>
        {/* <p>Hello {this.name}</p>
        <button onClick={this.handleClickVariable}>Click</button> */}

        <p>Hello {this.state.name}</p>
        <Button text="Click" handleClick={this.handleClickState} />

        <div>
          <Link to="/pagination">Go to pagination</Link>
        </div>
        <Button text="Button Pagination" handleClick={this.gotoPagination} />
      </div>
    );
  }
}

export default ReactPractice;

// class Car {
//   color = "Blue";

//   handleChangeColor() {
//     this.color = "Red";

//     // print this => Car
//   }
// }

// class CarJS {
//   color = "Red";

//   // constructor(){
//   //   this.handleChangeColor = this.handleChangeColor.bind(this)
//   // }

//   // handleChangeColor() {
//   //   console.log(this); // handleChangeColor

//   //   this.color = "Blue"
//   // }

//   // handleChangeColor = () => {
//   //   console.log(this); // CarJS

//   //   this.color = "Blue";
//   // };
// }
