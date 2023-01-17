import { Component, ReactNode } from "react";
import ErrorIndicator from "../error-indicator";
interface MyProps {
  children: ReactNode;
}

export default class ErrorBoundry extends Component<MyProps> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
