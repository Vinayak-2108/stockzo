import React from "react";

const Card = (props) => {
  return (
    <>
     <div className={props.className}>
          <div className="card-img">
            <img src={props.img} alt= {props.title}/>
          </div>
          <div className="card-title">{props.title}</div>
          <div className="card-body">
            {props.body}
          </div>
          <button className="btn card-btn">Learn More</button>
        </div>
    </>
  );
};

export default Card;
