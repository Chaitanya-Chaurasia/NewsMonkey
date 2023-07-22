import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
  };

  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5fbd10aa9894847a2e8785a2efc4e35&page=1&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);
    let parsedData = await response.json();

    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=c5fbd10aa9894847a2e8785a2efc4e35&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await response.json();
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=c5fbd10aa9894847a2e8785a2efc4e35&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize} `;

    let response = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await response.json();
    this.setState({
      page: this.state.page + 1,
      article: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          Top News Articles on{" "}
          {this.props.category[0].toUpperCase() + this.props.category.slice(1)}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row ">
          {!this.state.loading &&
            this.state.article.map((element) => {
              console.log(element.publishedAt);
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={!element.title ? "NULL" : element.title.slice(0, 45)}
                    description={element.description}
                    imageURL={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt.slice(0, 10)}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-around">
          <button
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
