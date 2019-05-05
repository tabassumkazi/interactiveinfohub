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
//xlinkHref="http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png"
//xlinkHref="https://ui-ex.com/images/caligraphy-clipart-transparent-3.png"
//xlinkHref="http://steve-lovelace.com/wordpress/wp-content/uploads/2013/08/index-mark.png"
//xlinkHref="https://longislandmuseum.org/wp-content/uploads/2014/03/CampusMap.jpg"
//xlinkHref="https://pngimage.net/wp-content/uploads/2018/06/you-are-here-png-9.png"

class GeneralAnswer extends Component{

    constructor(props){
        super(props);
        this.idleTimer = null
        this.onIdle = this.onIdle.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            redirectBack: false,
            redirectVideo:false
        }

    }

    componentDidMount(){

    }


    handleBack(){
        this.setState({redirectBack: true})

    }
    onIdle(){
        this.setState({redirectVideo: true})
    }



    render() {
         if(this.state.redirectBack){
            return (<Redirect to={'/generalQuestions'}/>)
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
                    <style>{".a{clip-path:url(#b);}.b{fill:#fff;}"}</style>
                    <clipPath id="b">
                        <rect width={1920} height={1080} />
                    </clipPath>
                </defs>
                <g id="a" className="a">
                    <rect className="b" width={1920} height={1080} />
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
                        transform="translate(106 77)"
                        xlinkHref="http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png"
                        onClick={this.handleBack}
                    />
                    <image
                        width={1608}
                        height={772}
                        transform="translate(175 247)"
                        xlinkHref="https://longislandmuseum.org/wp-content/uploads/2014/03/CampusMap.jpg"
                    />
                    <image
                        width={176}
                        height={176}
                        transform="translate(761 215)"
                        xlinkHref="https://pngimage.net/wp-content/uploads/2018/06/you-are-here-png-9.png"
                    />
                    <image
                        width={209}
                        height={209}
                        transform="translate(1419 268)"
                        xlinkHref="https://cdn.shopify.com/s/files/1/2326/6597/files/Google_pinpoint_Green.png?13041763271276688390"
                    />
                </g>
            </svg>
        )
    }


}

export default GeneralAnswer;
