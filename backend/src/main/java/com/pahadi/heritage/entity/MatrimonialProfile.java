package com.pahadi.heritage.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "matrimonial_profiles")
public class MatrimonialProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    private LocalDate dateOfBirth;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @NotBlank
    @Size(max = 20)
    private String caste;

    @Size(max = 50)
    private String subCaste;

    @Enumerated(EnumType.STRING)
    private MaritalStatus maritalStatus;

    @Size(max = 100)
    private String occupation;

    @Size(max = 100)
    private String education;

    @Size(max = 20)
    private String height; // e.g., "5'8\""

    @Size(max = 20)
    private String weight; // e.g., "65 kg"

    @Enumerated(EnumType.STRING)
    private Religion religion;

    @Size(max = 100)
    private String motherTongue;

    @Column(columnDefinition = "TEXT")
    private String aboutMe;

    @Column(columnDefinition = "TEXT")
    private String partnerExpectations;

    @ElementCollection
    private List<String> hobbies;

    @ElementCollection
    private List<String> photos;

    @Size(max = 100)
    private String familyDetails;

    @Size(max = 50)
    private String fatherOccupation;

    @Size(max = 50)
    private String motherOccupation;

    private Integer siblings;

    @Size(max = 100)
    private String address;

    @Enumerated(EnumType.STRING)
    private Region nativePlace;

    private Boolean isActive = true;
    private Boolean isVerified = false;

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
    public MatrimonialProfile() {}

    public MatrimonialProfile(User user, LocalDate dateOfBirth, Gender gender, 
                            String caste, MaritalStatus maritalStatus) {
        this.user = user;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.caste = caste;
        this.maritalStatus = maritalStatus;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }

    public Gender getGender() { return gender; }
    public void setGender(Gender gender) { this.gender = gender; }

    public String getCaste() { return caste; }
    public void setCaste(String caste) { this.caste = caste; }

    public String getSubCaste() { return subCaste; }
    public void setSubCaste(String subCaste) { this.subCaste = subCaste; }

    public MaritalStatus getMaritalStatus() { return maritalStatus; }
    public void setMaritalStatus(MaritalStatus maritalStatus) { this.maritalStatus = maritalStatus; }

    public String getOccupation() { return occupation; }
    public void setOccupation(String occupation) { this.occupation = occupation; }

    public String getEducation() { return education; }
    public void setEducation(String education) { this.education = education; }

    public String getHeight() { return height; }
    public void setHeight(String height) { this.height = height; }

    public String getWeight() { return weight; }
    public void setWeight(String weight) { this.weight = weight; }

    public Religion getReligion() { return religion; }
    public void setReligion(Religion religion) { this.religion = religion; }

    public String getMotherTongue() { return motherTongue; }
    public void setMotherTongue(String motherTongue) { this.motherTongue = motherTongue; }

    public String getAboutMe() { return aboutMe; }
    public void setAboutMe(String aboutMe) { this.aboutMe = aboutMe; }

    public String getPartnerExpectations() { return partnerExpectations; }
    public void setPartnerExpectations(String partnerExpectations) { this.partnerExpectations = partnerExpectations; }

    public List<String> getHobbies() { return hobbies; }
    public void setHobbies(List<String> hobbies) { this.hobbies = hobbies; }

    public List<String> getPhotos() { return photos; }
    public void setPhotos(List<String> photos) { this.photos = photos; }

    public String getFamilyDetails() { return familyDetails; }
    public void setFamilyDetails(String familyDetails) { this.familyDetails = familyDetails; }

    public String getFatherOccupation() { return fatherOccupation; }
    public void setFatherOccupation(String fatherOccupation) { this.fatherOccupation = fatherOccupation; }

    public String getMotherOccupation() { return motherOccupation; }
    public void setMotherOccupation(String motherOccupation) { this.motherOccupation = motherOccupation; }

    public Integer getSiblings() { return siblings; }
    public void setSiblings(Integer siblings) { this.siblings = siblings; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public Region getNativePlace() { return nativePlace; }
    public void setNativePlace(Region nativePlace) { this.nativePlace = nativePlace; }

    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }

    public Boolean getIsVerified() { return isVerified; }
    public void setIsVerified(Boolean isVerified) { this.isVerified = isVerified; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }

    public enum Gender {
        MALE, FEMALE
    }

    public enum MaritalStatus {
        NEVER_MARRIED, DIVORCED, WIDOWED
    }

    public enum Religion {
        HINDU, BUDDHIST, CHRISTIAN, MUSLIM, SIKH, OTHER
    }

    public enum Region {
        UTTARAKHAND, HIMACHAL_PRADESH, NEPAL
    }
}