import * as React from "react";

interface IProps {
  history: History;
}

interface IState {
  username: string;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // this.state = { username: "" };
  }

  render() {
    return <h1>HomePage</h1>;
  }
}

export default Home;
