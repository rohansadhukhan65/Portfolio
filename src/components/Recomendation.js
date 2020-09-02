import React from 'react'
import RecomCard from './RecomCard';

export default function Recomendation() {
    
    const RecCard = [
        {
            id: 1,
            Name: "Random Guy 1",
            Company: "CEO at abc company",
            Messege: "He is a good engnineer . Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi assumenda aliquam cupiditate itaque mollitia vel, harum quibusdam! Quod, doloribus libero.",
        },
        {
            id: 2,
            Name: "Random Guy 2",
            Company: "Director at abc company",
            Messege: "He is an excellent developer!",
        },
        {
            id: 3,
            Name: "Random Guy 3",
            Company: "Manager at abc company",
            Messege: "He is a Lazy person . Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi assumenda aliquam cupiditate itaque",
        },
        {
            id: 4,
            Name: "Random Guy 4",
            Company: "SDE at abc company",
            Messege: "He done things so nicely",
        },
        {
            id: 5,
            Name: "Random Guy 5",
            Company: "something at abc company",
            Messege: "He fixed things quickly Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi assumenda aliquam cupiditate itaque",
        },
    ];
    
    
    return (
        <div className="container-fluid my-1">
         
            <div className="row text-center py-1 d-flex flex-nowrap overflow-auto scrollbar">
                {
                    RecCard.map((RecCard) => (
                        
                            <RecomCard RecCard={RecCard}  />
                        
                    ))
                }
            </div>
         
        </div>

    )
}
