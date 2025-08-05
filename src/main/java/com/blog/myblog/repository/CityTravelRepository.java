package com.blog.myblog.repository;


import com.blog.myblog.repository.model.Travel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CityTravelRepository extends JpaRepository<Travel, Long> {
    Optional<Travel> findByCountryIgnoreCaseAndCityIgnoreCase(String country, String city);
}