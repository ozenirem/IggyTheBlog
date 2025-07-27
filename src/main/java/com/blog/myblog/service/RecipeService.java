package com.blog.myblog.service;
import com.blog.myblog.repository.model.Recipe;
import com.blog.myblog.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    private final RecipeRepository repository;

    public RecipeService(RecipeRepository repository) {
        this.repository = repository;
    }

    public List<Recipe> getAll() {
        return repository.findAll();
    }

    public Recipe create(Recipe recipe) {
        return repository.save(recipe);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}