import RecipeList from "./recipes/recipe-list";
import IngredientList from "./ingredients/ingredient-list";
import UserList from "./users/user-list";
import UserEditorForm from "./users/user-editor-form";
import RecipeEditorForm from "./recipes/recipe-editor-form";
import IngredientEditorForm from "./ingredients/ingredient-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserEditorForm/>
                </Route>
                <Route path="/users/:userId/recipes" exact={true}>
                    <RecipeList/>
                </Route>
                <Route path="/recipes/:recipeId" exact={true}>
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
