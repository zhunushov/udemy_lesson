import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import Spinner from "../../ul/spinner";

import "./person-details.css";
interface MyProps {
  itemId: string | null;
}
export default class PersonDetails extends Component<MyProps> {
  swapiService = new SwapiService();
  state = {
    person: null,
    loading: false,
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps: MyProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId } = this.props;
    if (!itemId) return;

    this.swapiService.getPerson(itemId).then((person) => {
      this.setState({ person, loading: false });
    });
  }
  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }
    const { person, loading } = this.state;
    const spinner = loading && <Spinner />;
    const data = !loading && <PersonView person={person} />;
    return (
      <div className="person-details card">
        {spinner}
        {data}
      </div>
    );
  }
}

const PersonView = (props: any) => {
  const { id, name, gender, birthYear, eyeColor } = props.person;
  return (
    <>
      <img
        alt="person-details"
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
