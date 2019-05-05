/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { Component } from 'react';
import {Redirect} from 'react-router-dom';
import IdleTimer from 'react-idle-timer'
import ReactPlayer from 'react-player'

class AttractLoop extends Component {

    constructor(props) {
        super(props);

        this.active = this.active.bind(this);
        this.idleTimer = null
        this.state = {
            redirect: false

        }
    }

        componentDidMount()
        {

        }

        active(){
        this.setState({redirect:true})
        }

        render()
        {
            if (this.state.redirect) {
                return (<Redirect to={'/'}/>)
            }

            return (
                <div className="player-wrapper">
                    <IdleTimer
                        ref={ref => { this.idleTimer = ref }}
                        onAction={this.active}
                        debounce={250}
                         />
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=q6J1Lcg6nMI&feature=youtu.be'
                        playing
                        width='1920px'
                        height='1080px'
                        loop
                    />
                </div>

            )
        }
}

export default AttractLoop;
