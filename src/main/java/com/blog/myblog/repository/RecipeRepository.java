package com.blog.myblog.repository;

import com.blog.myblog.repository.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}