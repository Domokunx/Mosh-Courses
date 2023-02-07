import java.text.NumberFormat;
import java.util.Scanner;
import java.lang.Math;

public class Main {
    final static byte PERCENT = 100;
    final static byte MONTHS_IN_YEAR = 12;

    public static void main(String[] args) {
        // Mortgage calculator
        Scanner scanner = new Scanner(System.in);

        int principal = (int) readNumber("Principal($1K - $100K): ", 1000, 1_000_000);
        float annualRate = (float) readNumber("Annual Interest: ", 0, 30);
        byte years = (byte) readNumber("Years: ", 0, 30);

        printMortgage(principal, annualRate, years);

        printPaymentSchedule(principal, annualRate, years);
    }

    private static void printMortgage(int principal, float annualRate, byte years) {
        double mortgage = calculateMortage(principal, years, annualRate);
        String formattedResult = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println(
                "\n"
                + "MORTGAGE\n"
                + "--------\n"
                + "Monthly Payments: " + formattedResult
                + "\n"
        );
    }

    private static void printPaymentSchedule(int principal, float annualRate, byte years) {
        System.out.println(
                "PAYMENT SCHEDULE\n"
                + "-----------------"
        );
        for (short month = 0; month < years * MONTHS_IN_YEAR + 1; month++) {
            double balance = calculateBalance(principal, years, annualRate, month);
            String formattedBalance = NumberFormat.getCurrencyInstance().format(balance);
            System.out.println(formattedBalance);
        };
    }

    public static double calculateMortage(int principal, byte years, float annualRate) {
        short numberOfPayments = (short)(years * MONTHS_IN_YEAR);
        float monthlyRate = annualRate / MONTHS_IN_YEAR / PERCENT;

        double mortgage = principal
                * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))
                / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        return mortgage;
    }

    public static double calculateBalance(int principal, byte years, float annualRate, short numberOfPaymentsMade) {
        short numberOfPayments = (short)(years * MONTHS_IN_YEAR);
        float monthlyRate = annualRate / MONTHS_IN_YEAR / PERCENT;

        double balance = principal
                * ((Math.pow(1 + monthlyRate, numberOfPayments) - Math.pow(1 + monthlyRate, numberOfPaymentsMade))
                / (Math.pow(1 + monthlyRate, numberOfPayments) - 1));
        return balance;
    }
    public static double readNumber(String prompt, double min, double max) {
        Scanner scanner = new Scanner(System.in);
        double number = 0;

        do {
            System.out.print(prompt);
            number = scanner.nextDouble();
            if (number < min || number > max){
                System.out.println("Enter a number between " + min + " and " + max);
            }
        }
        while (number < min || number > max);
        return number;
    }
}