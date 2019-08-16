import React from 'react';
import MoviewIcon from './movieIcon';

function List(props){
    
    const {title,list,show,clickHandler,textButton,loading} = props;
    const id = textButton==="remove"?"myList-":"recommendation-";
    console.log("list render")
    return <div>
        <div>
            <h2>{title}</h2>
        </div>
        <div className="flex-container">

            {loading?<h4>Loading...</h4>:
            list.map((value,index)=>{

                const showBoolean = show[index];
                const newId = id+value.id;
                return <MoviewIcon 
                    id={id+value.id}
                    initShow = {showBoolean}
                    key={index} 
                    movie={value} 
                    clickHandler={clickHandler(value)}
                    textButton={textButton}
                />
            })
            }
        </div>
    </div>;
}

export default List;

