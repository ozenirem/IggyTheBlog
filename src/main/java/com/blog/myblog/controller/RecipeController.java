package com.blog.myblog.controller;

import com.blog.myblog.repository.model.Recipe;
import com.blog.myblog.repository.RecipeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    private final RecipeRepository repository;

    public RecipeController(RecipeRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Recipe> all() {
        return repository.findAll();
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return repository.save(recipe);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
