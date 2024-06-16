import React from "react";

const Newsitem = (props) => {
    
  
    let { title, description,imageURL, newsURL, date, source} = props;
    return (
      <div>
        <div className="card " >
        
          <img src={imageURL|| "https://www.livemint.com/lm-img/img/2024/06/13/1600x900/adam-smigielski-K5mPtONmpHM-unsplash_1700479308572_1718274586121.jpg"} className="card-img-top" alt="NEWS" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description || "Click below to read more."}</p>
            <p className="mt-2 mb-0 text-secondary small">{source}</p>
            <p className="text-secondary small">{new Date(date).toGMTString()}</p>
            <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">
              Continue reading
            </a>
            
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
