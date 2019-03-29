import React, { Component } from "react";

import "../assets/css/Ranking.css";

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      ranking: props.ranking
    };
  }

  updateRanking = e => {
    const { id } = this.props;

    const data = { score: e.target.value };

    fetch(`http://localhost:4000/user/${id}/ranking`, {
      method: "PUT",
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("updateRanking", res);
      });
  };

  render() {
    const { id, ranking } = this.props;

    console.log("ranking", ranking);

    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-star"
          className="rating__control"
          value="1"
          id={"rc1_" + id}
          defaultChecked={ranking === 1}
          onClick={e => this.updateRanking(e)}
        />
        <input
          type="radio"
          name="rating-star"
          className="rating__control"
          value="2"
          id={"rc2_" + id}
          defaultChecked={ranking === 2}
          onClick={e => this.updateRanking(e)}
        />
        <input
          type="radio"
          name="rating-star"
          className="rating__control"
          value="3"
          id={"rc2_" + id}
          defaultChecked={ranking === 3}
          onClick={e => this.updateRanking(e)}
        />
        <input
          type="radio"
          name="rating-star"
          className="rating__control"
          value="4"
          id={"rc4_" + id}
          defaultChecked={ranking === 4}
          onClick={e => this.updateRanking(e)}
        />
        <input
          type="radio"
          name="rating-star"
          className="rating__control"
          value="5"
          id={"rc5_" + id}
          defaultChecked={ranking === 5}
          onClick={e => this.updateRanking(e)}
        />

        <label htmlFor={"rc1_" + id} className="rating__item">
          <i className="rating__star fa fa-star" title="1 star" />
          <span className="rating__label">1</span>
        </label>
        <label htmlFor={"rc2_" + id} className="rating__item">
          <i className="rating__star fa fa-star" title="2 stars" />
          <span className="rating__label">2</span>
        </label>
        <label htmlFor={"rc3_" + id} className="rating__item">
          <i className="rating__star fa fa-star" title="3 stars" />
          <span className="rating__label">3</span>
        </label>
        <label htmlFor={"rc4_" + id} className="rating__item">
          <i className="rating__star fa fa-star" title="4 stars" />
          <span className="rating__label">4</span>
        </label>
        <label htmlFor={"rc5_" + id} className="rating__item">
          <i className="rating__star fa fa-star" title="5 stars" />
          <span className="rating__label">5</span>
        </label>
      </div>
    );
  }
}

export default Ranking;
