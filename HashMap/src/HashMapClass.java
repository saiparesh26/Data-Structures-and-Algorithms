import java.util.HashMap;
import java.util.Map;

public class HashMapClass {
    public static void main(String[] args) {
        HashMap<String,String> phoneBook = new HashMap<String, String>();
        // add elements
        phoneBook.put("Sanketh","1234");
        phoneBook.put("Vatsal","1534");
        phoneBook.put("Shubham","6734");
        phoneBook.put("Jibin","3356");
        phoneBook.put("Siddhesh","8879");

        System.out.println("The size of the phonebook is " + phoneBook.size());

        //Iterate through hashmap
        for (Map.Entry contact : phoneBook.entrySet()){
            System.out.println(contact.getKey() + " " + contact.getValue());
        }

        //search
        String key = "Vatsal";
        System.out.println("Vatsal's number is " + phoneBook.get(key));

        //check for key
        System.out.println(phoneBook.containsKey(key));

        //remove a key
        phoneBook.remove(key);
        for (Map.Entry contact : phoneBook.entrySet()){
            System.out.println(contact.getKey() + " " + contact.getValue());
        }
    }
}
