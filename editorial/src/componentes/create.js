import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactDOM from 'react-dom';

export default class Create extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost/TpUnoF-I/wsEditorial/libro/create.php', {
          method: 'POST',
          body: data,
        });
      }


    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit} method="POST">
                    <FormGroup>
                        <Label for="nombre">Titulo</Label>
                        <Input name="nombre" id="nombre" placeholder="Titulo" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="descripcion">Descripción</Label>
                        <Input type="textarea" name="descripcion" id="descripcion" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nombre">Autor</Label>
                        <Input name="autor" id="autor" placeholder="Autor" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="isbn">ISBN</Label>
                        <Input type="number" name="isbn" id="isbn" placeholder="ISBN" required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="fecha">Fecha</Label>
                        <Input type="date" name="fecha" id="fecha" placeholder="fecha de publicación" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
        
    }
}