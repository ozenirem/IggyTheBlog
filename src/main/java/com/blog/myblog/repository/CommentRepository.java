package com.blog.myblog.repository;

import com.blog.myblog.repository.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByTargetTypeAndTargetId(String targetType, Long targetId);
}