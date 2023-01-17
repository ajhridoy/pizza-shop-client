import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const PizzaCard = ({pizza}) => {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div style={{margin: '60px'}} className="shadow-lg p-3 mb-5 bg-body rounded">
            <h1>{pizza.name}</h1>
            <div onClick={handleShow}>
            <img src={pizza.img} alt="" className='img-fluid rounded my-2' style={{height: '200px', width: '200px', cursor: 'pointer'}} />
            </div>
            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e) => {setVarient(e.target.value)}}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price: $ {pizza.prices[0][varient]*quantity}</h1>
                </div>
                <div className='m-1 w-100'>
                   <button className='btn'>Add To Cart</button>
                </div>
            </div>
            <div className="modal show"
      style={{ display: 'block', position: 'initial' }}>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={pizza.img} alt="" className='img-fluid mb-3' style={{height: '400px'}}/>
          <p>Description: {pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
            </div>
        </div>
    );
};

export default PizzaCard;