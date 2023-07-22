import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, url, author, date } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            By {author ? author : "Unknown"}
          </span>
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
            <h5 className="card-title">{title.slice(0, 45) + "..."}</h5>
            <p className="card-text">
              {!description
                ? "Click `Read More` to read"
                : description.slice(0, 88) + "..."}
              {date === new Date().toJSON().slice(0, 10) ||
              date.slice(6, 10) ===
                new Date().toJSON().slice(6, 8) +
                  Number(new Date().toJSON().slice(8, 10) - 1) ? (
                <span className="badge bg-warning text-dark mx-3">NEW!!</span>
              ) : (
                ""
              )}
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
