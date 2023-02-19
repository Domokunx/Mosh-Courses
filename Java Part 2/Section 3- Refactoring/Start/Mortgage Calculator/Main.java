package com.codewithmosh;

public class Main {

    public static void main(String[] args) {
        var mortgage = new MortgageCalculator(180_000, 4F, (byte)10);
        var report = new MortgageReport(mortgage);
        report.printMortgage();
        report.printPaymentSchedule();
    }
}
