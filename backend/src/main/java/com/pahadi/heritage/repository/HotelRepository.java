package com.pahadi.heritage.repository;

import com.pahadi.heritage.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {
    
    List<Hotel> findByRegion(Hotel.Region region);
    
    List<Hotel> findByCity(String city);
    
    List<Hotel> findByIsActiveTrue();
    
    List<Hotel> findByIsFeaturedTrue();
    
    @Query("SELECT h FROM Hotel h WHERE h.pricePerNight BETWEEN :minPrice AND :maxPrice")
    List<Hotel> findByPriceRange(@Param("minPrice") BigDecimal minPrice, 
                                 @Param("maxPrice") BigDecimal maxPrice);
    
    @Query("SELECT h FROM Hotel h WHERE h.rating >= :rating")
    List<Hotel> findByRatingGreaterThanEqual(@Param("rating") BigDecimal rating);
    
    @Query("SELECT h FROM Hotel h WHERE h.name LIKE %:name% OR h.city LIKE %:name%")
    List<Hotel> findByNameOrCityContaining(@Param("name") String name);
    
    @Query("SELECT h FROM Hotel h WHERE h.region = :region AND h.isActive = true ORDER BY h.rating DESC")
    List<Hotel> findTopHotelsByRegion(@Param("region") Hotel.Region region);
}