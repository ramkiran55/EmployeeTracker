
-- Script to create all the tables related to personal details of an employee.
DROP TABLE IF EXISTS employee.PersonLegislative;
DROP TABLE IF EXISTS employee.PersonCitizenship;
DROP TABLE IF EXISTS employee.PersonContact;
DROP TABLE IF EXISTS employee.Person;

DROP SCHEMA IF EXISTS employee;
CREATE SCHEMA employee;

CREATE TABLE employee.Person (
    PersonId INT PRIMARY KEY,
    Title VARCHAR(50),
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Gender CHAR(1),
    DOB DATE,
    Passport VARCHAR(20),
    AssignmentId INT,
    CreatedDate DATE
);

CREATE TABLE employee.PersonContact (
    PersonId INT,
    Email VARCHAR(50),
    MobileNo VARCHAR(20),
    MethodOfContact VARCHAR(50),
    AddressLine1 VARCHAR(100),
    AddressLine2 VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    Country VARCHAR(50),
    ZipCode VARCHAR(20),
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (PersonId) REFERENCES employee.Person(PersonId)
);

CREATE TABLE employee.PersonCitizenship (
    PersonId INT,
    Citizenship VARCHAR(50),
    Status VARCHAR(50),
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (PersonId) REFERENCES employee.Person(PersonId)
);

CREATE TABLE employee.PersonLegislative (
    PersonId INT,
    MaritalStatus VARCHAR(50),
    Religion VARCHAR(50),
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (PersonId) REFERENCES employee.Person(PersonId)
);
