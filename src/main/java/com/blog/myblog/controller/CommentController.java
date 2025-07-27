package com.blog.myblog.controller;
import com.blog.myblog.repository.model.Comment;
import com.blog.myblog.repository.CommentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    private final CommentRepository repository;

    public CommentController(CommentRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{type}/{id}")
    public List<Comment> getComments(@PathVariable String type, @PathVariable Long id) {
        return repository.findByTargetTypeAndTargetId(type, id);
    }

    @PostMapping
    public Comment postComment(@RequestBody Comment comment) {
        return repository.save(comment);
    }
}