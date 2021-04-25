const RECIPE_URL = "http://localhost:8080/api/recipes"

export const createRecipe = (recipe) =>
    fetch(RECIPE_URL, {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllRecipes = () =>
    fetch(RECIPE_URL)
        .then(response => response.json())

export const findRecipeById = (id) =>
    fetch(`${RECIPE_URL}/${id}`)
        .then(response => response.json())

export const updateRecipe = (id, recipe) =>
    fetch(`${RECIPE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(recipe),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteRecipe = (id) =>
    fetch(`${RECIPE_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createRecipe: createRecipe,
    findAllRecipes: findAllRecipes,
    findRecipeById: findRecipeById,
    updateRecipe: updateRecipe,
    deleteRecipe: deleteRecipe
}