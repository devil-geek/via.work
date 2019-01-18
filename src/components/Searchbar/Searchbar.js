import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import moment from "moment";

import "./Searchbar.scss";

export class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      activeSuggestion: 0,
      showSuggestions: false,
      suggestions: {}
    };
  }

  clearSearch = () => {
    this.setState({
      search: "",
      suggestions: {}
    });
  };

  onChange = async e => {
    const value = e.target.value;
    const name = e.target.name;

    await this.setState({
      [name]: value,
      suggestions: {}
    });
    this.autocomplete();
  };

  autocomplete = async () => {
    const { search } = this.state;

    if (search === "" || search.length < 2) {
      return;
    }

    const res = await Axios(
      `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${search}`
    );

    if (res.data.length > 0) {
      this.setState({
        suggestions: res.data,
        showSuggestions: true
      });
    }
  };

  onKeyDown = e => {
    const { activeSuggestion, suggestions } = this.state;

    if (e.keyCode === 13) {
      this.selectSuggestion(Object.values(suggestions)[activeSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === Object.values(suggestions).length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  suggestionList = () => {
    const {
      suggestions,
      search,
      activeSuggestion,
      showSuggestions
    } = this.state;
    if (!Object.values(suggestions).length === 0 || !showSuggestions) {
      return;
    }
    return (
      <div id="autocomplete-list" className="autocomplete-items">
        {Object.values(suggestions).map((suggestion, key) => {
          return (
            <div
              key={suggestion.uuid}
              onClick={() => {
                this.selectSuggestion(suggestion);
              }}
              className={
                key === activeSuggestion
                  ? "autocomplete-active"
                  : "has-text-grey"
              }
            >
              <strong>{suggestion.suggestion.substr(0, search.length)}</strong>
              {suggestion.suggestion.substr(search.length)}
            </div>
          );
        })}
      </div>
    );
  };

  selectSuggestion = async suggestion => {
    this.setState({
      suggestions: {},
      search: suggestion.suggestion,
      activeSuggestion: 0
    });
    const res = await Axios(
      `http://api.dataatwork.org/v1/jobs/${suggestion.uuid}/related_skills`
    );
    console.log("JOB", res.data);
    const job = { ...res.data, date: moment() };
    this.props.saveRecent(job);
  };

  onBlur = () => {
    setTimeout(() => {
      this.setState({
        showSuggestions: false
      });
    }, 100);
  };

  render() {
    const { search } = this.state;
    return (
      <div className="field has-addons">
        <div className="control autocomplete">
          <input
            className="input search-input"
            type="text"
            placeholder="Search for..."
            onClick={this.clearSearch}
            onChange={this.onChange}
            value={search}
            name="search"
            id="search"
            autoComplete="off"
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
          />
          {this.suggestionList()}
        </div>
        <div className="control">
          <button className="button is-info">
            <span className="icon">
              <i className="fa fa-search" />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveRecent: item => dispatch({ type: "SAVE", value: item })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Searchbar);
