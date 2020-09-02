import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Title from './components/title';
import About from './components/about';
import Footer from './components/Footer';
import ProjectSection from './components/projectsection';
import BlogSection from './components/BlogSection';
import SkillStack from './components/SkillStack';
import Recomendation from './components/Recomendation';



function App() {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      
      
      {/* Title Section */}
      <Title name="Rohan Sadhukhan" leadtext="I am a freelancer from india" />
      
      {/* Recomendation Section */}
      <Recomendation/>
      
      {/* Tech Stack */}
      <SkillStack/>

      {/* project section */}
      <ProjectSection/>
      
      {/* About Section */}
      <About />
      

      {/* Blog Section */}
      <BlogSection/>

      {/* Footer */}
      <Footer/>
      
   </div>
  );
}

export default App;

