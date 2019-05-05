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

class Home extends Component {

    constructor(props){
        super(props);

        this.handleGeneral = this.handleGeneral.bind(this);
        this.handleGallery = this.handleGallery.bind(this);
        this.onIdle = this.onIdle.bind(this);
        this.idleTimer = null
        this.state = {
            redirectGeneral: false,
            redirectGallery: false,
            redirectVideo: false
        }

    }

    componentDidMount(){

    }

    handleGeneral(){
        this.setState({redirectGeneral: true})
    }

    handleGallery(){
        this.setState({redirectGallery: true})

    }

    onIdle(){
        this.setState({redirectVideo: true})
    }

    render(){
        if (this.state.redirectGeneral) {
            return (<Redirect to={'/generalQuestions'}/>)
        }
        else if (this.state.redirectGallery) {
                return (<Redirect to={'/galleryQuestions'}/>)
        }
        else if (this.state.redirectVideo){
            return (<Redirect to={'/video'}/>)
        }

        return(
            <svg width={1920} height={1080} viewBox="0 0 1920 1080">
                <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    onIdle={this.onIdle}
                    debounce={250}
                    timeout={10000}

                />

            <defs>
            <style>
            {
                ".a{clip-path:url(#b);}.b{font-size:84px;font-family:RosewoodStd-Regular, Rosewood Std;}.c{fill:#fff;}"
            }
    </style>
    <clipPath id="b">
            <rect width={1920} height={1080}/>
    </clipPath>
    </defs>
        <g id="a" className="a">
            <rect className="c" width={1920} height={1080}/>
            <g transform="translate(716)">
                <image
                    width={1920}
                    height={1200}
                    transform="translate(-716)"
                    xlinkHref="https://s3.amazonaws.com/appforest_uf/f1556501170357x344824048630522050/6809725-simple-vintage-backgrounds.jpg"
                />
            </g>
            <text className="b" transform="translate(959 474)" onClick = {this.handleGeneral}>
                <tspan x={-325.752} y={0}>
                    {"General Inquiry"}
                </tspan>
            </text>
            <text className="b" transform="translate(959 754)" onClick = {this.handleGallery}>
                <tspan x={-428.568} y={0}>
                    {"Questions By Gallery"}
                </tspan>
            </text>
        </g>
        </svg>

        )
    }
}

export default Home;
