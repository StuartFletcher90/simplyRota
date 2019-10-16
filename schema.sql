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
    comments VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()

)

-- Client table

CREATE table clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    client_location VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number INT NOT NULL UNIQUE,
    comments VARCHAR(255)
    
)


-- Shifts table

CREATE table shifts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    shift_date DATE NOT NULL,
    client_id INT NOT NULL,
    staff_id INT NOT NULL,
    FOREIGN KEY(client_id) REFERENCES clients(id),
    FOREIGN KEY(staff_id) REFERENCES staff(id)
)


INSERT INTO staff (first_name,last_name,gender,hours_contracted,username,email,user_password,job_title,admin_status,driving_status,skills,annual_leave_entitlement,comments)
VALUES ("Mo", "Wilkinson", "M",35, "athemir", "athemir@gmail.com", "question", "developer", "Y", "N", "funny", 25, "Asked no questions today"), ("Victoria", "Cory", "F",35, "vic", "vic@gmail.com", "answer", "developer", "Y", "Y", "high-fives", 25, "Can't help but high-five"), ("James", "Smith", "M",35, "jammie", "jammie@gmail.com", "jam", "senior carer", "N", "Y", "First-aid, diabetes care", 25, "Can't work on Saturdays"), ("Helen", "Churchill", "F",35, "helchurch", "helenc@gmail.com", "duck", "Junior Carer", "N", "N", "Nursing Qualification", 25, "Can do extra shifts");

INSERT INTO clients (first_name, last_name,client_location,email,phone_number,comments)
VALUES ("Virginia", "Peabody", "1 Applewood Drive", "mrsvpeabody@gmail.com", 01244123456, "Thinks she is a tennis"),
("John", "Smith", "4 Village Mews", "therealjohnsmith@gmail.com", 01234567898, "Needs 2 carers at a time"),
("Hyacinth", "Bucket", "12 Tulip Avenue", "flowersaremylife@gmail.com", 01244356937, "She is allergic to flowers"),
("Fred", "Kruger", "2 Elm Street", "nightmare@sleep.com", 01244666666, "Has anger issues");

INSERT INTO shifts (start_time, end_time, shift_date, client_id, staff_id) VALUES 
("09:00:00", "11:00:00", "2019-10-17", 2, 3),
("08:30:00", "16:30:00", "2019-10-18", 1, 3),
("12:30:00", "18:00:00", "2019-10-17", 1, 4),
("10:00:00", "15:30:00", "2019-10-18", 3, 4);

-- SQL queries
-- listing all shifts for one staff member

SELECT first_name, last_name, start_time,end_time, shift_date, client_id 
FROM staff 
JOIN shifts 
ON staff.id = shifts.staff_id
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



SELECT (end_time - start_time)/10000 from shifts where id = 4;

SELECT time(end_time) - time(start_time) from shifts where id = 3;
