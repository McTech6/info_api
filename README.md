 # Info API

This is a simple Node.js API built with Express that provides basic information, including an email, the current date, and a link to this GitHub repository.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/McTech6/info_api.git
Navigate to the project directory:

 
cd info_api
Install the dependencies:

 
npm install
Usage
To start the server, run:

 
npm start
The server will start on port 3000. You can access the API at http://localhost:3000.

Endpoints
GET /api/info
Returns a JSON object with the following information:

email: A sample email address.

current_date: The current date in ISO format.

github_url: The URL to this GitHub repository.

Example response:

json
 
{
  "email": "tiddingramsey@gmail.com",
  "current_date": "2023-10-05T12:34:56.789Z",
  "github_url": "https://github.com/McTech6/info_api.git"
}
Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Push your branch and open a pull request.

License
This project is licensed under the ISC License. See the LICENSE file for details.

 
