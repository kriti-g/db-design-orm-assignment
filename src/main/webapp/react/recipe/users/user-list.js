import UserEditorInline from "./user-editor-inline";
import userService from "./user-service"

const USER_URL = "http://localhost:8080/api/users"
const { useState, useEffect } = React;

const UserList = () => {
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({})
    useEffect(() => {
        findAllUsers()
    }, [])
    const createUser = (user) =>
        userService.createUser(user)
            .then(user => {
                setNewUser({lastName:'', firstName: '', email: '', password: '', username: '', birthDate: '' })
                setUsers(users => ([...users, user]))
            })
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(user => setUsers(users => (users.map(user => user.id === id ? newUser : user))))
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(users => setUsers(users => users.filter(user => user.id !== id)))
    return(
        <div>
            <h2>Users</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                        <input
                            className="form-control"
                            value={newUser.firstName}
                            onChange={(e)=>setNewUser(newUser => ({...newUser, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newUser.lastName}
                            onChange={(e)=>setNewUser(newUser => ({...newUser, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newUser.username}
                            onChange={(e)=>setNewUser(newUser => ({...newUser, username: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="password"
                            className="form-control"
                            value={newUser.password}
                            onChange={(e)=>setNewUser(newUser => ({...newUser, password: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newUser.email}
                            onChange={(e)=>setNewUser(newUser => ({...newUser, email: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={newUser.birthDate}
                            onChange={(e)=>setNewUser(newUser => ({...newUser, birthDate: e.target.value}))}/>
                    </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createUser(newUser)}></i>
                        </div>
                    </div>
                </li>
            {
                users.map(user =>
                    <li key={user.id} className="list-group-item">
                        <UserEditorInline key={user._id}
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                            user={user}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default UserList;