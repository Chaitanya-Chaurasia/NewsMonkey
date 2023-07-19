import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { paste } from "@testing-library/user-event/dist/paste";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      article: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c5fbd10aa9894847a2e8785a2efc4e35";
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({ article: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Today's Top News</h2>
        <div className="row ">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={!element.title ? "NULL" : element.title.slice(0, 45)}
                  description={element.description}
                  imageURL={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div
          className="container d-flex justify-content-around"
          style={{ background: "none" }}
        >
          <button className="btn-dark">Previous</button>
          <button className="btn-dark">Next</button>
        </div>
      </div>
    );
  }
}

export default News;
