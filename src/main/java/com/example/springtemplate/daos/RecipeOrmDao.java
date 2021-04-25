package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recipe;
import com.example.springtemplate.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RecipeOrmDao {
    @Autowired
    RecipeRepository recipeRepository;

    @PostMapping("/api/recipes")
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }
    
    @GetMapping("/api/recipes")
    public List<Recipe> findAllRecipes() {
        return (List<Recipe>) recipeRepository.findAll();
    }
    
    @GetMapping("/api/recipes/{recipeId}")
    public Recipe findRecipeById(
            @PathVariable("recipeId") Integer id) {
        return recipeRepository.findById(id).get();
    }

    // @GetMapping("/api/update/recipe/{recipeId}/{password}")
    // public Recipe updateRecipe(
    //         @PathVariable("recipeId") Integer id,
    //         @PathVariable("password") String newPass) {
    //     Recipe recipe = this.findRecipeById(id);
    //     recipe.setTitle(newPass);
    //     return recipeRepository.save(recipe);
    // }

    @PutMapping("/api/recipes/{recipeId}")
    public Recipe updateRecipe(
            @PathVariable("recipeId") Integer id,
            @RequestBody() Recipe newRecipe) {
        Recipe recipe = this.findRecipeById(id);
        recipe.setName(newRecipe.getName());
        recipe.setCuisineType(newRecipe.getCuisineType());
        recipe.setDescription(newRecipe.getDescription());
        recipe.setPrepTime(newRecipe.getPrepTime());
        recipe.setCookTime(newRecipe.getCookTime());
        return recipeRepository.save(recipe);
    }

    @DeleteMapping("/api/recipes/{recipeId}")
    public void deleteRecipe(
            @PathVariable("recipeId") Integer id) {
        recipeRepository.deleteById(id);
    }
}