import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, loadUsers } from '../redux/actions';
import {useHistory} from 'react-router-dom';

const Home = () => {

    let dispatch = useDispatch();
    let history = useHistory();

    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you want to delete it!")) {
            dispatch(deleteUser(id));
        }
    };

    return (
        <div className="container"> 
        <br/>
        <br/>
        <br/>
        <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            {/* <div className="mx-1"> */}
                            <button type="button" onClick={() => handleDelete(user.id)} className="btn btn-outline-primary mt-1 mx-1">Delete</button>
                            <button type="button" onClick={() => history.push(`/updateUser/${user.id}`)} className="btn btn-outline-secondary mt-1 mx-1">Edit</button>
                            {/* </div> */}
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
