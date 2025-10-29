package com.pahadi.heritage.repository;

import com.pahadi.heritage.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    
    List<Event> findByRegion(Event.Region region);
    
    List<Event> findByEventType(Event.EventType eventType);
    
    List<Event> findByIsActiveTrue();
    
    List<Event> findByIsFeaturedTrue();
    
    @Query("SELECT e FROM Event e WHERE e.eventDate >= :startDate AND e.eventDate <= :endDate")
    List<Event> findEventsBetweenDates(@Param("startDate") LocalDateTime startDate, 
                                      @Param("endDate") LocalDateTime endDate);
    
    @Query("SELECT e FROM Event e WHERE e.eventDate >= :currentDate AND e.isActive = true ORDER BY e.eventDate ASC")
    List<Event> findUpcomingEvents(@Param("currentDate") LocalDateTime currentDate);
    
    @Query("SELECT e FROM Event e WHERE e.title LIKE %:keyword% OR e.description LIKE %:keyword%")
    List<Event> findByTitleOrDescriptionContaining(@Param("keyword") String keyword);
    
    @Query("SELECT e FROM Event e WHERE e.region = :region AND e.eventDate >= :currentDate ORDER BY e.eventDate ASC")
    List<Event> findUpcomingEventsByRegion(@Param("region") Event.Region region, 
                                          @Param("currentDate") LocalDateTime currentDate);
}