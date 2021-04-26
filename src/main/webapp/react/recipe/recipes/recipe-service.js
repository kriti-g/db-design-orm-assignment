const RECIPE_URL = "http://localhost:8080/api/recipes"
const USER_URL = "http://localhost:8080/api/users"


export const createRecipeForUser = (userId, recipe) =>
    fetch(`${USER_URL}/${userId}/recipes`, {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const findRecipesForUser = (uid) =>
    fetch(`${USER_URL}/${uid}/recipes`)
        .then(response => response.json())

// export const createRecipe = (recipe) =>
//     fetch(RECIPE_URL, {
//         method: 'POST',
//         body: JSON.stringify(recipe),
//         headers: {'content-type': 'application/json'}
//     })
//     .then(response => response.json())

// export const findAllRecipes = () =>
//     fetch(RECIPE_URL)
//         .then(response => response.json())

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
    createRecipeForUser: createRecipeForUser,
    findRecipesForUser: findRecipesForUser,
    findRecipeById: findRecipeById,
    updateRecipe: updateRecipe,
    deleteRecipe: deleteRecipe
}