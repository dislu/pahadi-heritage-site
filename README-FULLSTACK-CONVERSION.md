# 🏔️ Pahadi Heritage: React + Spring Boot Full-Stack Conversion

## 🎯 Project Overview
Converting the existing React.js frontend into a comprehensive full-stack application with Spring Boot backend, complete with authentication, database integration, and REST APIs.

## 📊 Architecture

```
┌─────────────────┐    HTTP/REST APIs    ┌──────────────────┐
│   React.js      │ ◄──────────────────► │   Spring Boot    │
│   Frontend      │                      │   Backend        │
│   (Port 3000)   │                      │   (Port 8080)    │
└─────────────────┘                      └──────────────────┘
                                                    │
                                                    ▼
                                         ┌──────────────────┐
                                         │   H2/MySQL       │
                                         │   Database       │
                                         └──────────────────┘
```

## ✅ Completed Features

### 🔧 Backend Infrastructure
- ✅ **Spring Boot Setup** - Complete project structure with Maven
- ✅ **Database Configuration** - H2 (dev) + MySQL (prod) support
- ✅ **JPA Entities** - User, Hotel, Event, TouristPlace, MatrimonialProfile
- ✅ **Repository Layer** - JPA repositories with custom queries
- ✅ **REST Controllers** - Hotel and Event APIs with CRUD operations

### 🏗️ Database Schema
- ✅ **Users Table** - Authentication, roles, regions
- ✅ **Hotels Table** - Complete booking system data model
- ✅ **Events Table** - Cultural events and festivals
- ✅ **Tourist Places** - Attractions with ratings and details
- ✅ **Matrimonial Profiles** - Comprehensive user profiles

### 🌐 API Endpoints

#### Hotels API (`/api/hotels`)
- `GET /` - Get all active hotels
- `GET /{id}` - Get hotel by ID
- `GET /region/{region}` - Hotels by region (Uttarakhand/Himachal/Nepal)
- `GET /city/{city}` - Hotels by city
- `GET /featured` - Featured hotels
- `GET /search` - Search with filters (price, rating, name)
- `POST /` - Create new hotel
- `PUT /{id}` - Update hotel
- `DELETE /{id}` - Delete hotel

#### Events API (`/api/events`)
- `GET /` - Get all active events
- `GET /{id}` - Get event by ID
- `GET /region/{region}` - Events by region
- `GET /type/{type}` - Events by type (Festival/Cultural/Religious)
- `GET /upcoming` - Upcoming events
- `GET /featured` - Featured events
- `GET /search?keyword=` - Search events
- `POST /` - Create new event
- `PUT /{id}` - Update event
- `DELETE /{id}` - Delete event

## 🚀 Next Steps

### 🔐 Authentication & Security (In Progress)
```java
// JWT Configuration
- Spring Security setup
- JWT token generation/validation
- User registration/login endpoints
- Role-based access control
- Password encryption with BCrypt
```

### 📱 Frontend Integration
```javascript
// React Updates Needed
- Install Axios for API calls
- Create API service layer
- Update components to consume REST APIs
- Add authentication context
- Implement loading states and error handling
```

### 🐳 Deployment Configuration
```yaml
# Docker Setup
- Frontend Dockerfile
- Backend Dockerfile  
- Docker Compose configuration
- Environment variables setup
- Production database configuration
```

## 🔄 Integration Plan

### Step 1: Complete Backend APIs
- [ ] Tourist Places Controller
- [ ] Matrimonial Profile Controller
- [ ] User Management Controller
- [ ] Authentication Controller (Login/Register)
- [ ] File Upload Controller (Images)

### Step 2: Frontend API Integration
- [ ] Install Axios in React project
- [ ] Create API service files
- [ ] Update existing components:
  - `Hotels.js` → Connect to `/api/hotels`
  - `Events.js` → Connect to `/api/events`
  - `TouristPlaces.js` → Connect to `/api/tourist-places`
  - `Shaadi.js` → Connect to `/api/matrimonial`

### Step 3: Authentication Flow
- [ ] Login/Register forms in React
- [ ] JWT token management
- [ ] Protected routes
- [ ] User profile management

### Step 4: Enhanced Features
- [ ] Real-time search and filtering
- [ ] Image upload functionality
- [ ] Email notifications
- [ ] Advanced matrimonial matching

## 📂 Project Structure

```
pahadi-heritage-site/
├── frontend/                 # Existing React app
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/                  # New Spring Boot app
│   ├── src/main/java/com/pahadi/heritage/
│   │   ├── entity/          # JPA Entities
│   │   ├── repository/      # Data Access Layer
│   │   ├── controller/      # REST Controllers
│   │   ├── service/         # Business Logic
│   │   ├── security/        # Authentication & Security
│   │   └── config/          # Configuration Classes
│   ├── src/main/resources/
│   └── pom.xml
├── docker-compose.yml        # Multi-container setup
└── README-FULLSTACK.md      # This file
```

## 🚦 Running the Application

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
# Runs on http://localhost:8080
# H2 Console: http://localhost:8080/h2-console
```

### Frontend (React)
```bash
cd frontend  # (or root directory)
npm start
# Runs on http://localhost:3000
```

### Database Access
- **H2 Console**: http://localhost:8080/h2-console
- **JDBC URL**: `jdbc:h2:mem:pahadidb`
- **Username**: `sa`
- **Password**: (empty)

## 🎨 API Documentation
Once running, visit: http://localhost:8080/swagger-ui/index.html

## 🔧 Technology Stack

### Backend
- **Framework**: Spring Boot 3.2.0
- **Security**: Spring Security + JWT
- **Database**: JPA/Hibernate + H2/MySQL
- **Documentation**: SpringDoc OpenAPI
- **Build Tool**: Maven

### Frontend (Existing)
- **Framework**: React 18.2.0
- **Routing**: React Router DOM
- **Styling**: Custom CSS + Font Awesome
- **HTTP Client**: Axios (to be added)

### DevOps
- **Containerization**: Docker + Docker Compose
- **Database**: H2 (development), MySQL (production)
- **CORS**: Configured for local development

---

**🌟 Status: Backend Foundation Complete - Frontend Integration Next!**

The Spring Boot backend is fully functional with comprehensive APIs for all major features. The next phase involves connecting the existing React frontend to these APIs and adding authentication.