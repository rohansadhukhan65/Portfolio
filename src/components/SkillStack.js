import React from 'react';
import TechCompo from './TechCompo';

export default function SkillStack() {

    const Skill = [
        {
            id: 1,
            SkillName: "HTML",
            Skillicon: "fab fa-html5",
            Startotal: 5,
            Staractive: 5,
        },
        {
            id: 2,
            SkillName: "Css",
            Skillicon: "fab fa-css3-alt",
            Startotal: 5,
            Staractive: 5,
        },
        {
            id: 3,
            SkillName: "Java Script",
            Skillicon: "fab fa-js-square",
            Startotal: 5,
            Staractive: 3,
        },
        {
            id: 4,
            SkillName: "Bootstrap",
            Skillicon: "fab fa-bootstrap",
            Startotal: 5,
            Staractive: 3,
        },
        {
            id: 5,
            SkillName: "React Js",
            Skillicon: "fab fa-react",
            Startotal: 5,
            Staractive: 3,
        },
        {
            id: 6,
            SkillName: "MySql",
            Skillicon: "fas fa-database",
            Startotal: 5,
            Staractive: 3,
        },
        {
            id: 7,
            SkillName: "Python",
            Skillicon: "fab fa-python",
            Startotal: 5,
            Staractive: 5,
        },
        {
            id: 8,
            SkillName: "Python Flask",
            Skillicon: "fas fa-pepper-hot",
            Startotal: 5,
            Staractive: 3,
        },
      
        


    ];
    const FinalSkillRow = [];
    for ( let i = 0; i < Skill.length / 4; i++ ){
        let Skillrow = Skill.slice(i * 4, (i + 1) * 4);
        FinalSkillRow.push(
            <div  className="d-flex justify-content-around py-1">
               { Skillrow.map((skill) => (
                 <TechCompo  skill={skill} />
                ) )}
            </div>
        )
    }

    return (

        <div className="bg-primary w-100 my-5" id="Tstack">
            <div className="container text-center py-5">
                <h1 className="font-weight-light text-light">
                    <span className="text-light" style={{ fontWeight: "bold" }}>Technology  Stack</span> </h1>
                <div className="lead text-light" >I design, develop and deliver with these weapons </div>

               {FinalSkillRow}

            </div>

        </div>
    )
}
