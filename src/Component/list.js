import React from 'react';

import MoviewIcon from './movieIcon';
function List(props){
    
    const {title,list,clickHandler,textButton} = props;
    return <div>
        <div>
            <h2>{title}</h2>
        </div>
        <div className="flex-container">
            {list.map((value,index)=>
                <MoviewIcon 
                    key={index} 
                    movie={value} 
                    clickHandler={clickHandler(value)}
                    textButton={textButton}
                />)
            }
        </div>
    </div>;
}

export default List;

