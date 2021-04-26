const {useState, useEffect } = React;
const {Link, useParams} = window.ReactRouterDOM;

const IngredientEditorInline = ({ingredient, deleteIngredient, updateIngredient}) => {
    const [ingredientCopy, setIngredientCopy] = useState(ingredient)
    const [editing, setEditing] = useState(false)
    const {userId, recipeId} = useParams()
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
                            className="form-control"
                            value={ingredientCopy.measurement}
                            onChange={(e)=>setIngredientCopy(ingredientCopy => ({...ingredientCopy, measurement: e.target.value}))}/>
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
                        <Link to={`/users/${userId}/recipes/${recipeId}/ingredients/${ingredientCopy.id}`}>
                            {ingredientCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/users/${userId}/recipes/${recipeId}/ingredients/${ingredientCopy.id}`}>
                            {ingredientCopy.measurement}
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