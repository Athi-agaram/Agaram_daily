package JDBC;

import java.sql.*;

public class MSSQLJDBCExample {
    public static void main(String[] args) {

        // Step 1: Connection details
        String url = "jdbc:sqlserver://localhost:1433;databaseName=jdbc_demo;encrypt=false";
        String user = "sa";           // your SQL Server username
        String password = "admin@123";     // your SQL Server password

        try {
            // Step 2: Load SQL Server JDBC Driver
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            // Step 3: Establish connection
            Connection con = DriverManager.getConnection(url, user, password);
            System.out.println("✅ Connected to SQL Server Successfully!");

            // Step 4: Create a statement
            Statement stmt = con.createStatement();

            // Step 5: Execute query
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // Step 6: Process results
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " | " + rs.getString("name") + " | " + rs.getInt("age"));
            }

            // Step 7: Close connections
            rs.close();
            stmt.close();
            con.close();
        } 
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}

// import java.sql.*;
 
// public class MSSQLJDBCExample {

//     public static void main(String[] args) {

//         // Connection details

//         String url = "jdbc:sqlserver://localhost:1433;databaseName=sample;encrypt=false";

//         String user = "sa";                // your SQL Server login

//         String password = "admin@123"; // replace with your actual password
 
//         try {

//             // Load the SQL Server JDBC driver

//             Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
 
//             // Create connection

//             Connection con = DriverManager.getConnection(url, user, password);

//             System.out.println("✅ Connected to SQL Server successfully!");
 
//             // Query example

//             Statement stmt = con.createStatement();

//             ResultSet rs = stmt.executeQuery("SELECT name FROM sys.databases");
 
//             System.out.println("📚 Databases:");

//             while (rs.next()) {

//                 System.out.println(" - " + rs.getString(1));

//             }
 
//             con.close();

//         } catch (Exception e) {

//             e.printStackTrace();

//         }

//     }

// }

 