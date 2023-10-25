import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailFilm = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/films/getFilmesById/${id}`)
            .then(resp => {
                setMovie(resp.data[0]);
                console.log('les id:', resp.data);
            })
            .catch(er => {
                alert(er.message);
            });
    }, [id]);

    return (
        <div>
            <td>
            </td>
            <h4>Titre : {movie}</h4>
            <h4>Description : {movie.description}</h4>
            <h4>Acteurs : {movie.acteurs_principaux}</h4>
            <h4>Realisateur : {movie.realisateur}</h4>
            <h4>Date Sortie : {movie.date_de_sortie}</h4>
        </div>
    );
}

export default DetailFilm;