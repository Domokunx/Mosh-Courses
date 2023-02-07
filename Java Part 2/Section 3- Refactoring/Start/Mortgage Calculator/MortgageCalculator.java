package com.codewithmosh;

import java.text.NumberFormat;

public class MortgageCalculator {
    private final static byte MONTHS_IN_YEAR = 12;
    private final static byte PERCENT = 100;

    private int principal;
    private byte years;
    private float annualInterest;

    public MortgageCalculator() {
        principal = (int) Console.readNumber("Principal: ", 1000, 1_000_000);
        annualInterest = (float) Console.readNumber("Annual Interest Rate: ", 1, 30);
        years = (byte) Console.readNumber("Period (Years): ", 1, 30);
    }
    public MortgageCalculator(int principal, float annualInterest, byte years) {
        this.principal = principal;
        this.annualInterest = annualInterest;
        this.years = years;
    }

    public double calculateBalance(short numberOfPaymentsMade) {
        float monthlyInterest = getMonthlyInterest();
        float numberOfPayments = getNumberOfPayments();

        double balance = principal
                * (Math.pow(1 + monthlyInterest, numberOfPayments) - Math.pow(1 + monthlyInterest, numberOfPaymentsMade))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        return balance;
    }

    public double calculateMortgage() {

        float monthlyInterest = getMonthlyInterest();
        float numberOfPayments = getNumberOfPayments();

        double mortgage = principal
                * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments))
                / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

        return mortgage;
    }

    public double[] getRemainingBalances(){
        var result = new double[getNumberOfPayments()];
        for (short month = 1; month <= result.length; month++) {
            result[month - 1] = calculateBalance(month);
        }
        return result;
    }

    private float getMonthlyInterest() {
        return annualInterest / PERCENT / MONTHS_IN_YEAR;
    }

    public int getNumberOfPayments() {
        return years * MONTHS_IN_YEAR;
    }
}
