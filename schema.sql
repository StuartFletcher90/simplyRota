create database simplyRota;
drop database simplyRota;
use simplyRota;


select * from staff;
select * from clients;
select * from shifts;

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

);

CREATE table clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    client_location VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number INT NOT NULL UNIQUE,
    comments VARCHAR(255)
    
);


CREATE table shifts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    shift_date DATE NOT NULL,
    client_id INT NOT NULL,
    staff_id INT ,
    hours_worked DECIMAL (3,1) NOT NULL,
    FOREIGN KEY(client_id) REFERENCES clients(id),
    FOREIGN KEY(staff_id) REFERENCES staff(id)
);


INSERT INTO staff (first_name,last_name,gender,hours_contracted,username,email,user_password,job_title,admin_status,driving_status,skills,annual_leave_entitlement,comments)
VALUES ("Mo", "Wilkinson", "M", 35, "athemir", "athemir@gmail.com", "question", "developer", "Y", "N", "funny", 25, "Asked no questions today"), 
("Victoria", "Cory", "F", 35, "vic", "vic@gmail.com", "answer", "developer", "Y", "Y", "high-fives", 25, "Can't help but high-five"), 
("James", "Smith", "M", 35, "jammie", "jammie@gmail.com", "jam", "senior carer", "N", "Y", "First-aid, diabetes care", 25, "Can't work on Saturdays"), 
("Helen", "Churchill", "F", 35, "helchurch", "helenc@gmail.com", "duck", "Junior Carer", "N", "N", "Nursing Qualification", 25, "Can do extra shifts"),
("Grace", "Lawson", "F", 35, "graceful", "g@dog.com", "dog", "Senior Carer", "N", "N", "first aid", 25, "Great with kids"),
("Todd", "Cook", "M", 35, "todd", "t@dog.com", "woof", "Junior Carer", "N", "N", "first aid", 25, "Can work nights"),
("Amanda", "Miranda", "F", 35, "amanda", "amiranda@outlook.com", "panda", "Senior Carer", "N", "Y", "Experience with autistic children and adults", 25, "Prefer to work mornings"),
("David", "Robinson", "M", 35, "Robin", "robinsond@gmail.com", "drob", "Carer", "N", "N", " ", 25, " "),
("Xsienia", "Komar", "F", 35, "boo", "xkomar@gmail.com", "vodka", "Junior Carer", "N", "Y", "first aid", 25, "Can do double shifts"),
("Ben", "Davies", "M", 35, "benn", "benn@outlook.com", "benn", "Senior Carer", "N", "N", " ", 25, " "),
("Antonia", "Vogue", "F", 35, "toni", "toniv@gmail.com", "vogue", "Carer", "N", "N", " ", 25, " "),
("Stuart", "Thompson", "M", 35, "stu", "st@gmail.com", "stu", "Carer", "N", "Y", "first aid", 25, " "),
("Tom", "Winters", "M", 35, "winters", "twinters@gmail.com", "winters", "Senior Carer", "N", "Y", "first aid", 25, " ");

INSERT INTO clients (first_name, last_name,client_location,email,phone_number,comments)
VALUES ("Virginia", "Peabody", "1 Applewood Drive", "mrsvpeabody@gmail.com", 01244123456, "Thinks she is a tennis"),
("John", "Smith", "4 Village Mews", "therealjohnsmith@gmail.com", 01234567898, "Needs 2 carers at a time"),
("Hyacinth", "Bucket", "12 Tulip Avenue", "flowersaremylife@gmail.com", 01244356937, "She is allergic to flowers"),
("Fred", "Kruger", "2 Elm Street", "nightmare@sleep.com", 01244666666, "Has anger issues");

INSERT INTO shifts (start_time, end_time, shift_date, hours_worked, client_id, staff_id) VALUES 
("01:00:00", "06:00:00", "2019-10-21", 5, 1, 10),
("05:00:00", "10:00:00", "2019-10-21", 5, 1, 5),
("12:00:00", "20:00:00", "2019-10-21", 8, 1, 7),
("18:00:00", "24:00:00", "2019-10-21", 6, 1, 13),
("20:00:00", "24:00:00", "2019-10-21", 4, 1, 9),
("00:00:00", "04:00:00", "2019-10-22", 4, 1, 9),
("08:00:00", "17:00:00", "2019-10-22", 9, 1, 11),
("12:00:00", "20:00:00", "2019-10-22", 8, 1, 7),
("01:00:00", "06:00:00", "2019-10-23", 5, 1, 6),
("04:00:00", "08:00:00", "2019-10-23", 4, 1, 12),
("07:00:00", "12:00:00", "2019-10-23", 5, 1, 5),
("00:00:00", "03:00:00", "2019-10-25", 3, 1, 13),
("10:00:00", "17:00:00", "2019-10-25", 7, 1, 11),
("13:30:00", "17:00:00", "2019-10-25", 3.5, 1, 8),
("20:00:00", "24:00:00", "2019-10-25", 4, 1, 9),
("00:00:00", "06:00:00", "2019-10-26", 6, 1, 4),
("04:00:00", "08:00:00", "2019-10-26", 4, 1, 10),
("10:30:00", "17:30:00", "2019-10-26", 7, 1, 12),
("20:00:00", "24:00:00", "2019-10-26", 4, 1, 7),
("00:00:00", "03:00:00", "2019-10-27", 3, 1, 7),
("04:00:00", "08:00:00", "2019-10-27", 4, 1, 10),
("06:00:00", "10:00:00", "2019-10-27", 4, 1, 6),
("13:30:00", "20:00:00", "2019-10-27", 6.5, 1, 5),
("15:00:00", "24:00:00", "2019-10-27", 9, 1, 9);

show columns from shifts;
select * from shifts;
