import React from "react";





export default function Hero(props) {

 

    
    return (
        <div className="info--container">
            <img src={props.imageUrl}></img>

            <div className="info">
                <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <p className="p">{props.location}</p>
                <p>{<a href ={props.googleMapsUrl}>View on Google Maps</a>}</p>
                </div>

                <h1>{props.title}</h1>

                <div className="date">
                    <h2>{props.startDate} - {props.endDate}</h2>

                    
                </div>
                <p>The {props.description}</p>


            </div>

        </div>
    )
}