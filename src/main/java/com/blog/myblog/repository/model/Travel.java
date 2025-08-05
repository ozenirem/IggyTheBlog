package com.blog.myblog.repository.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Travel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;           // Roma Travel Guide
    private String location;        // Roma
    private String country;         // Italy
    private String description;
    private String imageUrl;

    @OneToMany(mappedBy = "cityTravel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CityTravelContent> sections;
}