import React, { Component } from 'react';
import axios from 'axios';
import WikiList from './WikiList';
import './WikiSearch.css';

class WikiSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wikiData: [],
      loading: false
    };

    this.fetchWikiData = this.fetchWikiData.bind(this);
  }

  fetchWikiData(e) {
    const { flashMessenger } = this.props;
    e.preventDefault();

    const searchQuery = document.getElementById('search-box').value;
    const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchQuery}`;

    if (searchQuery) {
      this.setState({ loading: true });
      axios.get(url)
        .then((response) => this.setState({ wikiData: response.data.query.pages, loading: false }))
        .catch((error) => { this.setState({ loading: false }); })
    } else {
      this.setState({ loading: false });
      flashMessenger('error', 'Search Text field is required');
    }
  }

  render() {
    const { loading, wikiData } = this.state;
    return (
      <div className="container">
        <div className="wiki-search-box">
          <div className="row form-group">
            <div className="col-12 text-center">
              <h3 className="wiki-title">
                Wiki Search App
              </h3>
            </div>
          </div>

          <form onSubmit={this.fetchWikiData}>
            <div className="row">
              <div className="col-12 form-group">
                <label htmlFor="search-box" className="sr-only" >Search Text</label>
                <input id="search-box" placeholder="Search Text..."
                  className="form-control input-lg" required />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <div className="row">
                  <div className="col-xs-12 col-md-6 form-group">
                    <button type="submit"
                      className="btn btn-lg btn-primary"
                      onClick={this.fetchWikiData}>
                      Wiki Search
                    </button>
                  </div>
                  <div className="col-12 col-md-6 form-group">
                    <a className="btn btn-lg btn-success"
                      rel="noopener noreferrer"
                      href="https://en.wikipedia.org/wiki/Special:Random"
                      target="_blank" >
                      Get Random Wiki
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <WikiList loading={loading} items={wikiData} />
        </div>
      </div>
    );
  }
}

export default WikiSearch;