package com.blog.myblog.repository;
import com.blog.myblog.repository.model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelRepository extends JpaRepository<Travel, Long> {
}
