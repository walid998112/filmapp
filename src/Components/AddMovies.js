import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import "../App.css"



const AddMovies=({movies,SetMovies})=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [posterURL,setPosterURL]=useState("")
  const [rating,setRating]=useState(0)
  const handleAdd=()=>{
    SetMovies([...movies,{title,description,posterURL,rating,id:Math.random()}])
  };
    return(
        <div>
 <>
      <button className='add' variant="warning" onClick={handleShow}>
        Add Movie
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
      <Form.Group   className="mb-3">
        <Form.Label >Title</Form.Label>
        <Form.Control  required onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter The Movie Title" />
      </Form.Group>

      <Form.Group  required className="mb-3">
        <Form.Label >Description</Form.Label>
        <Form.Control required onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Movie description" />
      </Form.Group>
      <Form.Group  required className="mb-3">
        <Form.Label  required>posterURL</Form.Label>
        <Form.Control  required onChange={(e)=>setPosterURL(e.target.value)} type="text" placeholder="PosterURL" />
      </Form.Group>
      <Form.Group  required className="mb-3">
      <Form.Label  >Rating</Form.Label> <br/>
      <Rating
       onChange={(e)=>setRating(e.target.value)}
      
      />
      </Form.Group>
    </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={()=>{handleAdd();handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}
export default AddMovies