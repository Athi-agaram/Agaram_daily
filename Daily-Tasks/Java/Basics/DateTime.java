import java.time.*;
import java.time.format.DateTimeFormatter;

public class DateTime {
    public static void main(String[] args) {

        // LocalDate - Only Date
        LocalDate today = LocalDate.now();
        System.out.println("Today's Date: " + today);

        LocalDate customDate = LocalDate.of(2022, 12, 25);
        System.out.println("Custom Date: " + customDate);

        System.out.println("Day of Month: " + today.getDayOfMonth());
        System.out.println("Month: " + today.getMonth());
        System.out.println("Year: " + today.getYear());

        // Add or Subtract days/months/years
        LocalDate nextWeek = today.plusWeeks(1);
        System.out.println("Next Week: " + nextWeek);

        LocalDate previousMonth = today.minusMonths(1);
        System.out.println("Previous Month: " + previousMonth);

        // Compare dates
        System.out.println("Is today after 2025-01-01? " + LocalDate.now().isAfter(LocalDate.of(2025, 1, 1)));

        // LocalTime - Only Time
        LocalTime nowTime = LocalTime.now();
        System.out.println("\nCurrent Time: " + nowTime);

        LocalTime customTime = LocalTime.of(14, 30, 15);
        System.out.println("Custom Time: " + customTime);

        // LocalDateTime - Both Date and Time
        LocalDateTime dateTimeNow = LocalDateTime.now();
        System.out.println("\nCurrent DateTime: " + dateTimeNow);

        // Formatting
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        System.out.println("Formatted DateTime: " + dateTimeNow.format(formatter));

        // ZoneId and ZonedDateTime
        ZoneId indiaZone = ZoneId.of("Asia/Kolkata");
        ZoneId newYorkZone = ZoneId.of("America/New_York");

        ZonedDateTime indiaTime = ZonedDateTime.now(indiaZone);
        ZonedDateTime newYorkTime = ZonedDateTime.now(newYorkZone);

        System.out.println("\nIndia Time: " + indiaTime);
        System.out.println("New York Time: " + newYorkTime);

        // Period - Difference between two dates
        LocalDate birthday = LocalDate.of(2000, 5, 15);
        Period age = Period.between(birthday, today);
        System.out.println("\nAge is: " + age.getYears() + " years, " + age.getMonths() + " months, " + age.getDays() + " days");

        // Duration - Difference between two times
        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(17, 30);
        Duration workHours = Duration.between(start, end);
        System.out.println("Work Duration: " + workHours.toHours() + " hours and " + workHours.toMinutesPart() + " minutes");
    }
}
