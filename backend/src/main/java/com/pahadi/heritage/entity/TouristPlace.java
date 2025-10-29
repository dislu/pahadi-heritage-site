package com.pahadi.heritage.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "tourist_places")
public class TouristPlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Column(columnDefinition = "TEXT")
    private String description;

    @Size(max = 200)
    private String location;

    @Size(max = 50)
    private String city;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Region region;

    @Enumerated(EnumType.STRING)
    private PlaceType placeType;

    @ElementCollection
    private List<String> activities;

    @ElementCollection
    private List<String> images;

    @Size(max = 50)
    private String bestTimeToVisit;

    @Column(columnDefinition = "TEXT")
    private String howToReach;

    @Column(columnDefinition = "TEXT")
    private String nearbyAttractions;

    @Size(max = 15)
    private String contactPhone;

    @Size(max = 100)
    private String contactEmail;

    @Size(max = 200)
    private String website;

    @Column(precision = 3, scale = 2)
    private Double rating; // 0.00 to 5.00

    private Integer altitude; // in meters

    @Column(columnDefinition = "TEXT")
    private String entryFees;

    @Column(columnDefinition = "TEXT")
    private String timings;

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
    public TouristPlace() {}

    public TouristPlace(String name, String description, String location, 
                       Region region, PlaceType placeType) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.region = region;
        this.placeType = placeType;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public Region getRegion() { return region; }
    public void setRegion(Region region) { this.region = region; }

    public PlaceType getPlaceType() { return placeType; }
    public void setPlaceType(PlaceType placeType) { this.placeType = placeType; }

    public List<String> getActivities() { return activities; }
    public void setActivities(List<String> activities) { this.activities = activities; }

    public List<String> getImages() { return images; }
    public void setImages(List<String> images) { this.images = images; }

    public String getBestTimeToVisit() { return bestTimeToVisit; }
    public void setBestTimeToVisit(String bestTimeToVisit) { this.bestTimeToVisit = bestTimeToVisit; }

    public String getHowToReach() { return howToReach; }
    public void setHowToReach(String howToReach) { this.howToReach = howToReach; }

    public String getNearbyAttractions() { return nearbyAttractions; }
    public void setNearbyAttractions(String nearbyAttractions) { this.nearbyAttractions = nearbyAttractions; }

    public String getContactPhone() { return contactPhone; }
    public void setContactPhone(String contactPhone) { this.contactPhone = contactPhone; }

    public String getContactEmail() { return contactEmail; }
    public void setContactEmail(String contactEmail) { this.contactEmail = contactEmail; }

    public String getWebsite() { return website; }
    public void setWebsite(String website) { this.website = website; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public Integer getAltitude() { return altitude; }
    public void setAltitude(Integer altitude) { this.altitude = altitude; }

    public String getEntryFees() { return entryFees; }
    public void setEntryFees(String entryFees) { this.entryFees = entryFees; }

    public String getTimings() { return timings; }
    public void setTimings(String timings) { this.timings = timings; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public Boolean getIsFeatured() { return isFeatured; }
    public void setIsFeatured(Boolean isFeatured) { this.isFeatured = isFeatured; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }

    public enum Region {
        UTTARAKHAND, HIMACHAL_PRADESH, NEPAL
    }

    public enum PlaceType {
        TEMPLE, FORT, HILL_STATION, LAKE, WATERFALL, TREKKING, ADVENTURE_SPORTS, 
        WILDLIFE_SANCTUARY, MUSEUM, HERITAGE_SITE, CULTURAL_CENTER, VIEWPOINT
    }
}