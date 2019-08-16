import React,{useEffect} from 'react';

import List from './list';
import {connect} from 'react-redux';
import  * as actions from '../redux/actions/actions';

function MenuContainer(props){
    useEffect(()=>props.getData(),[]);

    let removeButton = movie => (e) =>{
        e.stopPropagation();
        let thisElement = document.getElementById("myList-"+movie.id);
        thisElement.classList.toggle("disappear");
        let thatElement = document.getElementById("recommendation-"+movie.id);
        thatElement.classList.toggle("disappear");  
    }
    let addButton = movie => (e) =>{
        e.stopPropagation();
        let thisElement = document.getElementById("recommendation-"+movie.id);
        thisElement.classList.toggle("disappear");
        let thatElement = document.getElementById("myList-"+movie.id);
        thatElement.classList.toggle("disappear");  
    }



    const {loading,myList,recommendation} = props.menuList;
    const list = [...myList,...recommendation];
    const showMyList = list.map((val,index)=>index<myList.length?true:false);
    const showRecommendation = list.map((val,index)=>index<myList.length?false:true);
    console.log("container render")
    return <div className="container">
        <List title={'My List'} list={list} show={showMyList} clickHandler={removeButton} textButton={'remove'} loading={loading}/>
        <List title={'Recommendation'} list={list} show={showRecommendation} clickHandler={addButton} textButton={'add'} loading={loading}/>

    </div>

    


}
const mapStateToProps = state => {
    return {
      menuList: state,
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        getData: ()=>{
        dispatch(actions.getData())
        },
        remove: (select,movie)=>{
            dispatch(actions.remove(select,movie))
        },
        add: (select,movie)=>{
            dispatch(actions.add(select,movie))
        },
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
