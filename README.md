# Result Management Application
This web application allows students to view their results by entering their roll number and name. Teachers have additional functionalities like viewing all records, adding new records,delete the record and managing existing records .

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)

## Features

### For Students

- Log in with a button click.
- Enter roll number and name to view results.
- Display error if roll number and name do not match.

### For Teachers

- Log in with a button click.
- Log in with a UserName= palak and Password= palak123 
- View all student records.
- Add new student records.
- Edit existing student records.
- Delete student records.

## Technologies Used

- HTML
- CSS (Styling using CSS)
- JavaScript
- Node.js
- ExpressJS
- [Bootstrap (only for styling, not their JS parts)]
- Sequelize ORM (for interacting with mySQL databases)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- Visual Studio Code: [Download and Install VS Code](https://code.visualstudio.com/)
- MySQL Workbench: [Download and Install MySQL Workbench](https://www.mysql.com/products/workbench/)


## Installation

1. DownLoad the project link from OneDrive 
2. Navigate to the project directory: `cd NodeProject-Result management`
3. Install dependencies: `npm install`

## Database Setup

To connect the application to a MySQL database, follow these steps:

1. Create a MySQL database named `result` in a mySQl Workbench.

2. Open the file `orm/database.js` in your project directory.

3. In `database.js`, find the following lines:

    const sequelize = new Sequelize('database', 'username', 'password', {
      dialect: 'mysql',
      host: 'localhost',
    });
 
4. Update the values for `username` and `password` with your MySQL database credentials.

   const sequelize = new Sequelize('result', 'your-username', 'your-password', {
     dialect: 'mysql',
     host: 'localhost',
   });
Replace 'your-username' and 'your-password' with your actual MySQL username and password.

## Usage

1. Start the application: `node index.js`
2. Open your web browser and go to `http://localhost:5000`.


