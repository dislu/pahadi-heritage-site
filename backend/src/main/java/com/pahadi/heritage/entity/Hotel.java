package com.pahadi.heritage.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "hotels")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 100)
    private String name;

    @NotBlank
    @Size(max = 500)
    private String description;

    @NotBlank
    @Size(max = 200)
    private String address;

    @NotBlank
    @Size(max = 50)
    private String city;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Region region;

    @NotBlank
    @Size(max = 15)
    private String phoneNumber;

    @Size(max = 100)
    private String email;

    @Size(max = 200)
    private String website;

    @Positive
    @Column(precision = 10, scale = 2)
    private BigDecimal pricePerNight;

    @Column(precision = 3, scale = 2)
    private BigDecimal rating; // 0.00 to 5.00

    @ElementCollection
    private List<String> amenities;

    @ElementCollection
    private List<String> images;

    private Integer totalRooms;
    private Integer availableRooms;

    @Column(columnDefinition = "TEXT")
    private String checkInPolicy;

    @Column(columnDefinition = "TEXT")
    private String checkOutPolicy;

    @Column(columnDefinition = "TEXT")
    private String cancellationPolicy;

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
    public Hotel() {}

    public Hotel(String name, String description, String address, String city, 
                Region region, String phoneNumber, BigDecimal pricePerNight) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.city = city;
        this.region = region;
        this.phoneNumber = phoneNumber;
        this.pricePerNight = pricePerNight;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public Region getRegion() { return region; }
    public void setRegion(Region region) { this.region = region; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getWebsite() { return website; }
    public void setWebsite(String website) { this.website = website; }

    public BigDecimal getPricePerNight() { return pricePerNight; }
    public void setPricePerNight(BigDecimal pricePerNight) { this.pricePerNight = pricePerNight; }

    public BigDecimal getRating() { return rating; }
    public void setRating(BigDecimal rating) { this.rating = rating; }

    public List<String> getAmenities() { return amenities; }
    public void setAmenities(List<String> amenities) { this.amenities = amenities; }

    public List<String> getImages() { return images; }
    public void setImages(List<String> images) { this.images = images; }

    public Integer getTotalRooms() { return totalRooms; }
    public void setTotalRooms(Integer totalRooms) { this.totalRooms = totalRooms; }

    public Integer getAvailableRooms() { return availableRooms; }
    public void setAvailableRooms(Integer availableRooms) { this.availableRooms = availableRooms; }

    public String getCheckInPolicy() { return checkInPolicy; }
    public void setCheckInPolicy(String checkInPolicy) { this.checkInPolicy = checkInPolicy; }

    public String getCheckOutPolicy() { return checkOutPolicy; }
    public void setCheckOutPolicy(String checkOutPolicy) { this.checkOutPolicy = checkOutPolicy; }

    public String getCancellationPolicy() { return cancellationPolicy; }
    public void setCancellationPolicy(String cancellationPolicy) { this.cancellationPolicy = cancellationPolicy; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public Boolean getIsFeatured() { return isFeatured; }
    public void setIsFeatured(Boolean isFeatured) { this.isFeatured = isFeatured; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }

    public enum Region {
        UTTARAKHAND, HIMACHAL_PRADESH, NEPAL
    }
}