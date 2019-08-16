import React from 'react';


function MovieIcon(props){
    
    const {id,initShow,clickHandler,textButton} = props;
    const {title,img} = props.movie;
    console.log("icon render");
    return <div id={id} className={initShow?"contain":"contain disappear"}>
        <h4 className="icon-title">{title}</h4>
        <img src={img} alt={title}></img>
        <div className="overlay">
            <div className="text" ><span onClick={clickHandler}>{textButton}</span></div>
        </div>
    </div>;
}

export default MovieIcon;