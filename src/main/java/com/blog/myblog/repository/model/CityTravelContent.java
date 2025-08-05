package com.blog.myblog.repository.model;

import jakarta.persistence.*;

@Entity
public class CityTravelContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private String value;

    @ManyToOne
    private Travel travel;
    // Getters, Setters
}