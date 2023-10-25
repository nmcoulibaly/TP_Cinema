import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Films() {
    const [films, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/films/getFilms').then(resp => {
            setMovies(resp.data);
            console.log(resp.data);
        }).catch(er => {
            alert(er.message);
        });
    }, []);
    return (<>
        <div className="home">
            <div className="featured-movies">
                <h1>Liste de Films</h1>
                <Row>
                    {films.map((movie, index) => (
                        <Col key={index} md={4}>
                            <div className="text-center"><br />
                                <h4>{movie.title}</h4>
                                <img className="fit-picture" src="/assets/images/film.jpg" style={{ width: '10rem' }} alt={movie.title} /><br /><br />
                                <Link to={`/detail/${movie._id}`} className="btn btn-primary">
                                    Détails
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
        <footer>
            <p>Contactez-nous : contact@appfilms.com</p>
        </footer>
    </>)
}
export default Films;