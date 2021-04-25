import RecipeEditorInline from "./recipe-editor-inline";
import recipeService, { createRecipeForUser, findRecipesForUser } from "./recipe-service"

const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    const [newRecipe, setNewRecipe] = useState({})
    const {userId} = useParams()
    useEffect(() => {
        findRecipesForUser(userId)
    }, [])
    const createRecipeForUser = (recipe) =>
        recipeService.createRecipeForUser(userId, recipe)
            .then(recipe => {
                setNewRecipe({name:'', description:'', cuisine: 'GREEK', prepTime: 0, cookTime: 0})
                setRecipes(recipes => ([...recipes, recipe]))
            })
    const updateRecipe = (id, newRecipe) =>
        recipeService.updateRecipe(id, newRecipe)
            .then(recipe => setRecipes(recipes => (recipes.map(recipe => recipe.id === id ? newRecipe : recipe))))
    const findRecipesForUser = () =>
        recipeService.findRecipesForUser(userId)
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
                                   title="Please enter a name for the recipe" className="form-control" value={newRecipe.name}
                                   onChange={(e) => setNewRecipe(newRecipe => ({...newRecipe, name: e.target.value}))}/>
                        </div>
                        <div className="col">

                            <input
                                placeholder="Description"
                                className="form-control"
                                value={newRecipe.description}
                                onChange={(e)=>setNewRecipe(newRecipe => ({...newRecipe, description: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <select
                                className="form-control"
                                value={newRecipe.cuisine}
                                onChange={(e) => setNewRecipe(newRecipe => ({...newRecipe, cuisine: e.target.value}))}>
                                <option>GREEK</option>
                                <option>TAIWANESE</option>
                                <option>JAPANESE</option>
                                <option>BRAZILIAN</option>
                                <option>INDIAN</option>
                            </select>
                        </div>
                        <div className="col">
                            <input
                                placeholder="0"
                                type="number"
                                className="form-control"
                                value={newRecipe.prepTime}
                                onChange={(e)=>setNewRecipe(newRecipe => ({...newRecipe, prepTime: e.target.value}))}/>
                        </div>
                        <div className="col">
                            <input
                                placeholder="0"
                                type="number"
                                className="form-control"
                                value={newRecipe.cookTime}
                                onChange={(e)=>setNewRecipe(newRecipe => ({...newRecipe, cookTime: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => { console.log(newRecipe); createRecipeForUser(newRecipe); }}></i>
                        </div>
                    </div>
                </li>
            {
                recipes.map(recipe =>
                    <li key={recipe.id} className="list-group-item">
                        <RecipeEditorInline key={recipe.id}
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