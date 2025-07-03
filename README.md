# 🚀 DeepSpace – NASA Explorer

Welcome to DeepSpace!  
A visually immersive web app for exploring NASA’s open space data. Built with React, Node.js/Express, and NASA Open APIs, 
DeepSpace lets you browse the Astronomy Picture of the Day, Mars/Earth images, and the NASA Image Library—all from one sleek interface.

## Features

1. Astronomy Picture of the Day (APOD): Get NASA’s daily space photo with explanation.  
2. Mars Rover & EPIC Images: View the latest Earth snapshot from space.  
3. Image Search: Explore NASA’s photo archive by keyword.  
4. Modern UI: Animated background, clean layout, mobile-ready.  
5. Loading indicators & error handling.

## Tech Stack
 1. Frontend: React, Bootstrap, Axios  
 2. Backend: Node.js, Express  
 3. APIs: NASA Open APIs (https://api.nasa.gov/)  
 4. Deployment: Vercel (frontend), Render (backend)

## Live Demo
1. Frontend: https://deepspace-project-frontend.onrender.com
2. Backend: https://deepspace-project.onrender.com

## Getting Started : Steps to follow
1. Clone the Repository
2. In your terminal navigate to the nasa-explorer folder.
3. git clone https://github.com/yourusername/nasa-explorer.git
4. cd nasa-explorer

## SETUP FOR THE BACKEND
Follow the below steps for the Backend:
1. cd backend
2. npm install
3. cp .env.example .env
4. Edit .env and add your NASA_API_KEY (you can get it free at https://api.nasa.gov/)
5. npm start
These code runs on http://localhost:4000
In the .env file you can paste the generated NASA API KEY in this form NASA_API_KEY=YOUR_NASA_API_KEY

##SETUP FOR THE FRONTEND :Follow the below steps for the Frontend:
1. cd ../frontend
2. npm install
3. cp .env.example .env
4. Edit .env and set your backend URL if not using localhost
5. npm start
6. Runs on http://localhost:3000

## API Endpoints
1. /apod — Astronomy Picture of the Day
2. /epic/latest — Latest Earth image
3. /search — NASA Image & Video Library

  


  
