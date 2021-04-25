import recipeService from "./recipe-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const RECIPE_URL = "http://localhost:8080/api/recipes";

const RecipeEditorForm = () => {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findRecipeById(id)
    }, []);
    const findRecipeById = (id) =>
        recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
    const updateRecipe = (id, newRecipe) =>
        recipeService.updateRecipe(id, newRecipe)
            .then(() => history.goBack())
    const deleteRecipe = (id) =>
        recipeService.deleteRecipe(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Recipe Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={recipe.id}/>
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setRecipe(recipe => ({...recipe, name: e.target.value}))}
                value={recipe.name}/>
            <label>Description</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setRecipe(recipe => ({...recipe, description: e.target.value}))}
                value={recipe.description}/>
            <label>Cuisine</label>
            <select
                className="form-control margin-bottom-10px"
                value={recipe.cuisine}
                onChange={(e) => setRecipe(recipe => ({...recipe, cuisine: e.target.value}))}>
                <option>GREEK</option>
                <option>TAIWANESE</option>
                <option>JAPANESE</option>
                <option>BRAZILIAN</option>
                <option>INDIAN</option>
            </select>
            <label>Prep Time</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                onChange={(e) => setRecipe(recipe => ({...recipe, prepTime: e.target.value}))}
                value={recipe.prepTime}/>
            <label>Cook Time</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                onChange={(e) => setRecipe(recipe => ({...recipe, cookTime: e.target.value}))}
                value={recipe.cookTime}/>
            <button
                onClick={() => updateRecipe(recipe.id, recipe)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteRecipe(recipe.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default RecipeEditorForm