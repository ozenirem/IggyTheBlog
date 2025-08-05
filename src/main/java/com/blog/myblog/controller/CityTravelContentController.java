package com.blog.myblog.controller;


import com.blog.myblog.service.CityTravelService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/travel")
public class CityTravelContentController {
    private final CityTravelService service;

    public CityTravelContentController(CityTravelService service) {
        this.service = service;
    }

}
