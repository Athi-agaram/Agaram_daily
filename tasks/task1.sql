use exercise;
go


CREATE OR ALTER PROCEDURE dbo.InsertOrLogTask
    @id INT,
    @name VARCHAR(255),
    @priority INT
AS
BEGIN
    SET NOCOUNT ON;

    
    IF EXISTS (SELECT 1 FROM dbo.task WHERE name = @name)
    BEGIN
      
        INSERT INTO dbo.nexttask (id, name, priority)
        VALUES (@id, @name, -1);
    END
    ELSE
    BEGIN
        
        INSERT INTO dbo.task (id, name, priority)
        VALUES (@id, @name, @priority);

        INSERT INTO dbo.nexttask (id, name, priority)
        VALUES (@id, @name, @priority);
    END
END;
GO


EXEC dbo.InsertOrLogTask 5, 'Task A', 9;
EXEC dbo.InsertOrLogTask 6, 'Task E', 2; 
EXEC dbo.InsertOrLogTask 7, 'Task C', 10;
exec dbo.InsertOrLogTask 8, 'Task A', 5;

select * from dbo.task;
select * from dbo.nexttask;
