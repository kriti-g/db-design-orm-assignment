import userService from "./user-service"

const {useState, useEffect} = React
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const USER_URL = "http://localhost:8080/api/users";

const UserEditorForm = () => {
    const [user, setUser] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findUserById(id)
    }, []);
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user))
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack())
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.goBack())
    return (
        <div>
            <h2>
                User Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={user.id}/>
            <label>First name</label>
            <input
                className="form-control"
                value={user.firstName}
                onChange={(e)=>setUser(user => ({...user, firstName: e.target.value}))}/>
            <label>Last name</label>
            <input
                className="form-control"
                value={user.lastName}
                onChange={(e)=>setUser(user => ({...user, lastName: e.target.value}))}/>
            <label>Username</label>
            <input
                className="form-control"
                value={user.username}
                onChange={(e)=>setUser(user => ({...user, username: e.target.value}))}/>
            <label>Password</label>
            <input
                type="password"
                className="form-control"
                value={user.password}
                onChange={(e)=>setUser(user => ({...user, password: e.target.value}))}/>
            <label>Email</label>
            <input
                className="form-control"
                value={user.email}
                onChange={(e)=>setUser(user => ({...user, email: e.target.value}))}/>
            <label>Birth Date</label>
            <input
                className="form-control"
                value={user.birthDate}
                onChange={(e)=>setUser(user => ({...user, birthDate: e.target.value}))}/>
            <div className="col-1">
                <Link to={`/users`}>
                    All Users
                </Link>
            </div>
            <div className="col-1">
                <Link to={`/users/${id}/recipes`}>
                    Recipes
                </Link>
            </div>
            <button
                onClick={() => updateUser(user.id, user)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default UserEditorForm