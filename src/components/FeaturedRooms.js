import React, { Component } from 'react';
import { RoomContext } from '../context';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let {greeting} =this.context
        return (
            <div>
               <h1>{greeting}</h1>
            </div>
        )
    }
}


