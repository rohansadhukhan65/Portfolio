import React from 'react'

export default function ProjectCard(props) {
    const { Titlee, cardtext,imageUrl } = props;
    
    return (
        <div className="card shadow h-100">
            <img className="card-img-top" src={imageUrl} alt="Project" />
            <div className="card-body">
                <h4>{Titlee}</h4>
                <p className="card-text">{cardtext}</p>
                <a href="/" className="stretched-link" style={{ textDecoration: "none " }}>More</a>
            </div>

        </div>
    )
}
