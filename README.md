# CBS Research Group Admin Portal

## Overview

The CBS Research Group Backend is a RESTful API designed to manage the operations of the CBS Research Group. This API is built with Node.js and Express.js, leveraging MongoDB for data storage. The backend supports various functionalities, including user authentication, CRUD operations, and automated email services.

## Table of Contents

-   Project Information
-   Technology Stack
-   Architecture
-   Features
-   Routes
-   Base URLs
-   Single Endpoints
-   Multiple Endpoints
-   Setup and Installation
-   Usage
-   Contributing
-   License

## Project Information

-   Project Name: CBS Research Group Admin Portal
-   Owner: Dr. Chinmoy Bhattachary
-   Organization: CBS Research Group
-   About Organization: CBS Research Group is a chemistry research lab, under (Indian Institute of Engineering Science and Technology)
    Shibpur (IIEST, Shibpur) has a more than 160 years long and rich history.
-   Adress: Botanic Garden, Dist: Howrah, West Bengal, India - 711103 +91 (033) 2668 4561 to 63 +91 (033) 2668 2916 (Fax)
-   Author: Kunal Chandra Das
-   Position: Web Developer

## Technology Stack

-   Frontend Framework: React js
-   Language: Javascript
-   Database: MongoDB
-   Cloud Provider: Cloudinary
-   File Handling: Multer
-   Authentication: json web token, uuid

## Architecture

The admin portal follows a Modular Architecture, ensuring separation of concerns and scalability.

## Features

-   CRUD Operations: Manage data for various entities such as alumni, members, projects, and more.
-   Authentication: Secure login and registration for admin users.
-   Automatic Email Service: Send emails for registration, password reset, and contact responses.
-   Data Cacheing: Autometically cached the data after first request.
-   And many more.

## Routes:

-   Base Url:

```bash
  https://adminsconsole.chinmoybhattacharyaelectrochemistry.com
```

## Setup and Installation

-   Clone the Repository:

```bash
  git clone https://github.com/Kunal-Ch-Das-Official/cbs-research-group.git
```

-   Navigate to the Project Directory:

```bash
 cd cbs-research-group-backend
```

Install Dependencies:

```bash
 npm install
```

Set Up Environment Variables:
Create a .env file and configure the necessary environment variables (e.g., MongoDB URI, Cloudinary API keys, etc.).

Run the Server In Development:

```bash
 npm run dev
```

Run the Server In Production:

```bash
 npm start
```

#3 Usage

-   Use tools like Postman to interact with the API endpoints.
-   Implement the routes according to the base URLs and endpoints provided.

## Contributing

-   Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

-   This project is licensed under the MIT License.
