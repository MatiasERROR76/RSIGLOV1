import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'

class HeaderRecetas extends Component{
    render(){
        return (

                                <nav className="navbar navbar-dark bg-dark">
                                                                        <a id="volver" style={{marginLeft: "30px"}} className="btn btn-secondary " href="/menus">
                     <FontAwesomeIcon  icon={faArrowAltCircleLeft}  /> <strong>Volver</strong></a>
                                    <a className="navbar-brand" style={{marginRight: "550px"}} >  Receta&nbsp;del&nbsp;menú</a>

                                </nav>
        );
    }
}

export default HeaderRecetas;