public class Main {
    public static void main(String[] args){
        var calculator = new TaxCalculator2018(1000_000);
        var report = new TaxReport();
        report.show(new TaxCalculator2019());
        report.show(calculator);
    }
}
