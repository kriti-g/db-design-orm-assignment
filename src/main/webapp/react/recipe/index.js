import RecipeList from "./recipes/recipe-list";
import IngredientList from "./ingredients/ingredient-list";
import RecipeEditorForm from "./recipes/recipe-editor-form";
import IngredientEditorForm from "./ingredients/ingredient-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/recipes", "/"]} exact={true}>
                    <RecipeList/>
                </Route>
                <Route path="/recipes/:id" exact={true}>
                    <RecipeEditorForm/>
                </Route>
                <Route path="/recipes/:recipeId/ingredients" exact={true}>
                    <IngredientList/>
                </Route>
                <Route path="/ingredients/:ingredientId" exact={true}>
                    <IngredientEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
