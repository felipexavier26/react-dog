import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DogDetails.css"; 

const DogDetails = () => {
    const { code } = useParams();

    return (
        <div className="dog-details-container">
            <h2 className="title"><u>HTTP Status Dogs</u></h2>
            <div className="details-container">
                <img src={`https://http.dog/${code}.jpg`} alt={`HTTP ${code}`} />
                <h1>Detalhes do Código HTTP: <br /> {code}</h1>
            </div>
            <Link to="/" className="back-link">Voltar para a Lista de Códigos</Link>
        </div>
    );
};

export default DogDetails;
