import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, url } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageURL
                ? imageURL
                : "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q="
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {!description
                ? "Click `Read More` to read"
                : description.slice(0, 88)}
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
