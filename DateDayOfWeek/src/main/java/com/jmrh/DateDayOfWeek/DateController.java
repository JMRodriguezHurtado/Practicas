package com.jmrh.DateDayOfWeek;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

@RestController
public class DateController {

    // Define a GET request that accepts day, month, and year as query parameters
    @GetMapping("/dayOfWeek")
    public String getDayOfWeek(
        @RequestParam("day") int day, 
        @RequestParam("month") int month, 
        @RequestParam("year") int year) {
        
        // DateTimeFormatter to parse the date
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/M/yyyy");

        try {
            // Create a LocalDate object from the user's input
            LocalDate date = LocalDate.of(year, month, day);

            // Get the day of the week for the date
            String dayOfWeek = date.getDayOfWeek().toString();

            // Return the result
            return "The day of the week for " + day + "/" + month + "/" + year + " is: " + dayOfWeek;
        } catch (DateTimeParseException e) {
            // Handle invalid date input
            return "Invalid date. Please check the format (day/month/year).";
        }
    }
}
