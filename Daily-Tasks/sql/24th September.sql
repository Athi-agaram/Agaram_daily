CREATE OR ALTER PROCEDURE GetStudentName
    @stdid INT,
    @stdname VARCHAR(255),
    @stddept VARCHAR(255),
    @stdlanguage VARCHAR(255)
    
AS
    BEGIN
        INSERT INTO studentdetails 
            (stdid, stdname, stddept, stdlanguage)
        VALUES 
            (@stdid, @stdname, @stddept, @stdlanguage);

        PRINT 'Student added successfully';
    
END;
GO

EXEC GetStudentName 
    @stdid = 50, 
    @stdname = 'Nisha P', 
    @stddept = 'History', 
    @stdlanguage = 'English'
  
GO

SELECT * FROM STUDENTDETAILS;


--FUNCTION(scaler)

-- CREATE OR ALTER FUNCTION CourseDuration(@id int)
-- returns int
-- as
-- begin
-- declare @duration int;
-- select @duration = datediff(YEAR, stdjoiningdate, stdpassoutdate) from studentdetails where stdid=@id;
-- return @duration;
-- end;
-- go

-- select stdid,stdname,dbo.CourseDuration(stdid) as courseyear from studentdetails;

-- create or alter function GetCurrentStudents()
-- returns table
-- as
-- return (select stdid,stdname,stddept,stdlanguage,stdjoiningdate,stdpassoutdate from studentdetails where stdpassoutdate >GETUTCDATE());
-- go

-- select * from dbo.GetCurrentStudents();

-- -- 1. Create an audit trigger that logs changes to studentdetails table
-- CREATE TABLE StudentAuditLog (
--     LogID INT IDENTITY(1,1) PRIMARY KEY,
--     Action VARCHAR(20),
--     StudentID INT,
--     ChangedBy VARCHAR(100),
--     ChangedDate DATETIME
-- );

-- CREATE TRIGGER trg_StudentAudit
-- ON studentdetails
-- AFTER INSERT, UPDATE, DELETE
-- AS
-- BEGIN
--     SET NOCOUNT ON;
    
--     -- For INSERT operations
--     IF EXISTS (SELECT * FROM inserted) AND NOT EXISTS (SELECT * FROM deleted)
--     BEGIN
--         INSERT INTO StudentAuditLog (Action, StudentID, ChangedBy, ChangedDate)
--         SELECT 'INSERT', stdid, SYSTEM_USER, GETDATE()
--         FROM inserted;
--     END
    
--     -- For DELETE operations
--     IF EXISTS (SELECT * FROM deleted) AND NOT EXISTS (SELECT * FROM inserted)
--     BEGIN
--         INSERT INTO StudentAuditLog (Action, StudentID, ChangedBy, ChangedDate)
--         SELECT 'DELETE', stdid, SYSTEM_USER, GETDATE()
--         FROM deleted;
--     END
    
--     -- For UPDATE operations
--     IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
--     BEGIN
--         INSERT INTO StudentAuditLog (Action, StudentID, ChangedBy, ChangedDate)
--         SELECT 'UPDATE', stdid, SYSTEM_USER, GETDATE()
--         FROM inserted;
--     END
-- END;
-- GO
select * from dbo.GetCurrentStudents();

-- 1. Create an audit trigger that logs changes to studentdetails table
CREATE TABLE StudentAuditLog (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    Action VARCHAR(20),
    StudentID INT,
    ChangedBy VARCHAR(100),
    ChangedDate DATETIME
);

-- CREATE TRIGGER trg_StudentAudit
-- ON studentdetails
-- AFTER INSERT, UPDATE, DELETE
-- AS
-- BEGIN
--     SET NOCOUNT ON;
    
--     -- For INSERT operations
--     IF EXISTS (SELECT * FROM inserted) AND NOT EXISTS (SELECT * FROM deleted)
--     BEGIN
--         INSERT INTO StudentAuditLog (Action, StudentID, ChangedBy, ChangedDate)
--         SELECT 'INSERT', stdid, SYSTEM_USER, GETDATE()
--         FROM inserted;
--     END
    
--     -- For DELETE operations
--     IF EXISTS (SELECT * FROM deleted) AND NOT EXISTS (SELECT * FROM inserted)
--     BEGIN
--         INSERT INTO StudentAuditLog (Action, StudentID, ChangedBy, ChangedDate)
--         SELECT 'DELETE', stdid, SYSTEM_USER, GETDATE()
--         FROM deleted;
--     END
    
--     -- For UPDATE operations
--     IF EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted)
--     BEGIN
--         INSERT INTO StudentAuditLog (Action, StudentID, ChangedBy, ChangedDate)
--         SELECT 'UPDATE', stdid, SYSTEM_USER, GETDATE()
--         FROM inserted;
--     END
-- END;
-- GO
-- >>>>>>> 88b44738d398bd35c648fa6ee9fbd3620d4a19f4

-- 2. Create Views

-- View to show active students with their course duration
-- CREATE VIEW vw_ActiveStudents
-- AS
-- SELECT 
--     s.stdid,
--     s.stdname,
--     s.stddept,
--     s.stdlanguage,
--     s.stdjoiningdate,
--     s.stdpassoutdate,
--     dbo.CourseDuration(s.stdid) as course_duration_years
-- FROM 
--     studentdetails s
-- WHERE 
--     s.stdpassoutdate > GETUTCDATE();
-- GO

-- View to show department-wise student count
-- CREATE VIEW vw_DepartmentStats
-- AS
-- SELECT 
--     stddept,
--     COUNT(*) as total_students,
--     COUNT(CASE WHEN stdpassoutdate > GETUTCDATE() THEN 1 END) as active_students,
--     COUNT(CASE WHEN stdpassoutdate <= GETUTCDATE() THEN 1 END) as alumni_students
-- FROM 
--     studentdetails
-- GROUP BY 
--     stddept;
-- GO

-- -- Test the views
-- SELECT * FROM vw_ActiveStudents;
-- SELECT * FROM vw_DepartmentStats;
-- CREATE VIEW vw_ActiveStudents
-- AS
-- SELECT 
--     s.stdid,
--     s.stdname,
--     s.stddept,
--     s.stdlanguage,
--     s.stdjoiningdate,
--     s.stdpassoutdate,
--     dbo.CourseDuration(s.stdid) as course_duration_years
-- FROM 
--     studentdetails s
-- WHERE 
--     s.stdpassoutdate > GETUTCDATE();
-- GO

-- View to show department-wise student count
-- CREATE VIEW vw_DepartmentStats
-- AS
-- SELECT 
--     stddept,
--     COUNT(*) as total_students,
--     COUNT(CASE WHEN stdpassoutdate > GETUTCDATE() THEN 1 END) as active_students,
--     COUNT(CASE WHEN stdpassoutdate <= GETUTCDATE() THEN 1 END) as alumni_students
-- FROM 
--     studentdetails
-- GROUP BY 
--     stddept;
-- GO

-- Test the views
SELECT * FROM vw_ActiveStudents;
SELECT * FROM vw_DepartmentStats;
