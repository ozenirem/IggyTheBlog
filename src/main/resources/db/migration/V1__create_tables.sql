create schema if not exists myblog;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE travel (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255)
);

CREATE TABLE recipe (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    type VARCHAR(100),
    description TEXT,
    ingredients TEXT,
    instructions TEXT
);

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    content TEXT,
    target_type VARCHAR(50),
    target_id INT
);

-- Insert default admin user (password should be hashed in production)
INSERT INTO users (username, password, role) VALUES ('irem', 'irem', 'ADMIN');
