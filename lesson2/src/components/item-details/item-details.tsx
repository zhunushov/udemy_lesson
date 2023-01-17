import React, { Component, FC } from "react";
import ErrorButton from "../../error-component/error-button";

interface MyProps {
  children: any;
  itemId: string;
  getData(id: string): Promise<object>;
  getImageUrl(id: any): string;
}
interface ChildProps {
  item?: any;
  field: string;
  label: string;
}

const Record: FC<ChildProps> = ({ item, field, label }) => {
  console.log(item, "item");

  return (
    <li className="list-group-item">
      <span className="term"> {label}</span>
      <span> {item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component<MyProps> {
  state = {
    item: null,
    image: null,
  };

  componentDidMount = () => {
    this.updateItem();
  };

  componentDidUpdate(prevProps: any) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }
    const { name } = item;
    return (
      <div className="item-details card d-flex flex-row">
        <img className="item-image d-flex w-25" src={image!} alt="item" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
