package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recipe;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.RecipeRepository;
import com.example.springtemplate.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RecipeOrmDao {
    @Autowired
    RecipeRepository recipeRepository;
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/recipes")
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }
    
    @GetMapping("/api/recipes")
    public List<Recipe> findAllRecipes() {
        return recipeRepository.findAllRecipes();
    }
    
    @GetMapping("/api/recipes/{recipeId}")
    public Recipe findRecipeById(
            @PathVariable("recipeId") Integer id) {
        return recipeRepository.findRecipeById(id);
    }

    @PostMapping("/api/users/{userId}/recipes")
    public Recipe createRecipeForUser(
            @PathVariable("userId") Integer userId,
            @RequestBody Recipe recipe) {
        recipe = recipeRepository.save(recipe);
        User user = userRepository.findById(userId).get();
        recipe.setUser(user);
        return recipeRepository.save(recipe);
    }

    @GetMapping("/api/users/{uid}/recipes")
    public List<Recipe> findRecipesForUser(
            @PathVariable("uid") Integer uid) {
        User user = userRepository.findById(uid).get();
        return user.getRecipes();
    }

    @PutMapping("/api/recipes/{recipeId}")
    public Recipe updateRecipe(
            @PathVariable("recipeId") Integer id,
            @RequestBody() Recipe newRecipe) {
        Recipe recipe = this.findRecipeById(id);
        recipe.setName(newRecipe.getName());
        recipe.setCuisine(newRecipe.getCuisine());
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