import ingredientService from "./ingredient-service"

const {useState, useEffect} = React
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const IngredientEditorForm = () => {
    const [ingredient, setIngredient] = useState({})
    const {userId, recipeId, id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findIngredientById(id)
    }, []);
    const findIngredientById = (id) =>
        ingredientService.findIngredientById(id)
            .then(ingredient => setIngredient(ingredient))
    const updateIngredient = (id, newIngredient) =>
        ingredientService.updateIngredient(id, newIngredient)
            .then(() => history.goBack())
    const deleteIngredient = (id) =>
        ingredientService.deleteIngredient(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Ingredient Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={ingredient.id}/>
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setIngredient(ingredient => ({...ingredient, name: e.target.value}))}
                value={ingredient.name}/>
            <label>Measurement</label>
            <input
                className="form-control margin-bottom-10px"
                value={ingredient.measurement}
                onChange={(e)=>setIngredient(ingredient => ({...ingredient, measurement: e.target.value}))}/>
            <div>
                <Link to={`/users/${userId}/recipes/${recipeId}`}>
                    Recipe
                </Link>
            </div>
            <div>
                <Link to={`/users/${userId}/recipes/${recipeId}/ingredients`}>
                    Recipe Ingredients
                </Link>
            </div>
            <br/>
            <button
                onClick={() => updateIngredient(ingredient.id, ingredient)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteIngredient(ingredient.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default IngredientEditorForm