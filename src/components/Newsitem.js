import React, { Component } from "react";

export class Newsitem extends Component {
    
  render() {
    let { title, description,imageURL, newsURL, date, source} = this.props;
    return (
      <div>
        <div className="card " >
        {/*<span class="badge text-bg-danger d-block w-100 mb-2 text-center fs-3 fw-normal" style={{height : "50px"}}>{source}</span>*/}
          <img src={imageURL|| "https://www.livemint.com/lm-img/img/2024/06/13/1600x900/adam-smigielski-K5mPtONmpHM-unsplash_1700479308572_1718274586121.jpg"} className="card-img-top" alt="NEWS" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description || "Click below to read more."}</p>
            <p class="mt-2 mb-0 text-secondary small">{source}</p>
            <p class="text-secondary small">{new Date(date).toGMTString()}</p>
            <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">
              Continue reading
            </a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
