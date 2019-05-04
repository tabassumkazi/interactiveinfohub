/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { Component } from 'react';
import {Redirect} from 'react-router-dom';

// xlinkHref="https://s3.amazonaws.com/appforest_uf/f1556501170357x344824048630522050/6809725-simple-vintage-backgrounds.jpg"
//http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png
//xlinkHref="https://ui-ex.com/images/caligraphy-clipart-transparent-3.png"


class GeneralQuestions extends Component{

    constructor(props){
        super(props);
        this.handleBack = this.handleBack.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);

        this.state = {
            redirectBack: false,
            redirectAnswer: false
        }

    }

    componentDidMount(){

    }

    handleBack(){
        this.setState({redirectBack: true})
    }

    handleAnswer(){
        this.setState({redirectAnswer: true})
    }



    render() {
        if (this.state.redirectBack) {
            return (<Redirect to={'/'}/>)
        }
        else if(this.state.redirectAnswer){
            return (<Redirect to={'/generalAnswer'}/>)
        }

        return(
            <svg width={1920} height={1080} viewBox="0 0 1920 1080">
                <defs>
                    <style>
                        {
                            ".a{clip-path:url(#e);}.b{font-size:84px;font-family:RosewoodStd-Regular, Rosewood Std;}.c{font-size:60px;font-family:BrushScriptMT, Brush Script MT;}.d{fill:url(#a);}.e{font-size:45px;font-family:CooperBlack, Cooper;}.f{fill:#fff;}"
                        }
                    </style>
                    <pattern
                        id="a"
                        preserveAspectRatio="none"
                        width="100%"
                        height="100%"
                        viewBox="0 0 300 300"
                    >
                        <image
                            width={300}
                            height={300}
                            xlinkHref="http://steve-lovelace.com/wordpress/wp-content/uploads/2013/08/index-mark.png"
                        />
                    </pattern>
                    <clipPath id="e">
                        <rect width={1920} height={1080} />
                    </clipPath>
                    <image
                        id="f"
                        width={132}
                        height={132}
                        xlinkHref="http://steve-lovelace.com/wordpress/wp-content/uploads/2013/08/index-mark.png"
                    />
                </defs>
                <g id="d" className="a">
                    <rect className="f" width={1920} height={1080} />
                    <g transform="translate(716)">
                        <image
                            width={1920}
                            height={1200}
                            transform="translate(-716)"
                            xlinkHref="https://s3.amazonaws.com/appforest_uf/f1556501170357x344824048630522050/6809725-simple-vintage-backgrounds.jpg"
                        />
                    </g>
                    <text className="b" transform="translate(959 88)">
                        <tspan x={-201.936} y={0}>
                            {"Questions"}
                        </tspan>
                    </text>
                    <text className="c" transform="translate(960 196)">
                        <tspan x={-249.653} y={0}>
                            {"How May We Help You?"}
                        </tspan>
                    </text>
                    <image
                        width={138}
                        height={138}
                        transform="translate(59 79)"
                        xlinkHref= "http://pngriver.com/wp-content/uploads/2018/04/Download-Back-Logo-Png-Image-58922-For-Designing-Projects.png"
                        onClick={this.handleBack}
                    />
                    <use transform="translate(285 217)" xlinkHref="#f" />
                    <use transform="translate(281 540)" xlinkHref="#f" />
                    <use transform="translate(285 441)" xlinkHref="#f" />
                    <rect
                        className="d"
                        width={132}
                        height={132}
                        rx={66}
                        transform="translate(285 324)"
                    />
                    <text className="e" transform="translate(988 299)">
                        <tspan x={-529.596} y={0}>
                            {"Are there any special events happening today?"}
                        </tspan>
                    </text>
                    <text className="e" transform="translate(935 406)">
                        <tspan x={-477.378} y={0}>
                            {"Where can I learn how a carriage is made?"}
                        </tspan>
                    </text>
                    <text className="e" transform="translate(751 524)" onClick={this.handleAnswer}>
                        <tspan x={-293.247} y={0}>
                            {"Where are the restrooms?"}
                        </tspan>
                    </text>
                    <text className="e" transform="translate(881 631)">
                        <tspan x={-423.073} y={0}>
                            {"How do I get a museum membership?"}
                        </tspan>
                    </text>
                    <rect
                        className="d"
                        width={132}
                        height={132}
                        rx={66}
                        transform="matrix(0.999, 0.035, -0.035, 0.999, 281.344, 661.737)"
                    />
                    <text className="e" transform="translate(881 749)">
                        <tspan x={-423.073} y={0}>
                            {"Where are the European carriages located?"}
                        </tspan>
                    </text>
                    <rect
                        className="d"
                        width={132}
                        height={132}
                        rx={66}
                        transform="matrix(0.999, 0.035, -0.035, 0.999, 281.344, 758.737)"
                    />
                    <text className="e" transform="translate(458 842)">
                        <tspan x={0} y={0}>
                            {"What activities do you offer to students"}
                        </tspan>
                        <tspan x={0} y={51}>
                            {"alongside the exhibits?"}
                        </tspan>
                    </text>
                </g>
            </svg>
        )
    }


}

export default GeneralQuestions;
