package com.blog.myblog.repository;
import com.blog.myblog.repository.model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TravelRepository extends JpaRepository<Travel, Long> {
    List<Travel> findByCountry(String country);
}