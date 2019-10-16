import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: 'App',
    };
  }

  componentDidMount() {
    axios.get("https://localhost:4000/user")
      .then(resp => this.setState({ info: resp.data.message }))
      .catch(err => console.log(err));
  }

  handleData(data) {
    this.setState({
      info: data.message
    });
  }

  render() {
    return (
      <div className="app" id="app">
        {this.state.info}
      </div>
    );
  }
}
export default App;
