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
Frontend: React, Bootstrap, Axios  
Backend: Node.js, Express  
APIs: NASA Open APIs (https://api.nasa.gov/)  
Deployment: Vercel (frontend), Render (backend)
----------------------------------------------------------------------
## Live Demo
Frontend: https://deepspace-project-frontend.onrender.com

Backend: https://deepspace-project.onrender.com
----------------------------------------------------------------------
## Getting Started
1. Clone the Repository
In your terminal navigate to the nasa-explorer folder.

git clone https://github.com/yourusername/nasa-explorer.git

cd nasa-explorer
----------------------------------------------------------------------
## SETUP FOR THE BACKEND
Follow the below steps for the Backend:
cd backend
npm install
cp .env.example .env
## Edit .env and add your NASA_API_KEY (you can get it free at https://api.nasa.gov/)
## npm start
## These code runs on http://localhost:4000

In the .env file you can paste the generated NASA API KEY in this form NASA_API_KEY=YOUR_NASA_API_KEY

----------------------------------------------------------------------
##SETUP FOR THE FRONTEND
Follow the below steps for the Frontend:
cd ../frontend
npm install
cp .env.example .env
## Edit .env and set your backend URL if not using localhost
## npm start
## Runs on http://localhost:3000

----------------------------------------------------------------------
##API Endpoints
1. /apod — Astronomy Picture of the Day

2. /epic/latest — Latest Earth image

3. /search — NASA Image & Video Library

  


  
