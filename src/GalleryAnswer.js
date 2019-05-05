/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { Component } from 'react';
import {Redirect} from 'react-router-dom';
import IdleTimer from "react-idle-timer";

// xlinkHref="https://s3.amazonaws.com/appforest_uf/f1556501170357x344824048630522050/6809725-simple-vintage-backgrounds.jpg"
//http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png
//xlinkHref="https://ui-ex.com/images/caligraphy-clipart-transparent-3.png"


class GalleryAnswer extends Component{

    constructor(props){
        super(props);
        this.idleTimer = null;
        this.onIdle = this.onIdle.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            redirectBack: false,
            redirectVideo: false
        }

    }

    componentDidMount(){

    }

    onIdle(){
        this.setState({redirectVideo: true})
    }
    handleBack(){
        this.setState({redirectBack: true})

    }



    render() {
        if(this.state.redirectBack){
            return (<Redirect to={'/galleryTwo'}/>)
        } else if (this.state.redirectVideo){
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
                            ".a{clip-path:url(#b);}.b{font-size:84px;font-family:RosewoodStd-Regular, Rosewood Std;}.c{font-size:60px;font-family:CooperBlack, Cooper;}.d{fill:#fff;}"
                        }
                    </style>
                    <clipPath id="b">
                        <rect width={1920} height={1080} />
                    </clipPath>
                </defs>
                <g id="a" className="a">
                    <rect className="d" width={1920} height={1080} />
                    <g transform="translate(716)">
                        <image
                            width={1920}
                            height={1200}
                            transform="translate(-716)"
                            xlinkHref="https://s3.amazonaws.com/appforest_uf/f1556501170357x344824048630522050/6809725-simple-vintage-backgrounds.jpg"
                        />
                    </g>
                    <image
                        width={138}
                        height={138}
                        transform="translate(114 59)"
                        xlinkHref= "http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png"
                        onClick={this.handleBack}
                    />
                    <text className="b" transform="translate(959 183)">
                        <tspan x={-508.578} y={0}>
                            {"The going places gallery"}
                        </tspan>
                    </text>
                    <text className="b" transform="translate(959 88)">
                        <tspan x={-137.13} y={0}>
                            {"About: "}
                        </tspan>
                    </text>
                    <text className="c" transform="translate(152 379)">
                        <tspan x={0} y={0}>
                            {"The Going Places Gallery features vehicles commonly"}
                        </tspan>
                        <tspan x={0} y={69} xmlSpace="preserve">
                            {" used on Long Island,  along with a huge fiber-optic "}
                        </tspan>
                        <tspan x={0} y={138}>
                            {"map illustrating the development of regional "}
                        </tspan>
                        <tspan x={0} y={207}>
                            {"transportation routes."}
                        </tspan>
                        <tspan x={0} y={276} />
                        <tspan x={0} y={345}>
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
                        </tspan>
                        <tspan x={0} y={414}>
                            {"Phasellus suscipit risus sed lobortis porttitor. Aenean in"}
                        </tspan>
                        <tspan x={0} y={483}>
                            {"porttitor odio, lacinia fermentum sem. "}
                        </tspan>
                    </text>
                </g>
            </svg>
        )
    }


}

export default GalleryAnswer;
