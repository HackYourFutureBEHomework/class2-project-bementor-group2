import React, { Component } from "react";

import { updateUserRanking } from "../api/users";

import "../assets/css/Ranking.css";

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: null,
      newRanking: null,
      alertClass: "hide"
    };
  }

  showWarning = () => {
    this.setState({ alertClass: "alert alert-warning scored-message" });
  };

  hideWarning = e => {
    this.setState({ alertClass: "hide" });
  };

  updateRanking = e => {
    e.stopPropagation();

    if (this.state.score) {
      this.showWarning();
      return;
    }

    const { id } = this.props;
    const score = e.target.value;

    updateUserRanking(id, score).then(res => {
      this.setState({
        score,
        newRanking: res.user.ranking
      });
    });
  };

  render() {
    let { id, ranking } = this.props;
    if (this.state.score) {
      ranking = this.state.score;
    }

    // the empty onChange function is just to avoid React warning about
    // missing onChange which it is already covered by onClick
    return (
      <div className="ranking">
        <div className="rating">
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="1"
            id={"rc1_" + id}
            checked={ranking >= 1}
            onClick={this.updateRanking}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="2"
            id={"rc2_" + id}
            checked={ranking >= 2}
            onClick={this.updateRanking}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="3"
            id={"rc2_" + id}
            checked={ranking >= 3}
            onClick={this.updateRanking}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="4"
            id={"rc4_" + id}
            checked={ranking >= 4}
            onClick={this.updateRanking}
            onChange={() => {}}
          />
          <input
            type="radio"
            name="rating-star"
            className="rating__control"
            defaultValue="5"
            id={"rc5_" + id}
            checked={ranking >= 5}
            onClick={this.updateRanking}
            onChange={() => {}}
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

        <div
          className={this.state.alertClass}
          role="alert"
          onClick={this.hideWarning}
        >
          You already scored this profile with: {this.state.score}
        </div>
      </div>
    );
  }
}

export default Ranking;
