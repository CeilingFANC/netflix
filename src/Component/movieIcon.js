import React from 'react';


function MovieIcon(props){
    const {title,img} = props.movie;
    
    return <div className="contain">
        <h4 className="icon-title">{title}</h4>
        <img src={img} alt={title}></img>
        <div className="overlay">
            <div className="text" ><span onClick={props.clickHandler}>{props.textButton}</span></div>
        </div>
    </div>;
}

export default MovieIcon;