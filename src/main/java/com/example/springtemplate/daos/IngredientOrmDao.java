package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recipe;
import com.example.springtemplate.models.Ingredient;
import com.example.springtemplate.repositories.RecipeRepository;
import com.example.springtemplate.repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class IngredientOrmDao {
    @Autowired
    IngredientRepository ingredientRepository;

    @Autowired
    RecipeRepository recipeRepository;

    @PostMapping("/api/ingredients")
    public Ingredient createIngredient(@RequestBody Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    @PostMapping("/api/recipes/{recipeId}/ingredients")
    public Ingredient createIngredientForRecipe(
            @PathVariable("recipeId") Integer recipeId,
            @RequestBody Ingredient ingredient) {
        ingredient = ingredientRepository.save(ingredient);
        Recipe recipe = recipeRepository.findById(recipeId).get();
        ingredient.setRecipe(recipe);
        return ingredientRepository.save(ingredient);
    }

    @GetMapping("/api/recipes/{recipeId}/ingredients")
    public List<Ingredient> findIngredientsForRecipe(
            @PathVariable("recipeId") Integer recipeId) {
        Recipe recipe = recipeRepository.findById(recipeId).get();
        return recipe.getIngredients();
    }
    
    @GetMapping("/api/ingredients")
    public List<Ingredient> findAllIngredients() {
        return ingredientRepository.findAllIngredients();
    }
    
    @GetMapping("/api/ingredients/{ingredientId}")
    public Ingredient findIngredientById(
            @PathVariable("ingredientId") Integer id) {
        return ingredientRepository.findIngredientById(id);
    }

    @PutMapping("/api/ingredients/{ingredientId}")
    public Ingredient updateIngredient(
            @PathVariable("ingredientId") Integer id,
            @RequestBody() Ingredient newIngredient) {
        Ingredient ingredient = this.findIngredientById(id);
        ingredient.setName(newIngredient.getName());
        ingredient.setMeasurement(newIngredient.getMeasurement());
        return ingredientRepository.save(ingredient);
    }

    @DeleteMapping("/api/ingredients/{ingredientId}")
    public void deleteIngredient(
            @PathVariable("ingredientId") Integer id) {
        ingredientRepository.deleteById(id);
    }
}