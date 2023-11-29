import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchBox.css';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [desc, setDesc] = useState('off');
  const submitHandler = (e) => {
    e.preventDefault();
    props.updateState(sortBy, name, desc);
    console.log('Name: ', name);
    console.log('Sort By: ', sortBy);
    console.log('Desc: ', desc);
  };
  return (
    <Form className="search" onSubmit={submitHandler}>
      <Form.Group as={Row}>
        <Col md={4}>
          <InputGroup>
            <InputGroup.Text>Brand Filter:</InputGroup.Text>
            <Form.Control
              type="text"
              name="q"
              id="q"
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Sort By</option>
            <option value="arrangement">Arrangement</option>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </Form.Select>
        </Col>
        <Col md={2} style={{ padding: 7 }}>
          <Form.Check
            type="switch"
            id="desc"
            name="desc"
            label="Descending"
            onChange={(e) => setDesc(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Button className="primary block" type="submit">
            Search
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
