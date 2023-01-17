import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import SwapiService from "../../services/swapi-services";
import Spinner from "../../ul/spinner";
import ErrorIndicator from "../../error-component/error-indicator";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 15000,
  };
  static propTypes = {
    updateInterval: PropTypes.number,
  };

  swapi = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: {
      message: null,
      isError: false,
    },
  };
  componentDidMount = () => {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanedLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };
  onError = ({ message }) => {
    this.setState({
      error: { isError: true, message },
      loading: false,
    });
  };
  updatePlanet = () => {
    // console.log("updated");
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapi
      .getPlanet(id.toString())
      .then(this.onPlanedLoaded)
      .catch(this.onError);
  };

  render() {
    const {
      loading,
      planet,
      error: { isError, message },
    } = this.state;
    const hasData = !(isError || loading);
    const error = isError && <ErrorIndicator message={message} />;
    const spinner = loading && <Spinner />;
    const content = hasData && <PlanetView planet={planet} />;
    return (
      <div className="random-planet jumbotron rounded">
        {error}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, diameter, name, population, rotationPeriod } = planet;
  return (
    <Fragment>
      <img
        alt="Img"
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">{population}</span>
            <span>123124</span>
          </li>
          <li className="list-group-item">
            <span className="term">{rotationPeriod}</span>
            <span>43</span>
          </li>
          <li className="list-group-item">
            <span className="term">{diameter}</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
