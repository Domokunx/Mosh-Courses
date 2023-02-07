public class Browser {
    public void navigate(String address){
     String ip = findIpAddress(address);
     String html = sendHttpRequest(ip);
        System.out.println(html);
    }

    private String sendHttpRequest(String ip) {
        return "<html> <body>Hi</body> </html>";
    }

    private String findIpAddress(String address) {
        return "123.0.0.0";
    }
}
