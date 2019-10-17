create database simplyRota;
use simplyRota;

-- staff table

CREATE table staff (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(100) NOT NULL UNIQUE,
    gender VARCHAR(1) NOT NULL,
    hours_contracted INT NOT NULL,
    skills VARCHAR(100) NOT NULL,
    driving_status VARCHAR(100) NOT NULL,
    job_title VARCHAR(100) NOT NULL,
    annual_leave_entitlement INT NOT NULL,
    admin_status VARCHAR (1) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()

);

-- Client table

CREATE table clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_location VARCHAR(100) NOT NULL
    
    
    
);


-- Shifts table

CREATE table shifts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    shift_date DATE NOT NULL,
    hours_worked DECIMAL (5, 1) NOT NULL,
    client_id INT NOT NULL,
    staff_id INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(client_id) REFERENCES clients(id),
    FOREIGN KEY(staff_id) REFERENCES staff(id)

);

CREATE TABLE shiftComments (
     id INT AUTO_INCREMENT PRIMARY KEY,
     comments VARCHAR(255) DEFAULT NULL,
     shift_id INT NOT NULL,
     FOREIGN KEY (shift_id) REFERENCES shifts(id)
);

INSERT INTO staff (first_name,last_name,gender,hours_contracted,username,email,user_password,job_title,admin_status,driving_status,skills,annual_leave_entitlement)
VALUES ("Mo", "Wilkinson", "M",35, "athemir", "athemir@gmail.com", "question", "developer", "Y", "N", "funny", 25), 
("Victoria", "Cory", "F",35, "vic", "vic@gmail.com", "answer", "developer", "Y", "Y", "high-fives", 25), 
("James", "Smith", "M",35, "jammie", "jammie@gmail.com", "jam", "senior carer", "N", "Y", "First-aid, diabetes care", 25), 
("Helen", "Churchill", "F",35, "helchurch", "helenc@gmail.com", "duck", "Junior Carer", "N", "N", "Nursing Qualification", 25);

select * from staff;
select * from clients;
select * from shifts;
select * from shiftComments;

INSERT INTO clients (client_location)
VALUES ("1 Applewood Drive"),
("4 Village Mews"),
("12 Tulip Avenue"),
("2 Elm Street");

INSERT INTO shifts (start_time, end_time, shift_date, hours_worked, client_id, staff_id) VALUES 
("09:00:00", "11:00:00", "2019-10-17",2 , 2, 3),
("08:30:00", "16:30:00", "2019-10-18", 8, 1, 3),
("12:30:00", "18:00:00", "2019-10-17", 5.5, 1, 4),
("10:00:00", "15:30:00", "2019-10-18", 5.5, 3, 4),
("14:00:00", "18:30:00", "2019-10-18",4.5 , 3, null),
("10:00:00", "15:30:00", "2019-10-18", 5.5, 3, null);






-- SQL queries
-- listing all shifts for one staff member

SELECT concat(first_name,' ', last_name) AS staff_name, start_time,end_time, shift_date,hours_worked, client_location
FROM staff 
JOIN shifts 
ON staff.id = shifts.staff_id
JOIN clients
ON shifts.client_id = clients.id
WHERE staff_id = 3;

SELECT CONCAT (first_name," ",last_name) AS full_name, start_time,end_time, shift_date, client_id 
FROM staff 
JOIN shifts 
ON staff.id = shifts.staff_id
WHERE staff_id = {variable};

-- insert new shift

INSERT INTO shifts (start_time, end_time, shift_date, client_id, staff_id) VALUES 
("{variable}", "{variable}", "{variable}", {variable}, {variable}),


-- Returns staff name & admin status

-- Delete staff

Delete FROM staff
WHERE staff.id = {variable};

-- Add staff without comments
INSERT INTO staff (first_name,last_name,gender,hours_contracted,username,email,user_password,job_title,admin_status,driving_status,skills,annual_leave_entitlement)
VALUES ("Mo", "Wilkinson", "M",35, "athemir", "athemir@gmail.com", "question", "developer", "Y", "N", "funny", 25),

-- Add comments to particular staff member
UPDATE  staff
SET comments = "{variable}"
WHERE comments is  null and first_name = "{variable}" and last_name = "{variable}";

-- Return shifts for particular staff
-- we use staff.first_name to specifically target that column in staff table.
-- the correct syntax for joining multiple tables is join on join on etc

SELECT CONCAT (staff.first_name," ", staff.last_name) AS full_name, start_time,end_time, shift_date, 
concat (clients.first_name, ' ', clients.last_name) as client_name, client_location
FROM staff 
JOIN shifts
ON staff.id = shifts.staff_id
JOIN clients
ON shifts.client_id = clients.id
WHERE staff_id = {variable};

-- return shifts for particular days/dates
SELECT CONCAT (staff.first_name," ", staff.last_name) AS staff_name, start_time,end_time, shift_date, 
CONCAT (clients.first_name, ' ', clients.last_name) as client_name, client_location
FROM staff 
JOIN shifts
ON staff.id = shifts.staff_id
JOIN clients
ON shifts.client_id = clients.id
WHERE shift_date = "{variable}";

-- selecting all unassigned shifts within a date range

SELECT * FROM shifts
WHERE staff_id is NULL and shift_date BETWEEN "2019-10-17" AND "2019-10-18"


-- total number of unassigned shifts within a date range
SELECT  count(*) FROM shifts
WHERE staff_id is null and shift_date BETWEEN "2019-10-17" AND "2019-10-18"
group by staff_id;



ALTER TABLE shifts
ADD hours_worked DECIMAL (3,1);


-- Getting total of hours worked for particular staff within a date range

SELECT SUM(hours_worked)
FROM shifts
WHERE staff_id = 4 AND shift_date BETWEEN "2019-10-17" AND "2019-10-18";