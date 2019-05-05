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

// xlinkHref="https://s3.amazonaws.com/appforest_uf/f1556501170357x344824048630522050/6809725-simple-vintage-backgrounds.jpg"
//http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png
//xlinkHref="https://ui-ex.com/images/caligraphy-clipart-transparent-3.png"




class GalleryQuestions extends Component{

    constructor(props){
        super(props);
        this.idleTimer = null
        this.onIdle = this.onIdle.bind(this);
        this.handleGallery1 = this.handleGallery1.bind(this);
        this.handleGallery2 = this.handleGallery2.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            redirectBack: false,
            redirectGallery1: false,
            redirectGallery2: false,
            redirectVideo : false
        }

    }

    componentDidMount(){

    }

    onIdle(){
        this.setState({redirectVideo: true})
    }
    handleGallery1(){
        this.setState({redirectGallery1: true})

    }

    handleBack(){
        this.setState({redirectBack: true})

    }

    handleGallery2(){
        this.setState({redirectGallery2: true})

    }

    render() {
        if (this.state.redirectGallery1) {
            return (<Redirect to={'/galleryOne'}/>)
        }
        else if(this.state.redirectGallery2) {
            return (<Redirect to={'/galleryTwo'}/>)
        }
        else if(this.state.redirectBack){
            return (<Redirect to={'/'}/>)
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
                            ".a{clip-path:url(#d);}.b{font-size:84px;font-family:RosewoodStd-Regular, Rosewood Std;}.c{fill:url(#a);}.d{font-size:40px;font-family:CopperplateGothic-Bold, Copperplate Gothic;font-weight:700;}.e{fill:#fff;}"
                        }
                    </style>
                    <pattern
                        id="a"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 2473 1045"
                    >
                        <image
                            width={2473}
                            height={1045}
                            xlinkHref="https://ui-ex.com/images/caligraphy-clipart-transparent-3.png"
                        />
                    </pattern>
                    <clipPath id="d">
                        <rect width={1920} height={1080} />
                    </clipPath>
                    <image
                        id="e"
                        width={722}
                        height={305}
                        xlinkHref="https://ui-ex.com/images/caligraphy-clipart-transparent-3.png"
                    />
                </defs>
                <g id="c" className="a">
                    <rect className="e" width={1920} height={1080} />
                    <g transform="translate(716)">
                        <image
                            width={1920}
                            height={1200}
                            transform="translate(-716)"
                            xlinkHref="https://s3.amazonaws.com/appforest_uf/f1556501170357x344824048630522050/6809725-simple-vintage-backgrounds.jpg"
                        />
                    </g>
                    <text className="b" transform="translate(959 88)">
                        <tspan x={-569.058} y={0}>
                            {"Choose a gallery to explore"}
                        </tspan>
                    </text>
                    <rect
                        className="c"
                        width={718}
                        height={303}
                        transform="translate(234 423)"
                    />
                    <use transform="translate(979 469)" xlinkHref="#e" />
                    <rect
                        className="c"
                        width={720}
                        height={305}
                        transform="matrix(1, -0.017, 0.017, 1, 234.4, 721.074)"
                    />
                    <use transform="translate(979 775)" xlinkHref="#e" />
                    <use transform="translate(979 164)" xlinkHref="#e" />
                    <use transform="translate(238 118)" xlinkHref="#e" />
                    <text className="d" transform="translate(599 286)" onClick={this.handleGallery1}>
                        <tspan x={-294.59} y={0}>
                            {"The Going Places Gallery"}
                        </tspan>
                    </text>
                    <text className="d" transform="translate(605 544)">
                        <tspan x={-215.42} y={0}>
                            {"Making Carriages: "}
                        </tspan>
                        <tspan x={-195.791} y={44}>
                            {"From Home-Town "}
                        </tspan>
                        <tspan x={-185.547} y={88}>
                            {"Shop to Factory"}
                        </tspan>
                    </text>
                    <text className="d" transform="translate(599 858)">
                        <tspan x={-252.061} y={0}>
                            {"Driving for sport and "}
                        </tspan>
                        <tspan x={-103.916} y={44}>
                            {"pleasure"}
                        </tspan>
                    </text>
                    <text className="d" transform="translate(1340 308)">
                        <tspan x={-277.588} y={0}>
                            {"The carriage Exposition "}
                        </tspan>
                        <tspan x={-92.539} y={44}>
                            {"Gallery"}
                        </tspan>
                    </text>
                    <image
                        width={138}
                        height={138}
                        transform="translate(59 34)"
                        xlinkHref="http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png"
                        onClick={this.handleBack}
                    />
                    <text className="d" transform="translate(1340 635)" onClick={this.handleGallery2}>
                        <tspan x={-230.869} y={0}>
                            {"Streets of new york"}
                        </tspan>
                    </text>
                    <text className="d" transform="translate(1340 919)">
                        <tspan x={-226.914} y={0}>
                            {"Gentleman's Coach "}
                        </tspan>
                        <tspan x={-167.91} y={44}>
                            {"House Gallery"}
                        </tspan>
                    </text>
                </g>
            </svg>
        )
    }


}

export default GalleryQuestions;
