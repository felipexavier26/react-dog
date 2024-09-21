import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/Index";
import "./DogStyles.css"; 
import { Link } from "react-router-dom";



const BackEnd = axios.create({
  baseURL: config.baseURL
});

const Dog = () => {
  const httpDogCodes = [
    100, 101, 102, 
    200, 201, 202, 203, 204, 206, 207, 208, 226, 
    300, 301, 302, 303, 304, 305, 307, 308, 
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511 
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const dogImages = httpDogCodes.map(code => ({
      code,
      url: `${config.baseURL}${code}.jpg`
    }));
    console.log(dogImages);
    

    setImages(dogImages);
  }, []);

  return (
    <div className="dog-container">
      <ul className="dog-grid">
        
        {images.map((image) => (
          <li key={image.code} className="dog-item">
            <Link to={`/dog/${image.code}`}>
            <img src={image.url} alt={`HTTP ${image.code}`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dog;
