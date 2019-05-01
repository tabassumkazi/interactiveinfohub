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


class GalleryQuestions extends Component{

    constructor(props){
        super(props);

        this.handleGallery1 = this.handleGallery1.bind(this);
        this.handleGallery2 = this.handleGallery2.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            redirectBack: false,
            redirectGallery1: false,
            redirectGallery2: false
        }

    }

    componentDidMount(){

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
        return(
        <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        </svg>
        )
    }


}

export default GalleryQuestions;
