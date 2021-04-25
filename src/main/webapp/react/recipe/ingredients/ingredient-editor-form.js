import ingredientService from "./ingredient-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const IngredientEditorForm = () => {
    const [ingredient, setIngredient] = useState({})
    const {ingredientId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findIngredientById(ingredientId)
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
            <label>Seats</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={ingredient.seats}
                onChange={(e)=>setIngredient(ingredient => ({...ingredient, seats: parseInt(e.target.value)}))}/>
            <label>Semester</label>
            <select
                className="form-control margin-bottom-10px"
                value={ingredient.semester}
                onChange={(e)=>setIngredient(ingredient => ({...ingredient, semester: e.target.value}))}>
                <option>FALL</option>
                <option>SPRING</option>
                <option>SUMMER</option>
            </select>
            <label>Year</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={ingredient.year}
                onChange={(e)=>setIngredient(ingredient => ({...ingredient, year: parseInt(e.target.value)}))}/>
            <label className="margin-bottom-10px">
            <input
                type="checkbox"
                checked={ingredient.online}
                onChange={(e)=>setIngredient(ingredient => ({...ingredient, online: e.target.checked}))}/>
                &nbsp;Online
            </label>
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