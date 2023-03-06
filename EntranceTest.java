import javax.swing.JOptionPane;
//Read name and last name, and display full name
public class EntranceTest{
   public static void main (String[] args){
      String name;
      name = JOptionPane.ShowInputDialog("Type your name: ");
      String lastname;
      lastname = JOptionPane.ShowInputDialog("Type your last name: );
      JOptionPane.ShowMessageDialog(null, "Your full name is: " + name + " " + lastname);
   }
}
      
      
