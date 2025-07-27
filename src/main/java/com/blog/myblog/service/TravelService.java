package com.blog.myblog.service;

import com.blog.myblog.repository.model.Travel;
import com.blog.myblog.repository.TravelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TravelService {
    private final TravelRepository repository;

    public TravelService(TravelRepository repository) {
        this.repository = repository;
    }

    public List<Travel> getAll() {
        return repository.findAll();
    }

    public Travel create(Travel travel) {
        return repository.save(travel);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}