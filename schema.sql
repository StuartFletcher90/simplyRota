-- Database structure: list of tables and their columns

-- staff table:
id (int auto_increment primary key)
first name (varchar 100)
last name (varchar 100)
gender (varchar 1, not null)
hours_contracted (int)
username (varchar 100)
email (varchar 100)
user_password (varchar 100)
designation (varchar 100)
admin_status (varchar 1, not null)
driving_status (varchar 1, not null)
skills(varchar 255)
annual_leave_entitlement(int, not null)
comments (varchar 255),
created_at,


-- shifts table
id (int auto_increment primary key)
start_time time
end_time time
shift_date date 
client_id (int, foreign key with id column in clients table)
staff_id (int, foreign key with id column in non_admin table)
created_at,

-- clients table
id (int auto_increment primary key)
first name (varchar 100)
last name (varchar 100)
client_location (varchar 100)
email (varchar 100)
phone_number (int)
created_at
