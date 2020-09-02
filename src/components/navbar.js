import React from 'react';


function NavBar() {
    return (
      
        <nav className="navbar navbar-expand-md fixed-top bg-white shadow">

            <div className="container my-2">
                <a  className="navbar-brand text-primary font-weight-bold ">Rohan Sadhukhan</a>

                
  


                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapseNav">
                    <span className="fas fa-bars text-primary"></span>
                </button>

                <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
    
                    <div className="navbar-nav ">
                        <a href="/" className="nav-item nav-link h6 text-primary my-auto text-center my-3 "><button className="btn btn-outline-info ml-auto mx-3">Contact Me</button></a>
                        
                        <a href="/" className="nav-item nav-link h6 text-primary my-auto text-center my-3 ">Home</a>

                        <a href="#about" className="nav-item nav-link h6 text-primary my-auto text-center my-3 ">About</a>
   
                        <a href="#project" className="nav-item nav-link h6 text-primary my-auto text-center my-3"> Project's</a>
  
                        <a href="#Tstack" className="nav-item nav-link h6 text-primary my-auto text-center my-3">Tech Stack</a>

                        <a href="#Blog" className="nav-item nav-link h6 text-primary my-auto text-center my-3">Blogs</a>
                    </div>
                </div>
            </div>




        </nav>
    );
}

export default NavBar;