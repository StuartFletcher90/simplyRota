create database simplyRota;
use simplyRota;

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
VALUES ("Mo", "Wilkinson", "M",35, "athemir", "athemir@gmail.com", "question", "developer", "Y", "N", "funny", 25, "Asked no questions today"), 
("Victoria", "Cory", "F",35, "vic", "vic@gmail.com", "answer", "developer", "Y", "Y", "high-fives", 25, "Can't help but high-five"), 
("James", "Smith", "M",35, "jammie", "jammie@gmail.com", "jam", "senior carer", "N", "Y", "First-aid, diabetes care", 25, "Can't work on Saturdays"), 
("Helen", "Churchill", "F",35, "helchurch", "helenc@gmail.com", "duck", "Junior Carer", "N", "N", "Nursing Qualification", 25, "Can do extra shifts");

INSERT INTO clients (first_name, last_name,client_location,email,phone_number,comments)
VALUES ("Virginia", "Peabody", "1 Applewood Drive", "mrsvpeabody@gmail.com", 01244123456, "Thinks she is a tennis"),
("John", "Smith", "4 Village Mews", "therealjohnsmith@gmail.com", 01234567898, "Needs 2 carers at a time"),
("Hyacinth", "Bucket", "12 Tulip Avenue", "flowersaremylife@gmail.com", 01244356937, "She is allergic to flowers"),
("Fred", "Kruger", "2 Elm Street", "nightmare@sleep.com", 01244666666, "Has anger issues");

INSERT INTO shifts (start_time, end_time, shift_date, hours_worked, client_id, staff_id) VALUES 
("09:00:00", "11:00:00", "2019-10-17",2 , 2, 3),
("08:30:00", "16:30:00", "2019-10-18", 8, 1, 3),
("12:30:00", "18:00:00", "2019-10-17", 5.5, 1, 4),
("10:00:00", "15:30:00", "2019-10-18", 5.5, 3, 4),
("14:00:00", "18:30:00", "2019-10-18",4.5 , 3, null),
("10:00:00", "15:30:00", "2019-10-18", 5.5, 3, null);

show columns from shifts;
select * from shifts;
