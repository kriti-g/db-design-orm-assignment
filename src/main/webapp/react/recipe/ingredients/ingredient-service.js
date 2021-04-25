const RECIPE_URL = "http://localhost:8080/api/recipes"
const INGREDIENT_URL = "http://localhost:8080/api/ingredients"

export const createIngredientForRecipe = (recipeId, ingredient) =>
    fetch(`${RECIPE_URL}/${recipeId}/ingredients`, {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findIngredientsForRecipe = (recipeId) =>
    fetch(`${RECIPE_URL}/${recipeId}/ingredients`)
        .then(response => response.json())

export const findIngredientById = (id) =>
    fetch(`${INGREDIENT_URL}/${id}`)
        .then(response => response.json())

export const updateIngredient = (id, ingredient) =>
    fetch(`${INGREDIENT_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(ingredient),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteIngredient = (id) =>
    fetch(`${INGREDIENT_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createIngredientForRecipe,
    findIngredientsForRecipe,
    findIngredientById,
    updateIngredient,
    deleteIngredient
}