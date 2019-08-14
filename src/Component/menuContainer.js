import React,{useEffect} from 'react';

import List from './list';
import {connect} from 'react-redux';
import  * as actions from '../redux/actions/actions';

function MenuContainer(props){
    useEffect(()=>props.getData(),[]);
    let removeButton = movie => (e) =>{
        e.stopPropagation();
        props.remove('myList',movie);
        props.add('recommendation',movie);
    }
    let addButton = movie => (e) =>{
        e.stopPropagation();
        props.remove('recommendation',movie);
        props.add('myList',movie);
    }

    const {loading,myList,recommendation} = props.menuList;
    return <div className="container">
        <List title={'My List'} list={myList} clickHandler={removeButton} textButton={'remove'} loading={loading}/>
        <List title={'Recommendation'} list={recommendation} clickHandler={addButton} textButton={'add'} loading={loading}/>

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
