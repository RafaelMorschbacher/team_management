# Team and Project Management API

This repository contains a back-end application for managing teams and projects. It's built with TypeScript and Express.js, interacting with a PostgreSQL database. This API provides endpoints to manage employees, projects, and allocations, which are stored in the PostgreSQL tables. <br>
The API and database were depolyed using Render (https://team-management-0br5.onrender.com) and [neon.tech](https://neon.tech/). <br>
**WARNING**: the neon database may be down when you try to run the examples, due to the limit of use of the free tier the platform.

## Features

- **Employee Management**: Create, read, update, and delete employees.
- **Project Management**: Create, read, update, and delete projects.
- **Allocation Management**: Allocate employees to projects and manage allocations.
## Technologies used
- **RESTful API**: Exposes RESTful endpoints for easy integration with frontend or other applications.
- **TypeScript**: The entire application is written in TypeScript.
- **Express.js**: Utilizes Express.js, a minimalist web framework for Node.js, for handling HTTP requests.
- **PostgreSQL Database**: Stores data in a PostgreSQL database in the cloud using https://neon.tech/ .

## API Documentation

The full API documentation was made using Swagger and can be found [here](https://team-management-0br5.onrender.com/api-docs). It contains detailed information about each endpoint, including request/response formats and usage examples.
