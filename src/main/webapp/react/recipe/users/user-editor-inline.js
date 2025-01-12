const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const UserEditorInline = ({user, deleteUser, updateUser}) => {
    const [userCopy, setUserCopy] = useState(user)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={userCopy.firstName}
                            onChange={(e)=>setUserCopy(userCopy => ({...userCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={userCopy.lastName}
                            onChange={(e)=>setUserCopy(userCopy => ({...userCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={userCopy.username}
                            onChange={(e)=>setUserCopy(userCopy => ({...userCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="password"
                            className="form-control"
                            value={userCopy.password}
                            onChange={(e)=>setUserCopy(userCopy => ({...userCopy, password: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={userCopy.email}
                            onChange={(e)=>setUserCopy(userCopy => ({...userCopy, email: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            value={userCopy.birthDate}
                            onChange={(e)=>setUserCopy(userCopy => ({...userCopy, birthDate: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/users/${userCopy.id}/recipes`}>
                            Recipes
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateUser(userCopy.id, userCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteUser(user.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.username}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.password}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.email}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userCopy.id}`}>
                            {userCopy.birthDate}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/users/${userCopy.id}/recipes`}>
                            Recipes
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserEditorInline;