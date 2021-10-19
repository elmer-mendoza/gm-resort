import React, { Component } from 'react';
import defaultBcg from "../images/room-1.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';


export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType=RoomContext
    render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
        if(!room){
            return(
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            )
         }
         const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
         const [firstImg,...restOfImg] = images
        return (
            <>
            <StyledHero img={firstImg || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to home
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
               <div className="single-room-images">
                {restOfImg.map((image,index)=>(
                    <img key={index} src={image} alt="single-room"/>
                ))}
               </div>
               <div className="single-room-info">
                  <article className="desc">
                      <h3>details</h3>
                      <p>{description}</p>
                  </article> 
                  <article className="info">
                      <h3>info</h3>
                      <h6>price : ${price}</h6>
                      <h6>size : ${size} SQFT</h6>
                      <h6> 
                          max capacity :{capacity > 1 ?`${capacity} people`: `${capacity} person`}
                      </h6>
                      <h6> 
                          {pets ? "pets allowed" : "pets not allowed"}
                      </h6>
                      <h6> 
                          {breakfast && "free breakfast included"}
                      </h6>
                  </article> 
               </div>
            </section>
            <section className="room-extras">
                <ul className="extras">
                    {extras.map((item,index) =>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
