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

CREATE OR ALTER FUNCTION CourseDuration(@id int)
returns int
as
begin
declare @duration int;
select @duration = datediff(YEAR, stdjoiningdate, stdpassoutdate) from studentdetails where stdid=@id;
return @duration;
end;
go

select stdid,stdname,dbo.CourseDuration(stdid) as courseyear from studentdetails;

create or alter function GetCurrentStudents()
returns table
as
return (select stdid,stdname,stddept,stdlanguage,stdjoiningdate,stdpassoutdate from studentdetails where stdpassoutdate >GETUTCDATE());
go

select * from dbo.GetCurrentStudents();