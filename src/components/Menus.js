import React, {Component} from "react";
import HeaderMenu from "../template/HeaderMenu";
import { ApiMenus } from "../services/apirest";
import axios from 'axios';
import ImageDefault from '../assets/images/defaultimage.png';
import "../assets/css/Login.css";
import Main2 from './Main2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileLines} from '@fortawesome/free-solid-svg-icons';


//ESTA ES DE ADMIN

class Menus extends Component{

    state={
        menu:[]
    } ;


    clickMenus(id){
        this.props.history.push("/editarmenu/"+ id);
    }

    clickRecetas(id){
        this.props.history.push("/verreceta/"+ id);
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
                <HeaderMenu></HeaderMenu>
                <div className="container">
            <br></br>

                <table id="customers">
                <thead >
                        <tr>
                        <th scope="col">&nbsp;&nbsp;Imagen</th>
                 
                        <th scope="col">Nombre&nbsp;del&nbsp;menú</th>
                        <th scope="col">Categoría&nbsp;del&nbsp;menú</th>

                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Tiempo&nbsp;de&nbsp;preparación</th>

                        <th scope="col">Editar menú</th>
                        <th scope="col">Ver receta</th>

                        </tr>
                    </thead>
                    <tbody> 
                        {this.state.menu.map((value, index) => {
                           return (
                            <tr key={index}   >
                            
                            <td> <img  id="Imagefood" src={value.image ? value.image : ImageDefault}  style={{ width: "150px", height: "100px" }}   /> </td>
                     
                            <td>{value.name}</td>
                            <td>{value.category.name}</td>

                            <td><div style={{width:"80px", overflow: "hidden"}} >{value.description}</div></td>
                            <td>{'$'+value.price.amount}</td>
                            <td>{value.preparation_time+" "+"minutos"}</td>
                           
                       
                            <td><button className="btn btn-white" onClick={ () => this.clickMenus(value.id)  }>Editar</button></td>
                            <td><button id="abcd" className="btn btn-outline-success" onClick={ () => this.clickRecetas(value.id)   }>
                            <FontAwesomeIcon icon={faFileLines}/>&nbsp;Receta</button>  </td>  

                            </tr>
                            )
                        })}
                         
                 
                    </tbody>
                    </table>
                    <br/>
                    <div>
                        <a className="btn btn-success" href="/IngresarMenu" role="button" style={{marginRight:"10px", float:"right"}}>
                        Ingresar Menú
                            </a>   
                     </div>
                </div>

                    
            </React.Fragment>
          
        );
    }

}


export default Menus;