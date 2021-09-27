import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let {featuredRooms} =this.context
        return (
            <div>
               <Loading/>
            </div>
        )
    }
}


