package com.blog.myblog.controller;
import com.blog.myblog.dto.TravelDTO;
import com.blog.myblog.service.CityTravelService ;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/travel")
@RequiredArgsConstructor
public class TravelController {

    private final CityTravelService cityTravelService;

}