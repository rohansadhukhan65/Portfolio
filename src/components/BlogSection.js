import React from 'react'
import ProjectCard from './ProjectCard';
export default function BlogSection() {
    
    const Blog = [
        {
            id: 1,
            Titlee: "Blog 1",
            imageUrl: require('../images/blog1 .jpg'),
            cardtext: "This is my Blog about.....",
        },
        {
            id: 2,
            Titlee: "Blog 2",
            imageUrl: require('../images/blog2.jpg'),
            cardtext: "This is my Blog about.....",
        },
        {
            id: 3,
            Titlee: "Blog 3",
            imageUrl: require('../images/blog3.jpg'),
            cardtext: "This is my Blog about.....",
        },
    ];
    
    
    return (
        <div className="container text-center my-5" id="Blog">
            <h1 className="font-weight-light">My<span className="text-primary font-weight-bold">Blogs</span></h1>
            <div className="lead">I Share my views on technologies in these blogs</div>
            <div className="row my-5 pt-3">

                {
                    Blog.map((Blog) => (

                        < div key={Blog.id} className="col-12 col-md-4 my-2">
                            <ProjectCard Titlee={Blog.Titlee} cardtext={Blog.cardtext} imageUrl={Blog.imageUrl} />
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
