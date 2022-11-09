import HeaderCreceta from "../template/HeaderCreceta";
import React, {Component} from "react";
import { ApiMenus } from "../services/apirest";
import axios from 'axios';
import ImageDefault from '../assets/images/defaultimage.png';
import "../assets/css/Login.css";
import Main2 from './Main2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileLines,faPlusCircle} from '@fortawesome/free-solid-svg-icons';





class Recetas extends Component{

    state={
        menu:[]
    } ;




    clickRecetas(id){
        this.props.history.push("/ingresarreceta/"+ id);
        console.log(id);
    }

    
    componentDidMount(){
            let url = ApiMenus;
            axios.get(url)
            .then(response =>{
                this.setState({
                    menu : response.data.menu
                })
                
            })
    }

    render(){
        
        return(
               
            <React.Fragment>
                <Main2></Main2>
                <HeaderCreceta></HeaderCreceta>
                <div className="container">
            <br></br>

                <table id="customers">
                <thead >
                        <tr>
                        <th scope="col">&nbsp;&nbsp;Imagen</th>
                 
                        <th scope="col">Nombre&nbsp;del&nbsp;menú</th>
                        <th scope="col">Categoría&nbsp;del&nbsp;menú</th>

                        <th scope="col">Agregar receta</th>

                        </tr>
                    </thead>
                    <tbody> 
                        {this.state.menu.map((value, index) => {
                           return (
                            <tr key={index}   >
                            
                            <td> <img  id="Imagefood" src={value.image ? value.image : ImageDefault}  style={{ width: "250px", height: "120px" }}   /> </td>
                     
                            <td>{value.name}</td>
                            <td>{value.category.name}</td>
                       
                            <td><button id="abc" className="btn btn-primary" onClick={ () => this.clickRecetas(value.id)   }>
                        <FontAwesomeIcon icon={faFileLines}/> <FontAwesomeIcon icon={faPlusCircle}/>&nbsp;Receta</button>  </td>  

                            </tr>
                            )
                        })}
                 
                    </tbody>
                    </table>
                    <br/>
                    <div>


                     </div>
                </div>

                    
            </React.Fragment>
          
        );
    }

}


export default Recetas;