package com.blog.myblog.dto;


import lombok.Data;

import java.util.List;

@Data
public class TravelDTO {
    private String country;
    private String city;
    private String title;
    private String description;
    private List<CityTravelContentDTO> sections;
}



