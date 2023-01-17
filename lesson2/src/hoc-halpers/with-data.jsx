import { Component } from "react";
import ErrorIndicator from "../error-component/error-indicator";
import Spinner from "../ul/spinner";

const WithData = (View) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
      loading: false,
    };

    componentDidMount() {
      this.setState({
        error: false,
        loading: true,
      });
      this.props
        .getData()
        .then((data) => {
          this.setState({
            data,
            loading: false,
            error: false,
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false,
          });
        });
    }

    render() {
      const { data, error, loading } = this.state;

      if (!data || loading) return <Spinner />;
      if (error) return <ErrorIndicator />;

      return <View {...this.props} data={data} />;
    }
  };
};

export default WithData;
