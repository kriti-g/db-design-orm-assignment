import IngredientEditorInline from "./ingredient-editor-inline";
import ingredientService, {createIngredientForRecipe} from "./ingredient-service"

//const INGREDIENT_URL = "http://localhost:8080/api/ingredients"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const IngredientList = () => {
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({})
    const {recipeId} = useParams()
    useEffect(() => {
        findIngredientsForRecipe(recipeId)
    }, [])
    const createIngredientForRecipe = (ingredient) =>
        ingredientService.createIngredientForRecipe(recipeId, ingredient)
            .then(ingredient => {
                setNewIngredient({name:''})
                setIngredients(ingredients => ([...ingredients, ingredient]))
            })
    const updateIngredient = (id, newIngredient) =>
        ingredientService.updateIngredient(id, newIngredient)
            .then(ingredient => setIngredients(ingredients => (ingredients.map(ingredient => ingredient.id === id ? newIngredient : ingredient))))
    const findIngredientsForRecipe = (recipeId) =>
        ingredientService.findIngredientsForRecipe(recipeId)
            .then(ingredients => setIngredients(ingredients))
    const deleteIngredient = (id) =>
        ingredientService.deleteIngredient(id)
            .then(ingredients => setIngredients(ingredients => ingredients.filter(ingredient => ingredient.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Ingredients
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Ingredient Name"
                                   name="Please enter a name for the ingredient"
                                   className="form-control"
                                   value={newIngredient.name}
                                   onChange={(e) => setNewIngredient(newIngredient => ({...newIngredient, name: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input
                                className="form-control"
                                value={newIngredient.measurement}
                                onChange={(e)=>setNewIngredient(newIngredient => ({...newIngredient, measurement: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createIngredientForRecipe(newIngredient)}></i>
                        </div>
                    </div>
                </li>
            {
                ingredients.map(ingredient =>
                    <li key={ingredient.id} className="list-group-item">
                        <IngredientEditorInline key={ingredient._id}
                                             updateIngredient={updateIngredient}
                                             deleteIngredient={deleteIngredient}
                                             ingredient={ingredient}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default IngredientList;