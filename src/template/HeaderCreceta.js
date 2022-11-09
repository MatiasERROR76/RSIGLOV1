import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'

class HeaderCRecetas extends Component{
    render(){
        return (

                                <nav className="navbar navbar-dark bg-dark">
                                                                        <a id="volver" style={{marginLeft: "30px"}} className="btn btn-secondary " href="/main">
                     <FontAwesomeIcon  icon={faArrowAltCircleLeft}  /> <strong>Inicio</strong></a>
                                    <a className="navbar-brand" href="/recetas" style={{marginRight: "550px"}} >Recetas</a>

                                </nav>
        );
    }
}

export default HeaderCRecetas;