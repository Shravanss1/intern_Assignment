School Management API
This project is a Node.js API for managing schools, deployed on Render. It provides endpoints to add new schools and retrieve a list of schools sorted by proximity to a given location.

Features
Add a school with its details (name, address, latitude, longitude).
Fetch a list of schools sorted by their distance from a user-specified latitude and longitude.
Project Setup
Prerequisites
Node.js and npm installed.
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd school-management
Install dependencies:

bash
Copy code
npm install
Set up the .env file with the following:

env
Copy code
DB_HOST=<Your Database Host>
DB_USER=<Your Database Username>
DB_PASSWORD=<Your Database Password>
DB_NAME=<Your Database Name>
DB_PORT=5432
PORT=3000
Run the server:

bash
Copy code
node app.js
API Endpoints
1. Add School
Endpoint: POST /api/addSchool
URL: https://intern-assignment-aozj.onrender.com/api/addSchool
Description: Adds a new school to the database.
Request Payload:
json
Copy code
{
  "name": "School Name",
  "address": "123 Main St",
  "latitude": 48.8566,
  "longitude": 2.3522
}
Response:
Success (201):
json
Copy code
{
  "message": "School added successfully!",
  "school": {
    "id": 1,
    "name": "School Name",
    "address": "123 Main St",
    "latitude": 48.8566,
    "longitude": 2.3522
  }
}
Validation Error (400):
json
Copy code
{
  "error": "All fields are required."
}
2. List Schools
Endpoint: GET /api/listSchools
URL: https://intern-assignment-aozj.onrender.com/api/listSchools
Description: Retrieves a list of schools sorted by their distance from the user's location.
Query Parameters:
latitude: User's latitude (required).
longitude: User's longitude (required). Example: ?latitude=48.686&longitude=-556.246
Response:
Success (200):
json
Copy code
[
  {
    "id": 1,
    "name": "School Name",
    "address": "123 Main St",
    "latitude": 48.8566,
    "longitude": 2.3522,
    "distance": 10.5
  },
  ...
]
Validation Error (400):
json
Copy code
{
  "error": "Latitude and longitude are required."
}
Deployment
This API is deployed on Render:

API Base URL: https://intern-assignment-aozj.onrender.com
