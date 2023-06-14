# mbstu-e-learning-back-end

The research project report __“MBSTU E-Learning”__ submitted by **MD. Ahsanul Haque(CE-18039)** and **Tanvir Ahmed(CE-17051)** to the Department of Computer Science and Engineering, Mawlana Bhashani Science and Technology University, Santosh, Tangail-1902, Bangladesh has been accepted as satisfactory for the partial fulfillment of the requirements for the degree of Bachelor of Science (Engineering) in Computer Science and Engineering

We, hereby declare that the work presented in this project is the outcome of the investigation performed by us under the supervision of **Mohd. Sultan Ahammad** , Assistant Professor, Dept. of Computer of Science Engineering, Mawlana Bhashani Science and Technology University

This is a backend project developed with Express.js that provides a RESTful API for managing users, courses, categories, lectures, enrollments, roles, posts, and profiles.

## Prerequisites

Before running this project, make sure you have the following installed on your system:

- Node.js (v14 or higher)
- NPM/Yarn (Node Package Manager)

## Installation

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the dependencies:

```shell
yarn install
```

## Configuration

Before running the application, you may need to configure some settings. 

1. Rename the `.env.example` file to `.env`.
2. Open the `.env` file and update the configuration values as needed. Some of the common configuration options include database connection details and API secrets.

## Running the Application

To start the application, run the following command:

```shell
yarn start
```

This will start the server on the default port (usually 3000). You can access the API endpoints using the base URL `http://localhost:3000`.

## API Documentation

### Users

- `GET /api/users`: Get a list of all users.
- `GET /api/users/:id`: Get a specific user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

### Courses

- `GET /api/courses`: Get a list of all courses.
- `GET /api/courses/:id`: Get a specific course by ID.
- `POST /api/courses`: Create a new course.
- `PUT /api/courses/:id`: Update a course by ID.
- `DELETE /api/courses/:id`: Delete a course by ID.

### Categories

- `GET /api/categories`: Get a list of all categories.
- `GET /api/categories/:id`: Get a specific category by ID.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by ID.
- `DELETE /api/categories/:id`: Delete a category by ID.

### Lectures

- `GET /api/lectures`: Get a list of all lectures.
- `GET /api/lectures/:id`: Get a specific lecture by ID.
- `POST /api/lectures`: Create a new lecture.
- `PUT /api/lectures/:id`: Update a lecture by ID.
- `DELETE /api/lectures/:id`: Delete a lecture by ID.

### Enrollments

- `GET /api/enrollments`: Get a list of all enrollments.
- `GET /api/enrollments/:id`: Get a specific enrollment by ID.
- `POST /api/enrollments`: Create a new enrollment.
- `PUT /api/enrollments/:id`: Update an enrollment by ID.
- `DELETE /api/enrollments/:id`: Delete an enrollment by ID.

### Roles

- `GET /api/roles`: Get a list of all roles.
- `GET /api/roles/:id`: Get a specific role by ID.
- `POST /api/roles`: Create a new role.
- `PUT /api/roles/:id`: Update a role by ID.
- `DELETE /api/roles/:id`: Delete a role by ID.

### Posts

- `GET /api/posts`: Get a list of all posts.
- `GET /api/posts/:id`: Get a specific post by ID.
- `POST /api/posts`: Create a

 new post.
- `PUT /api/posts/:id`: Update a post by ID.
- `DELETE /api/posts/:id`: Delete a post by ID.

### Profiles

- `GET /api/profiles`: Get a list of all profiles.
- `GET /api/profiles/:id`: Get a specific profile by ID.
- `POST /api/profiles`: Create a new profile.
- `PUT /api/profiles/:id`: Update a profile by ID.
- `DELETE /api/profiles/:id`: Delete a profile by ID.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the developers and contributors of the libraries and frameworks used in this project.

## Live Site

# https://mbstu-e-learning.vercel.app/