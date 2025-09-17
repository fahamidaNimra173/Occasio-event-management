# Event Management Platform

## Project Description
This is a modern Event Management platform built with Next.js. Users can browse events, view event details, book events, and manage their accounts. The application includes authentication with JWT, a responsive design, and a smooth user experience. Admin functionality can be extended to manage events and bookings.

---

## Tech Stack
- **Frontend & Backend:** Next.js 13 (App Router)  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JWT (Email & Password)  
- **Styling:** Tailwind CSS,ant design,meterial ui,
- **Icons:** React Icons  
- **HTTP Requests:** Fetch API  
- **Version Control:** Git  

---

## Features
- User registration and login with JWT authentication  
- Browse all events  
- View detailed event information  
- Book events (with date, location, number of people)  
- Conditional navigation: login/register or logout button  
- Responsive design for mobile and desktop  
- Secure authentication with JWT tokens stored in localStorage  

---

## Setup Instructions

### 1. Clone the repository
```bash
1.
git clone <repository-url>
cd <project-folder>



2. Install dependencies
npm install

3. Configure environment variables

Create a .env.local file in the root directory:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_64_character_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000

4. Run the development server
npm run dev