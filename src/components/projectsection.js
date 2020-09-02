import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectSection() {

    const Project = [
        {   id: 1,
            Titlee: "Project 1",
            imageUrl: require('../images/projectone.png'),
            cardtext: "This is my project about.....",
        },
        {
            id: 2,
            Titlee: "Project 2",
            imageUrl: require('../images/projecttwo.png'),
            cardtext: "This is my project about.....",
        },
        {
            id: 3,
            Titlee: "Project 3",
            imageUrl: require('../images/projectthree.png'),
            cardtext: "This is my project about.....",
        },
    ];

    return (
        <div className="container text-center my-5" id="project">
            <h1 className="font-weight-light">My<span className="text-primary font-weight-bold">Projects</span></h1>
            <div className="lead">I build websites just like these website</div>
            <div className="row my-5 pt-3">
               
                {
                    Project.map((Project) => (
                   
                        < div key={Project.id} className="col-12 col-md-4 my-2">
                          <ProjectCard Titlee={Project.Titlee} cardtext={Project.cardtext} imageUrl={Project.imageUrl} />
                        </div>
                    ))
                }
               
            </div>

            <div className="my-5 text-right">
                <a href="/" style={{ textDecoration: "none" }}>
                    <h5>
                        See My Projects <i className="fas fa-arrow-right align-middle"></i>
                    </h5>
                </a>
            </div>



        </div>

    )
}
