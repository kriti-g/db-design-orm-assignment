package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Recipe;
import com.example.springtemplate.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipeRepository
        extends CrudRepository<Recipe, Integer> {
}
