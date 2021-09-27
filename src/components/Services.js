import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktail" ,
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nostrum."
            },
            {
                icon: <FaHiking/>,
                title: "free hiking" ,
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nostrum."
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle" ,
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nostrum."
            },
            {
                icon: <FaBeer/>,
                title: "strong beer" ,
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nostrum."
            },
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
                    <div className="services-center">
                        {this.state.services.map((service,index)=>{
                            const {icon,title,info} = service
                            return (
                                <article key={index} className="service">
                                    <span>{icon}</span>
                                    <h6>{title}</h6>
                                    <p>{info}</p>
                                </article>
                            )
                        })}
                    </div>
            </section>
        )
    }
}
