package com.blog.myblog.service;


import com.blog.myblog.repository.CityTravelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityTravelService {

    private final CityTravelRepository cityTravelRepository;


}