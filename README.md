# WebAppUserManagement

A simple web application for user management built with ASP.NET Core, Entity Framework Core, MySQL, and Angular.

## Features

- User registration
- User authorization
- Standalone component use

## Getting Started

### Prerequisites

- [.NET 6 SDK]
- [MySQL Server]
- [Node.js] and [npm]

### Installation

1. Clone the repository:
    ```sh
    git clone  https://github.com/muhammetcetinalp/WebAppUserManagement.git
    cd WebApp
    ```

2. Set up the database:
    - Create a MySQL database named `your_database_name`.
    - Update the connection string in `appsettings.json` file:
        ```json
        "ConnectionStrings": {
            "DefaultConnection": "Server=localhost;Database=your_database_name;User=root;Password=your_password;"
        }
        ```

3. Apply migrations and create the database schema:
    ```sh
    cd WebApp
    dotnet ef database update
    ```

4. Build and run the backend:
    ```sh
    dotnet run
    ```

5. Set up the frontend:
    ```sh
    cd WebAppClient
    npm install
    ng serve
    ```

### Usage

- Open your browser and navigate to `http://localhost:4200` to access the Angular frontend.
- Use the signup form to create new users.
- Use the Swagger UI at `http://localhost:7272/swagger` to test the API endpoints.

### API Endpoints

- `POST /api/User/create` - Create a new user
- `GET /api/User/checkUsername/{username}` - Check if a username is available
- `GET /api/User/getAllUsers` - Retrieve all users

### Project Structure

- `WebApp`: Backend project with ASP.NET Core and Entity Framework Core
- `WebAppClient`: Frontend project with Angular

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.


### Contact

For any inquiries, please contact [muhammedcetinalp35@gmail.com] or open an issue on GitHub.
