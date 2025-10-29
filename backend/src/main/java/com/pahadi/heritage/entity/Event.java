package com.pahadi.heritage.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    private String title;

    @NotBlank
    @Column(columnDefinition = "TEXT")
    private String description;

    @NotNull
    private LocalDateTime eventDate;

    @Size(max = 200)
    private String location;

    @Size(max = 50)
    private String city;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Region region;

    @Enumerated(EnumType.STRING)
    private EventType eventType;

    @ElementCollection
    private List<String> images;

    @Size(max = 15)
    private String contactPhone;

    @Size(max = 100)
    private String contactEmail;

    @Size(max = 200)
    private String website;

    @Column(columnDefinition = "TEXT")
    private String additionalInfo;

    private Boolean isActive = true;
    private Boolean isFeatured = false;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Constructors
    public Event() {}

    public Event(String title, String description, LocalDateTime eventDate, 
                String location, Region region, EventType eventType) {
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.location = location;
        this.region = region;
        this.eventType = eventType;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public LocalDateTime getEventDate() { return eventDate; }
    public void setEventDate(LocalDateTime eventDate) { this.eventDate = eventDate; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public Region getRegion() { return region; }
    public void setRegion(Region region) { this.region = region; }

    public EventType getEventType() { return eventType; }
    public void setEventType(EventType eventType) { this.eventType = eventType; }

    public List<String> getImages() { return images; }
    public void setImages(List<String> images) { this.images = images; }

    public String getContactPhone() { return contactPhone; }
    public void setContactPhone(String contactPhone) { this.contactPhone = contactPhone; }

    public String getContactEmail() { return contactEmail; }
    public void setContactEmail(String contactEmail) { this.contactEmail = contactEmail; }

    public String getWebsite() { return website; }
    public void setWebsite(String website) { this.website = website; }

    public String getAdditionalInfo() { return additionalInfo; }
    public void setAdditionalInfo(String additionalInfo) { this.additionalInfo = additionalInfo; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public Boolean getIsFeatured() { return isFeatured; }
    public void setIsFeatured(Boolean isFeatured) { this.isFeatured = isFeatured; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }

    public enum Region {
        UTTARAKHAND, HIMACHAL_PRADESH, NEPAL
    }

    public enum EventType {
        FESTIVAL, CULTURAL, RELIGIOUS, SPORTS, TOURISM, WORKSHOP, CONFERENCE, WEDDING
    }
}