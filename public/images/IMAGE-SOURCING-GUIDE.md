# Pahadi Heritage Website - Image Sourcing Guide

## Overview
This guide provides detailed instructions for sourcing and adding authentic images to the Pahadi Heritage website. All images must be ethically sourced with proper attribution and permissions.

## Image Categories and Requirements

### 1. Hero Section Images (public/images/hero/)
**Required Images:**
- `pahadi-mountains-hero.jpg` - Panoramic view of Himalayan peaks (2000x800px)
- `uttarakhand-landscape-hero.jpg` - Uttarakhand scenic view (2000x800px)
- `himachal-valleys-hero.jpg` - Himachal Pradesh valleys (2000x800px)
- `nepal-mountains-hero.jpg` - Nepal mountain landscape (2000x800px)

**Sources:**
- Unsplash.com (search: "himalaya mountains", "uttarakhand", "himachal pradesh")
- Pixabay.com (CC0 licensed images)
- Government tourism websites (with permission)
- Local photographers (with proper attribution)

### 2. Regional Landscapes (public/images/regions/)
**Uttarakhand:**
- `uttarakhand-ganga-aarti.jpg` - Evening Ganga Aarti ceremony
- `uttarakhand-temples.jpg` - Ancient temples in mountains
- `uttarakhand-terraces.jpg` - Agricultural terraces
- `uttarakhand-rivers.jpg` - Sacred rivers (Ganges, Yamuna)

**Himachal Pradesh:**
- `himachal-apple-orchards.jpg` - Apple orchards in bloom
- `himachal-monasteries.jpg` - Buddhist monasteries
- `himachal-valleys.jpg` - Green valleys and hills
- `himachal-snow-peaks.jpg` - Snow-capped peaks

**Nepal:**
- `nepal-everest-region.jpg` - Everest region landscape
- `nepal-kathmandu-valley.jpg` - Kathmandu valley view
- `nepal-prayer-flags.jpg` - Colorful prayer flags
- `nepal-mountain-villages.jpg` - Traditional mountain villages

### 3. Tribal Communities (public/images/tribes/)
**Important: Obtain proper consent and permissions for all human subjects**

**Uttarakhand Tribes:**
- `garhwali-traditional-dress.jpg` - Traditional Garhwali clothing
- `kumaoni-handicrafts.jpg` - Kumaoni bamboo crafts
- `jaunsari-folk-dance.jpg` - Traditional dance performance
- `bhotiya-lifestyle.jpg` - High-altitude lifestyle

**Himachal Pradesh Tribes:**
- `gaddi-shepherds.jpg` - Gaddi community with sheep
- `kinnauri-traditional-homes.jpg` - Traditional architecture
- `lahauli-culture.jpg` - Cultural practices
- `spitian-buddhist-life.jpg` - Buddhist lifestyle

**Nepal Tribes:**
- `sherpa-community.jpg` - Sherpa people and culture
- `gurung-traditional-dress.jpg` - Traditional Gurung attire
- `tamang-culture.jpg` - Tamang cultural practices
- `thakali-cuisine.jpg` - Traditional food preparation

### 4. Festivals and Cultural Events (public/images/festivals/)
- `ganga-dussehra-celebration.jpg` - Ganga Dussehra festival
- `harela-festival.jpg` - Harela (monsoon festival)
- `nanda-devi-yatra.jpg` - Nanda Devi pilgrimage
- `diwali-pahadi-style.jpg` - Pahadi Diwali celebrations
- `holi-mountains.jpg` - Holi in mountain regions
- `dashain-nepal.jpg` - Dashain festival in Nepal
- `tihar-lights.jpg` - Tihar festival of lights
- `losar-tibetan-new-year.jpg` - Tibetan New Year celebrations

### 5. Tourist Places (public/images/tourist-places/)
**Uttarakhand:**
- `rishikesh-yoga-capital.jpg` - Yoga and spiritual practices
- `haridwar-ganga-ghats.jpg` - Holy ghats of Haridwar
- `mussoorie-hill-station.jpg` - Queen of Hills
- `jim-corbett-wildlife.jpg` - Wildlife and nature
- `valley-of-flowers.jpg` - Colorful alpine flowers

**Himachal Pradesh:**
- `manali-adventure-sports.jpg` - Adventure activities
- `shimla-colonial-architecture.jpg` - Colonial buildings
- `dharamshala-mcleod-ganj.jpg` - Dalai Lama residence
- `spiti-valley-landscape.jpg` - Cold desert landscape
- `kullu-valley-nature.jpg` - Scenic valley views

**Nepal:**
- `kathmandu-durbar-square.jpg` - Historical architecture
- `pokhara-phewa-lake.jpg` - Serene lake views
- `everest-base-camp.jpg` - Trekking destination
- `chitwan-national-park.jpg` - Wildlife sanctuary
- `lumbini-birthplace-buddha.jpg` - Sacred Buddhist site

### 6. Geography and Nature (public/images/geography/)
- `nanda-devi-peak.jpg` - Nanda Devi mountain
- `kedarnath-temple-peak.jpg` - Kedarnath region
- `ganges-river-source.jpg` - Gangotri glacier
- `himalayan-glaciers.jpg` - Ice formations
- `alpine-meadows.jpg` - High-altitude grasslands
- `rhododendron-forests.jpg` - Rhododendron blooms
- `snow-leopard-habitat.jpg` - Wildlife habitat
- `blue-poppy-nepal.jpg` - National flower of Nepal

## Image Specifications

### Technical Requirements
- **Format:** JPG for photographs, PNG for graphics with transparency
- **Resolution:** Minimum 1200px width for landscape images
- **File Size:** Optimize to 200KB-500KB for web performance
- **Quality:** High quality, sharp focus, good lighting

### Naming Convention
- Use descriptive, lowercase names with hyphens
- Include location/category prefix
- Example: `uttarakhand-ganga-aarti.jpg`

### Optimization Tools
- TinyPNG.com for compression
- ImageOptim for Mac users
- GIMP for free image editing

## Ethical Guidelines

### Cultural Sensitivity
- Ensure respectful representation of all communities
- Avoid stereotypical or exploitative imagery
- Consult with community members when possible
- Respect religious and cultural practices

### Legal Requirements
- Obtain model releases for identifiable people
- Verify copyright and usage rights
- Credit photographers and sources
- Follow Creative Commons licenses properly

### Attribution Format
```
Image: [Description]
Photographer: [Name]
Source: [Website/Platform]
License: [CC BY/CC0/etc.]
```

## Free Image Sources

### Recommended Websites
1. **Unsplash.com** - High-quality free photos
2. **Pixabay.com** - Free images with CC0 license
3. **Pexels.com** - Free stock photography
4. **Wikimedia Commons** - Educational and cultural images
5. **Government Tourism Sites** - Official promotional images

### Search Keywords
- "Himalaya mountains landscape"
- "Uttarakhand temples rivers"
- "Himachal Pradesh valleys orchards"
- "Nepal mountain villages culture"
- "Pahadi traditional festival"
- "Indian tribal culture traditional dress"
- "Buddhist monastery Himachal"
- "Sherpa community Nepal"

## Implementation Steps

1. **Download and organize images** according to folder structure
2. **Rename files** following naming conventions
3. **Optimize images** for web performance
4. **Update React components** to use new image paths
5. **Create image attribution file** with all credits
6. **Test responsive display** across devices
7. **Verify accessibility** with alt text descriptions

## Image Integration in React

### Basic Image Usage
```jsx
<img 
  src="/images/hero/pahadi-mountains-hero.jpg" 
  alt="Panoramic view of snow-capped Himalayan peaks at sunrise"
  className="hero-image"
/>
```

### Background Images in CSS
```css
.hero-section {
  background-image: url('/images/hero/uttarakhand-landscape-hero.jpg');
  background-size: cover;
  background-position: center;
}
```

### Responsive Images
```jsx
<picture>
  <source media="(max-width: 768px)" srcSet="/images/hero/mobile-hero.jpg" />
  <img src="/images/hero/desktop-hero.jpg" alt="Description" />
</picture>
```

## Next Steps

1. Source images according to this guide
2. Obtain necessary permissions and attributions
3. Implement images in React components
4. Create attribution documentation
5. Test website performance and accessibility
6. Regular updates with seasonal/cultural events

---

**Note:** This is a placeholder guide. All actual images must be sourced ethically with proper permissions and attributions. Consider hiring local photographers or partnering with cultural organizations for authentic representation.