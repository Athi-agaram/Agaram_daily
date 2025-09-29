create database college1;
go

use college1;
go

create table arts (artsid int primary key,artsdeptname varchar(255),artslanguages varchar(255),artsstudentscount int,artsstaffcount int);

create table engg (enggid int primary key,enggdeptname varchar(255),engglanguages varchar(255),enggstudentscount int,enggstaffcount int);

create table med (medid int primary key,meddeptname varchar(255),medlanguages varchar(255),medstudentscount int,medstaffcount int);

create table studentdetails (stdid int primary key,stdname varchar(255),stddept varchar(255),stdlanguage varchar(255),stdjoiningdate datetime2,stdpassoutdate datetime2);

create nonclustered index idx_passoutdate on studentdetails(stdpassoutdate);

insert into arts(artsid, artsdeptname, artslanguages, artsstudentscount, artsstaffcount)
values 
(101,'Economics','English',1200,150),
(102,'History','English',1300,140),
(103,'Political Science','English',1500,120),
(104,'English','English',1300,110),
(105,'Political Science','Tamil',1200,150),
(106,'History','Tamil',1300,140),
(107,'Political Science','Tamil',1500,120),
(108,'Economics','Tamil',1300,110),
(109,'Tamil','Tamil',1300,140),
(110,'Sociology','English',1500,120),
(111,'Sociology','Tamil',1300,110),
(112,'Hindi','Hindi',1200,150),
(113,'History','Hindi',1300,140),
(114,'Political Science','Hindi',1500,120),
(115,'Economics','Hindi',1300,110),
(116,'Sociology','Hindi',2400,110),
(117,'History','Sanskrit',1300,140),
(118,'Political Science','Sanskrit',1500,120),
(119,'Sanskrit','Sanskrit',1300,110),
(120,'History','Sanskrit',1300,140),
(121,'Political Science','Sanskrit',1500,120);
insert into arts(artsid, artsdeptname, artslanguages, artsstudentscount, artsstaffcount)
values 
(124,'Economics','Sanskrit',2700,190),
(125,'History','French',1300,140);

insert into engg(enggid, enggdeptname, engglanguages, enggstudentscount, enggstaffcount)
values 
(201,'IT','English',1200,150),
(202,'CSE','English',1300,140),
(203,'MECH','English',1500,120),
(204,'EEE','English',1300,110),
(205,'ECE','English',1200,150),
(206,'CIVIL','English',1300,140),
(207,'CYBER','English',1500,120),
(208,'AIML','English',2700,110),
(209,'ADS','English',1300,140),
(210,'ROBOTICS','English',1500,120),
(211,'BIOTECH','English',1300,110),
(212,'CSE','Tamil',1300,140),
(213,'IT','Tamil',1200,150),
(214,'MECH','Tamil',1500,120),
(215,'EEE','Tamil',1300,110),
(216,'CIVIL','Tamil',1300,140),
(217,'CYBER','Tamil',1500,120),
(218,'AIML','Tamil',1300,110),
(219,'ADS','Tamil',1300,140),
(220,'ROBOTICS','Tamil',1500,120),
(221,'BIOTECH','Tamil',1300,110);
insert into engg(enggid, enggdeptname, engglanguages, enggstudentscount, enggstaffcount)
values 
(223,'IT','Hindi',2900,150),
(224,'CSE','Hindi',1300,200);

insert into med(medid, meddeptname, medlanguages, medstudentscount, medstaffcount)
values 
(101,'Pharmacy Department','English',1200,150),
(102,'Emergency Department','English',1300,140),
(103,'Surgery Department','English',1500,120),
(104,'ICU','English',1300,110),
(105,'Cardiology Department','Tamil',1200,150),
(106,'Neurology Department','Tamil',1300,140),
(107,'Pediatrics Department','Tamil',1500,120),
(108,'Psychiatry Department','Tamil',1300,110),
(109,'Radiology Department','Tamil',1300,140),
(110,'Laboratory Department','English',1500,120),
(111,'Nursing Department','Tamil',1300,110),
(112,'Technical Departments','Hindi',1700,150),
(113,'Clinical Department','Hindi',1300,140),
(114,'Orthology Department','Hindi',1500,120);
insert into med(medid, meddeptname, medlanguages, medstudentscount, medstaffcount)
values 
(117,'Pharmacy Department','French',1700,150),
(118,'Emergency Department','French',1300,180);

insert into studentdetails(stdid, stdname, stddept, stdlanguage, stdjoiningdate, stdpassoutdate)
values 
(1, 'Anjali F', 'Economics', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE())),
(2, 'Rahul A', 'CSE', 'English', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(3, 'Meena B', 'Pharmacy Department', 'English', GETUTCDATE(), DATEADD(YEAR, 5, GETUTCDATE())),
(4, 'Karthik S', 'History', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE())),
(5, 'Divya W', 'CIVIL', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(6, 'Anjali F', 'Economics', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE())),
(7, 'Divya Q', 'CIVIL', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE()));

insert into studentdetails(stdid, stdname, stddept, stdlanguage, stdjoiningdate, stdpassoutdate)
values 
(41, 'Anjali F', 'Economics', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE())),
(38, 'Divya Q', 'CIVIL', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(39, 'Divya Q', 'CIVIL', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(40, 'Meena B', 'Pharmacy Department', 'English', GETUTCDATE(), DATEADD(YEAR, 5, GETUTCDATE()));

insert into studentdetails(stdid, stdname, stddept, stdlanguage, stdjoiningdate, stdpassoutdate)
values 
(42, 'John', 'Economics', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE())),
(43, 'Kevin', 'CIVIL', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(44, 'John', 'Economics', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE())),
(45, 'Kevin', 'CIVIL', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(46, 'John', 'Economics', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE())),
(47, 'Kevin', 'CIVIL', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE()));

insert into studentdetails(stdid, stdname, stddept, stdlanguage, stdjoiningdate, stdpassoutdate)
values
(30, 'Vijay K', 'Radiology Department', 'English', GETUTCDATE(), DATEADD(YEAR, 5, GETUTCDATE())),
(31, 'Sneha R', 'IT', 'English', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(32, 'Kavya G', 'ICU', 'English', GETUTCDATE(), DATEADD(YEAR, 5, GETUTCDATE())),
(33, 'Ashu A', 'History', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE()));
insert into studentdetails(stdid, stdname, stddept, stdlanguage, stdjoiningdate, stdpassoutdate)
values
(34, 'Vijay D', 'Radiology Department', 'Tamil', GETUTCDATE(), DATEADD(YEAR, 5, GETUTCDATE())),
(35, 'Sneha V', 'IT', 'English', GETUTCDATE(), DATEADD(YEAR, 4, GETUTCDATE())),
(36, 'Kavya M', 'ICU', 'English', GETUTCDATE(), DATEADD(YEAR, 5, GETUTCDATE())),
(37, 'Asmitha W', 'History', 'English', GETUTCDATE(), DATEADD(YEAR, 3, GETUTCDATE()));


insert into studentdetails(stdid, stdname, stddept, stdlanguage, stdjoiningdate, stdpassoutdate)
values
(20, 'Priya S', 'History', 'English', '2017-06-01 08:00:00', '2020-05-30 08:00:00'),
(21, 'Arvind R', 'CSE', 'English', '2016-07-15 08:00:00', '2019-06-01 08:00:00'),
(22, 'Sneha O', 'Pharmacy Department', 'English', '2015-08-01 08:00:00', '2018-05-30 08:00:00'),
(23, 'Ravi P', 'Economics', 'Tamil', '2014-06-01 08:00:00', '2017-05-30 08:00:00');

insert into studentdetails(stdid, stdname, stddept, stdlanguage, stdjoiningdate, stdpassoutdate)
values
(24, 'Lakshmi W', 'Sociology', 'English', '2021-07-01 08:00:00', '2024-06-01 08:00:00'),
(25, 'Vishal K', 'MECH', 'Tamil', '2021-08-15 08:00:00', '2025-06-01 08:00:00'),
(26, 'Deepa N', 'Clinical Department', 'Hindi', '2021-09-01 08:00:00', '2024-05-30 08:00:00'),
(27, 'Manoj O', 'ADS', 'English', '2021-06-01 08:00:00', '2025-05-30 08:00:00');


--1.TO FIND MAXIMUM COUNT ANS TOTAL COUNT 

--show the department name
select 'Arts' as College,
       (select top 1 artsdeptname from arts order by artsstudentscount desc) as Department,
       max(artsstudentscount) as MaxStudentCount,
       max(artsstaffcount) as MaxStaffCount,
       sum(artsstudentscount) as TotalStudentCount,
       sum(artsstaffcount) as TotalStaffCount
from arts
union all
select 'Engg',
       (select top 1 enggdeptname from engg order by enggstudentscount desc),
       max(enggstudentscount),
       max(enggstaffcount),
       sum(enggstudentscount),
       sum(enggstaffcount)
from engg
union all
select 'Med',
       (select top 1 meddeptname from med order by medstudentscount desc),
       max(medstudentscount),
       max(medstaffcount),
       sum(medstudentscount),
       sum(medstaffcount)
from med;

--table alias
select 'Arts' as College,s.stdid as StudentID,s.stdname as StudentName,s.stddept as StudentDepartment,s.stdlanguage as 
Languages,s.stdjoiningdate as JoiningDate,s.stdpassoutdate as PassoutDate,
a.artsstudentscount as StudentCount,a.artsstaffcount as StaffCount from studentdetails s
join arts a on s.stddept = a.artsdeptname and s.stdlanguage = a.artslanguages
union 
select 'Engg' as College,s.stdid,s.stdname,s.stddept,s.stdlanguage,s.stdjoiningdate,s.stdpassoutdate,e.enggstudentscount,e.enggstaffcount from studentdetails s
join engg e on s.stddept = e.enggdeptname and s.stdlanguage = e.engglanguages
union 
select 'Med' as College,s.stdid,s.stdname,s.stddept,s.stdlanguage,s.stdjoiningdate,s.stdpassoutdate,m.medstudentscount,m.medstaffcount
from studentdetails s
join med m on s.stddept = m.meddeptname and s.stdlanguage = m.medlanguages
order by College,StudentName ;


select * from arts
--with duplicate names
select s.stdname as StudentName,s.stddept as StudentDepartment,s.stdlanguage as Languages,s.stdjoiningdate as JoiningDate,
    s.stdpassoutdate as PassoutDate from studentdetails s order by s.stdname;

	--without duplicate names
select distinct s.stdname as StudentName,s.stddept as StudentDepartment,s.stdlanguage as Languages,s.stdjoiningdate as JoiningDate,
    s.stdpassoutdate as PassoutDate from studentdetails s order by s.stdname;


--utc to local and loal to utc
select stdpassoutdate at time zone 'utc' at time zone 'India Standard time' as after2021 from studentdetails 
where stdpassoutdate  > '2021-12-31';

select stdpassoutdate at time zone 'India Standard time' at time zone 'utc' as before2021 from studentdetails
where stdpassoutdate < '2021-01-01';

select stdpassoutdate at time zone 'India Standard time' at time zone 'utc' as between2021and2025 from studentdetails
where stdpassoutdate  between '2021-01-01' and '2025-12-31';

