--CREATE DATABASE
create database sample;
--CREATE TABLE
create table Customer(id int primary key,custname varchar(255),city varchar(255));
--INSERT VALUES
insert into Customer (id,custname,city) values (1,'John','Chennai'); 
insert into Customer (id,custname,city) values (2,'Marc','chennai'); 
insert into Customer (id,custname,city) values (3,'Vijay','Mumbai'); 
insert into Customer (id,custname,city) values (4,'Ajith','madurai'); 
insert into Customer (id,custname,city) values (5,'Mary','Kolkata'); 
insert into Customer (id,custname,city) values (6,'Priya','Kochi'); 
insert into Customer (id,custname,city) values (7,'Jonathan','Pune'); 
--VIEW ALL
select * from Customer;
--UPDATE A RECORD
update customer set city='Kochi' where id=2;
select * from customer;
--ADD A COLUMN
alter table customer add email varchar(255);
select * from customer;
--ALTER A DATADYPE OF A COLUMN
alter table customer alter column custname varchar(100); 
--DROP A COLUMN
alter table customer drop email;
select * from customer;
--CREATE NEW TABLE WITH DECIMAL DATATYPE
create table orders(id int primary key, orderdate date,amount decimal(10,2),custid int foreign key references customer(id));
--INSERT MULTIPLE VALUES IN A TABLE
--while inserting multiple values ',' comma is must!!!!
--quotes are important for dates!!!!
insert into orders (id,orderdate,amount,custid) values (101,'2025-09-11',12000.56,1),(102,'2025-09-12',1200.20,3),(103,'2025-09-13',12000.31,4),
(104,'2025-09-14',12000.34,2),(105,'2025-09-15',12000.98,2),(106,'2025-09-16',5000.85,5),(107,'2025-09-17',12000.34,6),(108,'2025-09-18',52000.54,7);
select * from orders;
--UPDATING MULTIPLE VALUES
--for updating multiple values comma is used not 'and'!!!
update Customer set city='Bangalore', custname='Vijay Kumar' where id=3;
select * from customer;
--DELETE A RECORD 
--since custid is a foreign key referencing the customer table, 1st delete the id in order table then in the customer table!!!
delete from orders where custid=6;
delete from customer where id=6;
--TO TRUNCATE -> TO DELETE THE RECORDS
--to delete the records and not the table!!
truncate table orders;
select * from orders;
--TO SELECT USING PARTICULAR ID
select * from customer where city='chennai';
--LIKE FOR SIMILAR PATTERN
--Like is used for patterns
select * from customer where custname Like'j%';
--COUNT FUNTION AND GROUP BY 
--count(*) is used to find the total count of city and grouped by city
select city,count(*) as totalCustomer from customer group by city order by city;
--NOT OPERTORS
--not from chennai=> either '!=' or '<>'
select * from customer where city!='chennai';
select * from customer where city <>'chennai';
--TO SORT USING ORDER BY
select * from customer order by custname;
--SELECT TOP NUMBERS
--top number star 
select top 3 * from customer;
--INSERTING DATE DATA TYPE
--while inserting multiple values ',' comma is must!!!!
--quotes are important for dates!!!!
insert into orders (id,orderdate,amount,custid) values (101,'2025-09-11',12000.56,1),(102,'2025-09-12',1200.20,3),(103,'2025-09-13',12000.31,4),
(104,'2025-09-14',12000.34,2),(105,'2025-09-15',12000.98,2),(106,'2025-09-16',5000.85,5),(107,'2025-09-17',12000.34,6),(108,'2025-09-18',52000.54,7);
select * from orders;


--INNER JOIN
--inner join - since the id in customer table and order table are same so set order table id as orderid!!!
select c.id,c.custname,c.city,o.id as orderid,o.orderdate,o.amount from customer c inner join orders o on c.id=o.custid ;
--LEFT JOINS
select  c.id,c.custname,c.city,o.id as orderid,o.orderdate,o.amount from customer c left join orders o on c.id=o.custid;
--TO SHOW RECORDS WITH NULL VALUE
--to show all customers with null order
select  c.id,c.custname,c.city from customer c left join orders o on c.id=o.custid where o.id is null;
--TO JOIN ORDER TABLE WITH CUSTOMER NAME
select o.id as orderid,o.orderdate,o.amount,c.custname,c.city from orders o join customer c on c.id =o.custid;
--FIND TOTAL NUMBER OF CUSTOMERS
select count(*) as totalcustomers from customer;
--FIND TOTAL NUMBER OF ORDERS
select count(*) as totalorders from orders;
--FIND MIN,MAX AND AVG AMOUNT
select min(amount) as minAmout,max(amount) as maxAmout,avg(amount) as avgAmout from orders;
--COUNT NUMBER OF CUSTOMERS IN EACH CITY
select city,count(*) as totalcustomer from customer group by city;
--TOTAL ORDER AMOUNT PLACED BY EACH CUSTOMER
select c.custname,sum(o.amount) as totalamount from customer c join orders o on c.id=o.custid group by c.custname having sum(o.amount)<2000;
--CUSTOMERS WHO SPENT LESS THAN 2000
select * from orders where amount<2000;
--TOP 3 ORDERS IN DESCENDING FORM
select top 3 * from orders order by amount desc;
--FINDING CUSTOMERS FROM CHENNAI WHO PLACED AN ORDER
select c.id,c.custname,c.city, o.id as orderid,o.orderdate,o.amount from customer c join orders o on c.id=o.custid where c.city='chennai';

--DATE AND TIME
select getdate() as time;
select sysdatetime();
select getutcdate();
select sysutcdatetime();
--TO GET AS PARTS
select year(getdate()) as currentyear,
		month(getdate()) as currentmonth,
		day(getdate()) as currentday,
		datepart(hour,getdate()) as currenthour;
--TO ADD OR SUB
select dateadd(day,7,getdate()) as nextweek;--after 1 week
select dateadd(month,-1,getdate()) as lastmonth;--1 month earlier
--DATE DIFFERENCE
select datediff(day,'2025-01-01',getdate()) as dayssinceneyear;
--FORMATTING
-- Only month and hour capital!!!!
select format(getdate(), 'yyyy:MM:dd HH:mm:ss');
select format(getdate(), 'dddd,dd,MM,yyyy');
--STORING UTC DATE TIME
--either use DATETIME2 OR DATETIMEOFFSET!!!
create table Eventlogs(
id int primary key,
utcTime Datetimeoffset default sysutcdatetime()
);
insert into Eventlogs(id) values (1);
select * from Eventlogs;
--TO SWITCH FROM UTC TO LOCAL TIME
SELECT SWITCHOFFSET(SYSDATETIMEOFFSET(), DATENAME(TZOFFSET, SYSDATETIMEOFFSET())) AS LocalTime;
