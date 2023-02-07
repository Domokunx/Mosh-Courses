public class TextBox extends UIControl {
    private String text = ""; // Field

    public TextBox() {
        super(true);
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public void render() {
        System.out.println("render TextBox");
    }

    @Override
    public String toString(){
        return text;
    }
    public void clear() {
        text = "";
    }
}
