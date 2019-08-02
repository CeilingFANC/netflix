import React from 'react';


function MovieIcon(props){
    const {title,img} = props.movie;
    
    return <div className="contain">
        <img src={img} alt={title}></img>
        <div className="overlay">
            <div className="text" onClick={props.clickHandler}>{props.textButton}</div>
        </div>
    </div>;
}

export default MovieIcon;