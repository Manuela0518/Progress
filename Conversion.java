import javax.JOptionPane;
public class Conversion{
  public static void main (String[] args){
    String adjunct = JOptionPane.ShowInputDialog("enter the temperature in celsius: ");
    double c = Double.parseDouble(adjunct);
    double f = c * 9 / 5 + 32
    JOptionPane.ShowMessageDialog(null, "result: " + c + "°C = " + f + "°F");
  }
}
  
