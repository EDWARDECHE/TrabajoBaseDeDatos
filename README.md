
# Tarea Base de Datos

This is a Node.js project that connects to a database and provides basic CRUD operations.


## Installation

1.	Clone the repository to your local machine.
2.	Navigate to the project directory.
3.	Install dependencies using the following command:

npm install.
## Usage

To start the server, run the following command:

npm start

The server will be available at http://localhost:3000.

Endpoints
The following endpoints are available:

GET /items: Returns a list of all items in the database.

POST /items: Creates a new item in the database.

## Environment Variables

The following environment variables are used in the project:

Port: The port number that the server should listen on (default is 3000).

MONGODB_URI: The URI for the MongoDB database.
To set these variables, create a file named .env in the project directory and add the following:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/my-database

Replace "my-database" with the name of your MongoDB database.




## Acknowledgements

 This project uses the following dependencies:

1. Body-parser: Parses incoming request bodies in a middleware before your handlers.

2. Cors: Enables Cross-Origin Resource Sharing.

3. Dotenv: Loads environment variables from a .env file.

4. Express: Fast, unopinionated, minimalist web framework for Node.js.

5. Mongoose: Elegant MongoDB object modeling for Node.js.

6. Morgan: HTTP request logger middleware for Node.js.

7. Nodemon: Automatically restarts the server when changes are made to files.
## Authors

Echenique Eduardo


## License

This project is licensed under the ISC License. See the LICENSE file for details.
