package com.pahadi.heritage.controller;

import com.pahadi.heritage.entity.Hotel;
import com.pahadi.heritage.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin(origins = "${cors.allowed-origins}")
public class HotelController {
    
    @Autowired
    private HotelRepository hotelRepository;
    
    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelRepository.findByIsActiveTrue();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
        Optional<Hotel> hotel = hotelRepository.findById(id);
        return hotel.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/region/{region}")
    public List<Hotel> getHotelsByRegion(@PathVariable Hotel.Region region) {
        return hotelRepository.findByRegion(region);
    }
    
    @GetMapping("/city/{city}")
    public List<Hotel> getHotelsByCity(@PathVariable String city) {
        return hotelRepository.findByCity(city);
    }
    
    @GetMapping("/featured")
    public List<Hotel> getFeaturedHotels() {
        return hotelRepository.findByIsFeaturedTrue();
    }
    
    @GetMapping("/search")
    public List<Hotel> searchHotels(@RequestParam(required = false) String name,
                                   @RequestParam(required = false) BigDecimal minPrice,
                                   @RequestParam(required = false) BigDecimal maxPrice,
                                   @RequestParam(required = false) BigDecimal minRating) {
        if (name != null && !name.isEmpty()) {
            return hotelRepository.findByNameOrCityContaining(name);
        } else if (minPrice != null && maxPrice != null) {
            return hotelRepository.findByPriceRange(minPrice, maxPrice);
        } else if (minRating != null) {
            return hotelRepository.findByRatingGreaterThanEqual(minRating);
        }
        return hotelRepository.findByIsActiveTrue();
    }
    
    @GetMapping("/top/{region}")
    public List<Hotel> getTopHotelsByRegion(@PathVariable Hotel.Region region) {
        return hotelRepository.findTopHotelsByRegion(region);
    }
    
    @PostMapping
    public Hotel createHotel(@RequestBody Hotel hotel) {
        return hotelRepository.save(hotel);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody Hotel hotelDetails) {
        Optional<Hotel> optionalHotel = hotelRepository.findById(id);
        if (optionalHotel.isPresent()) {
            Hotel hotel = optionalHotel.get();
            hotel.setName(hotelDetails.getName());
            hotel.setDescription(hotelDetails.getDescription());
            hotel.setAddress(hotelDetails.getAddress());
            hotel.setCity(hotelDetails.getCity());
            hotel.setRegion(hotelDetails.getRegion());
            hotel.setPhoneNumber(hotelDetails.getPhoneNumber());
            hotel.setEmail(hotelDetails.getEmail());
            hotel.setWebsite(hotelDetails.getWebsite());
            hotel.setPricePerNight(hotelDetails.getPricePerNight());
            hotel.setAmenities(hotelDetails.getAmenities());
            hotel.setTotalRooms(hotelDetails.getTotalRooms());
            hotel.setAvailableRooms(hotelDetails.getAvailableRooms());
            return ResponseEntity.ok(hotelRepository.save(hotel));
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long id) {
        if (hotelRepository.existsById(id)) {
            hotelRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}