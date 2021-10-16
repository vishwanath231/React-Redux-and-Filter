import React,{useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUsers } from '../Redux/Actions/UserActions';
import UserComponent from './UserComponent';
import './style.css'

const UserList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        const fetchUser = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            .catch((err) => {
                console.log(err);
            })
            dispatch(setUsers(response.data))
        }

        return fetchUser();
         
    }, [dispatch])


    return (
        <div className="container">
            <div className="title">React Redux</div>
            <div className="sub-title">User Lists</div>
            <UserComponent />
        </div>
    )
}

export default UserList;
