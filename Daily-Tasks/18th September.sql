--IUTC TO LOCAL TIME
select GETUTCDATE() at time zone 'utc' at time zone 'India Standard Time' as 'IndiaTime';
--LOCAL TIME TO UTC
select getdate() at time zone 'india standard time' at time zone 'utc' as 'utctime';

--TO GET DATE FROM THE SERVER
SELECT GETDATE();        -- Current local datetime
SELECT SYSDATETIME();    -- More precise local datetime
SELECT GETUTCDATE();     -- Current UTC datetime
SELECT SYSUTCDATETIME(); -- More precise UTC datetime

--Extract parts of a date
SELECT 
    YEAR(GETDATE())   AS CurrentYear,
    MONTH(GETDATE())  AS CurrentMonth,
    DAY(GETDATE())    AS CurrentDay,
    DATEPART(HOUR, GETDATE()) AS CurrentHour;

--Add or subtract from dates
SELECT DATEADD(DAY, 7, GETDATE()) AS NextWeek;     -- 7 days later
SELECT DATEADD(MONTH, -1, GETDATE()) AS LastMonth; -- 1 month earlier
--Difference between dates
SELECT DATEDIFF(DAY, '2025-01-01', GETDATE()) AS DaysSinceNewYear;
--Formatting dates
SELECT FORMAT(GETDATE(), 'yyyy-MM-dd HH:mm:ss') AS ISOFormat;
SELECT FORMAT(GETDATE(), 'dddd, MMMM dd, yyyy') AS PrettyDate;


--TO GET ALL THE TIMEZONE
SELECT * FROM sys.time_zone_info;

--Store everything in UTC

--When inserting data, always use SYSUTCDATETIME() (not GETDATE()).

CREATE TABLE EventsS (
    EventId INT PRIMARY KEY,
    EventName VARCHAR(100),
    EventTimeUTC DATETIMEOFFSET  -- store in UTC
);

-- Insert UTC time
INSERT INTO Events (EventId, EventName, EventTimeUTC)
VALUES 
(1, 'User Login', SYSUTCDATETIME()),
(2, 'Order Placed', SYSUTCDATETIME());

--Convert when querying with AT TIME ZONE

--Let’s say you want to show the event times in different time zones:

SELECT 
    EventId,
    EventName,
    EventTimeUTC AT TIME ZONE 'UTC' AT TIME ZONE 'India Standard Time'   AS IndiaTime,
    EventTimeUTC AT TIME ZONE 'UTC' AT TIME ZONE 'Pacific Standard Time' AS US_PacificTime,
    EventTimeUTC AT TIME ZONE 'UTC' AT TIME ZONE 'Tokyo Standard Time'   AS JapanTime
FROM Events;

--TO CONVERT DYNAMICALLY

CREATE TABLE Users (
    UserId INT PRIMARY KEY,
    UserName VARCHAR(100),
    TimeZoneName NVARCHAR(100) -- e.g., 'India Standard Time', 'Pacific Standard Time'
);

-- Example users
INSERT INTO Users VALUES (1, 'Arun', 'India Standard Time'), (2, 'Mike', 'Pacific Standard Time');

-- Show events in each user’s local time
SELECT 
    u.UserName,
    e.EventName,
    e.EventTimeUTC AT TIME ZONE 'UTC' AT TIME ZONE u.TimeZoneName AS LocalEventTime
FROM Events e
JOIN Users u ON 1=1; -- rows are matched only when the condition is true

--List All Time Zones
SELECT * 
FROM sys.time_zone_info
ORDER BY name;

--CLUSTERED INDEX
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name NVARCHAR(100),
    Salary DECIMAL(10,2)
);

--UNIQUE CONSTRAINT 
ALTER TABLE Employees
ADD CONSTRAINT UQ_Employees_Name UNIQUE (Name);

--WITH FOREIGN KEY
CREATE TABLE OrdersS (
    OrderID INT PRIMARY KEY,
    EmpID INT FOREIGN KEY REFERENCES Employees(EmpID)
);

--TO RENAME A COLUMN
EXEC sp_rename 'Employees.EmpName', 'EmployeeName', 'COLUMN';

--INDEXING

CREATE TABLE OrdersSS (
    OrderID INT IDENTITY(1,1) PRIMARY KEY,  -- default clustered index
    CustomerID INT,
    OrderDate DATE,
    Amount DECIMAL(10,2),
    Status VARCHAR(20)
);

-- Insert sample rows
INSERT INTO OrdersSS (CustomerID, OrderDate, Amount, Status)
VALUES
(101, '2024-01-01', 500.00, 'Completed'),
(102, '2024-01-02', 250.00, 'Pending'),
(101, '2024-01-05', 900.00, 'Completed'),
(103, '2024-01-10', 300.00, 'Shipped'),
(104, '2024-01-12', 100.00, 'Pending'),
(101, '2024-01-15', 750.00, 'Completed');

--Clustered Index (default with PK)

--SQL Server automatically created a clustered index on OrderID because it’s the primary key.
--Try running this:

-- Will use clustered index (OrderID is sorted)
SELECT * FROM OrdersSS WHERE OrderID = 3;

--Non-Clustered Index

--Create an index on CustomerID to speed up customer lookups:

CREATE NONCLUSTERED INDEX IX_Orders_CustomerID
ON OrdersSS(CustomerID);

-- Test it
SELECT * FROM OrdersSS WHERE CustomerID = 101;

--Composite Index

--Suppose we often query by CustomerID + OrderDate:

CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_OrderDate
ON OrdersSS(CustomerID, OrderDate);

-- Test it
SELECT * FROM OrdersSS
WHERE CustomerID = 101 AND OrderDate >= '2024-01-01';

--Filtered Index

--Suppose 80% of rows are “Completed” but you often query only “Pending”:

CREATE NONCLUSTERED INDEX IX_Orders_Pending
ON OrdersSS(Status)
WHERE Status = 'Pending';

-- Test it
SELECT * FROM OrdersSS WHERE Status = 'Pending';

--Unique Index

--Prevent duplicate entries for a business rule (e.g., one order per customer per date):

CREATE UNIQUE NONCLUSTERED INDEX IX_Orders_Customer_Date
ON OrdersSS(CustomerID, OrderDate);

-- Test: This will fail (duplicate key)
INSERT INTO OrdersSS (CustomerID, OrderDate, Amount, Status)
VALUES (101, '2024-01-01', 600, 'Pending');

--Dropping Indexes

DROP INDEX IX_Orders_CustomerID ON Orders;
DROP INDEX IX_Orders_CustomerID_OrderDate ON Orders;
DROP INDEX IX_Orders_CustomerID_Covering ON Orders;
DROP INDEX IX_Orders_Pending ON Orders;
DROP INDEX IX_Orders_Customer_Date ON Orders;

EXEC sp_helpindex 'OrdersSS';
