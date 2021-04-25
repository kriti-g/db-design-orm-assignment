const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const IngredientEditorInline = ({ingredient, deleteIngredient, updateIngredient}) => {
    const [ingredientCopy, setIngredientCopy] = useState(ingredient)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={ingredientCopy.name}
                            onChange={(e)=>setIngredientCopy(ingredientCopy => ({...ingredientCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={ingredientCopy.seats}
                            onChange={(e)=>setIngredientCopy(ingredientCopy => ({...ingredientCopy, seats: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={ingredientCopy.semester}
                            onChange={(e)=>setIngredientCopy(ingredientCopy => ({...ingredientCopy, semester: e.target.value}))}>
                            <option>FALL</option>
                            <option>SPRING</option>
                            <option>SUMMER</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={ingredientCopy.year}
                            onChange={(e)=>setIngredientCopy(ingredientCopy => ({...ingredientCopy, year: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <label>
                        <input
                            type="checkbox"
                            checked={ingredientCopy.online}
                            onChange={(e)=>setIngredientCopy(ingredientCopy => ({...ingredientCopy, online: e.target.checked}))}/>
                            &nbsp;
                            Online
                        </label>
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            value={ingredientCopy.startDate}
                            onChange={(e)=>setIngredientCopy(ingredientCopy => ({...ingredientCopy, startDate: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateIngredient(ingredientCopy.id, ingredientCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteIngredient(ingredient.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/ingredients/${ingredientCopy.id}`}>
                            {ingredientCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/ingredients/${ingredientCopy.id}`}>
                            {ingredientCopy.seats}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/ingredients/${ingredientCopy.id}`}>
                            {ingredientCopy.semester}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/ingredients/${ingredientCopy.id}`}>
                            {ingredientCopy.year}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/ingredients/${ingredientCopy.id}`}>
                            {ingredientCopy.online && 'Online'}
                            {!ingredientCopy.online && 'On Campus'}
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default IngredientEditorInline;