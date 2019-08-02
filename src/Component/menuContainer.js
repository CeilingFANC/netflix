import React from 'react';

import List from './list';
import {connect} from 'react-redux';
import  * as actions from '../redux/actions/actions';

class MenuContainer extends React.Component{

    componentDidMount(){
        this.props.getData();
    }
    removeButton = movie => () =>{
        this.props.remove('myList',movie);
        this.props.add('recommendation',movie);
    }
    addButton = movie => () =>{
        this.props.remove('recommendation',movie);
        this.props.add('myList',movie);
    }

    render(){

        const {loading,myList,recommendation} = this.props.menuList;
        return <div className="container">
            {!loading?<List title={'My List'} list={myList} clickHandler={this.removeButton} textButton={'remove'}/>:<h3>...</h3>}
            {!loading?<List title={'Recommendation'} list={recommendation} clickHandler={this.addButton} textButton={'add'}/>:<h3>...</h3>}

        </div>

    }


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
