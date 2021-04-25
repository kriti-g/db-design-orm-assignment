import RecipeEditorInline from "./recipe-editor-inline";
import recipeService from "./recipe-service"

const RECIPE_URL = "http://localhost:8080/api/recipes"
const { useState, useEffect } = React;

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    const [newRecipe, setNewRecipe] = useState({})
    useEffect(() => {
        findAllRecipes()
    }, [])
    const createRecipe = (recipe) =>
        recipeService.createRecipe(recipe)
            .then(recipe => {
                setNewRecipe({title:''})
                setRecipes(recipes => ([...recipes, recipe]))
            })
    const updateRecipe = (id, newRecipe) =>
        recipeService.updateRecipe(id, newRecipe)
            .then(recipe => setRecipes(recipes => (recipes.map(recipe => recipe.id === id ? newRecipe : recipe))))
    const findAllRecipes = () =>
        recipeService.findAllRecipes()
            .then(recipes => setRecipes(recipes))
    const deleteRecipe = (id) =>
        recipeService.deleteRecipe(id)
            .then(recipes => setRecipes(recipes => recipes.filter(recipe => recipe.id !== id)))
    return(
        <div>
            <h2>Recipes</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Recipe Title"
                                   title="Please enter a title for the recipe" className="form-control" value={newRecipe.name}
                                   onChange={(e) => setNewRecipe(newRecipe => ({...newRecipe, name: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createRecipe(newRecipe)}></i>
                        </div>
                    </div>
                </li>
            {
                recipes.map(recipe =>
                    <li key={recipe.id} className="list-group-item">
                        <RecipeEditorInline key={recipe._id}
                            updateRecipe={updateRecipe}
                            deleteRecipe={deleteRecipe}
                            recipe={recipe}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default RecipeList;