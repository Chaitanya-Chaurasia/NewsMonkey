import React, { Component, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews(concat) {
    console.log("Current page is ", this.state.page);
    this.props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5fbd10aa9894847a2e8785a2efc4e35&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let response = await fetch(url);

    this.props.setProgress(30);
    let parsedData = await response.json();
    this.props.setProgress(70);

    this.setState({
      totalResults: parsedData.totalResults,
      loading: false,
    });

    concat
      ? this.setState({
          articles: this.state.articles.concat(parsedData.articles),
        })
      : this.setState({ articles: parsedData.articles });

    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews(false);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.updateNews(true);
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">
          {this.props.category === "general"
            ? "Today's Headlines"
            : "Top News Articles on " +
              this.props.category[0].toUpperCase() +
              this.props.category.slice(1)}
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row ">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3">
                    <NewsItem
                      title={
                        !element.title ? "NULL" : element.title.slice(0, 45)
                      }
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
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
