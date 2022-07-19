import React from 'react'

export default function Card(props) {
    return(
        <div className = 'card'>
            <section className = 'card--img'>
                <img src ={`../images/${props.imageUrl}`} />
            </section>
            <section className = 'card--text'>
                <section className = 'location--map'>
                    <section className = 'pin--place'>
                        <img src='../images/location-pin.svg' />
                        <h5> {props.location} </h5>
                    </section>
                    <a href= {props.googleMapsUrl}> View on Google Maps </a>
                </section>
                <h3> {props.title}</h3>
                <h6> {props.startDate} - {props.endDate}</h6>
                <p> {props.description}</p>
            </section>
        </div>
    )
}