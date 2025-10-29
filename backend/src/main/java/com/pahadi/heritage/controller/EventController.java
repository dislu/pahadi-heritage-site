package com.pahadi.heritage.controller;

import com.pahadi.heritage.entity.Event;
import com.pahadi.heritage.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "${cors.allowed-origins}")
public class EventController {
    
    @Autowired
    private EventRepository eventRepository;
    
    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findByIsActiveTrue();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> event = eventRepository.findById(id);
        return event.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/region/{region}")
    public List<Event> getEventsByRegion(@PathVariable Event.Region region) {
        return eventRepository.findByRegion(region);
    }
    
    @GetMapping("/type/{eventType}")
    public List<Event> getEventsByType(@PathVariable Event.EventType eventType) {
        return eventRepository.findByEventType(eventType);
    }
    
    @GetMapping("/upcoming")
    public List<Event> getUpcomingEvents() {
        return eventRepository.findUpcomingEvents(LocalDateTime.now());
    }
    
    @GetMapping("/upcoming/{region}")
    public List<Event> getUpcomingEventsByRegion(@PathVariable Event.Region region) {
        return eventRepository.findUpcomingEventsByRegion(region, LocalDateTime.now());
    }
    
    @GetMapping("/featured")
    public List<Event> getFeaturedEvents() {
        return eventRepository.findByIsFeaturedTrue();
    }
    
    @GetMapping("/search")
    public List<Event> searchEvents(@RequestParam String keyword) {
        return eventRepository.findByTitleOrDescriptionContaining(keyword);
    }
    
    @GetMapping("/date-range")
    public List<Event> getEventsBetweenDates(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime endDate) {
        return eventRepository.findEventsBetweenDates(startDate, endDate);
    }
    
    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.setTitle(eventDetails.getTitle());
            event.setDescription(eventDetails.getDescription());
            event.setEventDate(eventDetails.getEventDate());
            event.setLocation(eventDetails.getLocation());
            event.setCity(eventDetails.getCity());
            event.setRegion(eventDetails.getRegion());
            event.setEventType(eventDetails.getEventType());
            event.setContactPhone(eventDetails.getContactPhone());
            event.setContactEmail(eventDetails.getContactEmail());
            event.setWebsite(eventDetails.getWebsite());
            event.setAdditionalInfo(eventDetails.getAdditionalInfo());
            return ResponseEntity.ok(eventRepository.save(event));
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}