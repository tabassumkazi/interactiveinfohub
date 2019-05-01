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

class GeneralAnswer extends Component{

    constructor(props){
        super(props);

        this.handleBack = this.handleBack.bind(this);
        this.state = {
            redirectBack: false,
        }

    }

    componentDidMount(){

    }


    handleBack(){
        this.setState({redirectBack: true})

    }



    render() {
         if(this.state.redirectBack){
            return (<Redirect to={'/generalQuestions'}/>)
        }
        return(
            <svg width={1920} height={1080} viewBox="0 0 1920 1080">

            </svg>
        )
    }


}

export default GeneralAnswer;
