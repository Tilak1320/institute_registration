
CREATE TABLE institute_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);


CREATE TABLE institutes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  institute_type_id INT REFERENCES institute_types(id)
);


CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE mediums (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE class_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE standards (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  class_category_id INT REFERENCES class_categories(id)
);

CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  standard_id INT REFERENCES standards(id)
);


CREATE TABLE school_registrations (
  id SERIAL PRIMARY KEY,
  institute_id INT REFERENCES institutes(id),
  board_id INT REFERENCES boards(id),
  medium_id INT REFERENCES mediums(id),
  class_category_id INT REFERENCES class_categories(id),
  standard_id INT REFERENCES standards(id)
);

CREATE TABLE school_registration_subjects (
  id SERIAL PRIMARY KEY,
  registration_id INT REFERENCES school_registrations(id),
  subject_id INT REFERENCES subjects(id)
);


CREATE TABLE universities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE college_registrations (
  id SERIAL PRIMARY KEY,
  institute_id INT REFERENCES institutes(id),
  university_id INT REFERENCES universities(id),
  degree_type VARCHAR(50)
);


CREATE TABLE competitive_exam_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE competitive_exam_registrations (
  id SERIAL PRIMARY KEY,
  institute_id INT REFERENCES institutes(id),
  exam_type_id INT REFERENCES competitive_exam_types(id)
);