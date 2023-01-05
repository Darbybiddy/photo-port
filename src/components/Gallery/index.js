import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
    const currentCategory ={
        name: 'commercial',
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    }

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img src ={photo} className="img-thumbnai mx-1" alt="commercial example"></img>
      </div>
    </section>
  );
}

export default Gallery;
