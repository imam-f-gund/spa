import React, { Component } from "react";
import Router from "./AdminRouter";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token : localStorage.getItem('token'),
      nama : localStorage.getItem('nama'),
      role : localStorage.getItem('role'),
    };
}
  
render() {
  return (
    <div>
      <Router role={this.state.role} token={this.state.token} />
    </div>  
  );
}
}
export default App;