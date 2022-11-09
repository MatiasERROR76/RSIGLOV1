import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot, faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import { ApiDePedidos } from '../services/apirest'
import axios from 'axios'
import io from 'socket.io-client'
import HeaderPedidos from '../template/HeaderPedidos'
import Main5 from './Main5';





const socket = io('https://siglo-xxi-orders.azurewebsites.net')



function Pedidos() {
  const [pedidos, setPedidos] = useState({
    order_details: []
  })

  useEffect(() => {
    let url = ApiDePedidos
    axios.get(url).then((response) => {
      setPedidos({
        order_details: response.data.order_details
      })
    })

    const listener = (data) => {
      const orders = pedidos.order_details
      orders.push(data)
      setPedidos({
        order_details: orders
      })
    }
    socket.on('orderDetails', listener)
    return () => socket.off('orderDetails', listener)
  }, ['orderDetails'])

  function tomarPedido(id) {
    let url =
      'https://siglo-xxi-orders.azurewebsites.net/Orders/v1/details/' + id + '/take-order'
    axios
      .put(url)
      .then((response) => {
        const orders = pedidos.order_details
        for (const order of orders) {
          if (order.id === id) {
            order.status.name = 'EN PREPARACIÓN'
          }
        }
        setPedidos({ order_details: orders })
      })
      .catch((error) => console.log(error.response.data))
  }

  function entregarPedido(id) {
    let url =
      'https://siglo-xxi-orders.azurewebsites.net/Orders/v1/details/' + id + '/deliver'
    axios
      .put(url)
      .then((response) => {
        const newOrder_details = pedidos.order_details.filter(
          (order_details) => order_details.id !== id
        )
        setPedidos({ order_details: newOrder_details })
      })
      .catch((error) => console.log(error.response.data))
  }

  return (
    <React.Fragment>
      <Main5></Main5>
      <HeaderPedidos></HeaderPedidos>
      <div className='container'>
        <br></br>

        <table id='customers' className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Nombre de menú</th>
              <th scope='col'>Cantidad</th>
              <th scope='col'>Estado</th>
              <th scope='col'>Número de orden</th>
              <th scope='col'>Número de mesa</th>
              <th scope='col'>Tomar</th>
              <th scope='col'>Entregar</th>
            </tr>
          </thead>

          <tbody>
            {pedidos.order_details.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.menu.name}</td>
                  <td>{value.quantity}</td>
                  <td>{value.status.name}</td>
                  <td>{value.id}</td>
                  <td>{value.table.number}</td>
                  <td>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      onClick={() => tomarPedido(value.id)}>
                      <FontAwesomeIcon icon={faBellConcierge} />
                      &nbsp;Tomar Pedido
                    </button>
                  </td>
                  <td>
                    <button
                      type='submit'
                      className='btn btn-success'
                      onClick={() => entregarPedido(value.id)}>
                      <FontAwesomeIcon icon={faCheckToSlot} />
                      Entregar
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default Pedidos
