import React, {Component} from "react";
import HeaderRecetas from "../template/HeaderRecetas";
import { ApiMenus } from "../services/apirest";
import axios from 'axios';
import "../assets/css/Login.css";
import Main2 from './Main2';

class VerReceta extends Component{

  state={
    menu:[]
  } ;



  
  componentDidMount(){
    let idMenu = this.props.match.params.id;  
    let url = ApiMenus + idMenu
       
          axios.get(url)
          .then(response =>{
              this.setState({
                menu : response.data.menu.recipe
              })
              
          })
    
  }

  render(){
      
      return(
             
          <React.Fragment>
              <Main2></Main2>
              <HeaderRecetas></HeaderRecetas>
              <div className="container">
          <br></br>

              <table id="customers">
              <thead >
                      <tr>
 
                      <th scope="col">Nombre&nbsp;del&nbsp;producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Medida</th>


                      </tr>
                  </thead>
                  <tbody> 
                      {this.state.menu.map((value, index) => {
                         return (
                          <tr key={index}   >
                          
                   
                          <td>{value.product.name}</td>
                          <td>{value.quantity.value}</td>
                          <td>{value.quantity.measure.name}</td>


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


export default VerReceta;