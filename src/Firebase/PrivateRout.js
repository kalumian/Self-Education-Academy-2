// Import Libraries and Tools From Node Modules
import {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const PrivateRout = ({component : RouteComponent, user, loding, ...rest}) =>{
     return (
    <>
   {!loding ? <Route
      {...rest}
      render={(routeProps) => 
        !user ?  <Redirect to="/login" /> : <RouteComponent {...routeProps}/>
      }
    /> : <>
    <Loader/>
    </> }
    </>
  );
}


const mapStateToProps = (state) => {
    return{
        user : state.user,
        loding : state.loding
    }
}
export default connect(mapStateToProps)(PrivateRout)