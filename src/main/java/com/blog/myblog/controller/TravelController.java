package com.blog.myblog.controller;
import com.blog.myblog.repository.model.Travel;
import com.blog.myblog.repository.TravelRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/travel")
public class TravelController {
    private final TravelRepository repository;

    public TravelController(TravelRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Travel> all() {
        return repository.findAll();
    }

    @PostMapping
    public Travel create(@RequestBody Travel travel) {
        return repository.save(travel);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}