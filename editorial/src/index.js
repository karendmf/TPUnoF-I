import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        libros: []
      };
    }


    getLibros() {
      fetch('http://localhost/TpUnoF-I/wsEditorial/libro/read.php')
        .then(res => res.json())
        .then(
          libros => {
            this.setState({
              libros
            });
            this.setState({
              isLoaded: true
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    componentDidMount() {
      this.getLibros();
    }
      render() {
        const { error, isLoaded} = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Descripción</th>
                  <th>Autor</th>
                  <th>ISBN</th>
                  <th>Publicación</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              {this.state.libros.map(libro=> (
                <tr key={libro.isbn}>
                  <td>{libro.nombre}</td>
                  <td>{libro.descripcion}</td>
                  <td>{libro.autor}</td>
                  <td>{libro.isbn}</td>
                  <td>{libro.fecha}</td>
                </tr>
              ))}
              </tbody>
            </table>
            </div>
          );
        }
      }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);