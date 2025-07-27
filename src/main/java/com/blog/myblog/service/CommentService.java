package com.blog.myblog.service;

import com.blog.myblog.repository.model.Comment;
import com.blog.myblog.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository repository;

    public CommentService(CommentRepository repository) {
        this.repository = repository;
    }

    public List<Comment> getByTarget(String type, Long id) {
        return repository.findByTargetTypeAndTargetId(type, id);
    }

    public Comment create(Comment comment) {
        return repository.save(comment);
    }
}