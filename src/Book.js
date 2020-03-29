import React, { Component } from "react";
//PROP DRILLING PASSING METHODS TO CHILDREN

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
      showInfo: true
    };
  }
  //STATE IS IMMUTABLE!!!
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    // console.log(this.props);
    const { img, title, author, id } = this.props.info;
    const checkInfo = info => {
      if (info === true) {
        return <p>lorem</p>;
      } else {
        return null;
      }
    };
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title: {title}</h4>
          <h6>Author: {author}</h6>
          <button type="button" onClick={this.handleInfo}>
            toggleInfo
          </button>
          {checkInfo(this.state.showInfo)}
        </div>
      </article>
    );
  }
}
