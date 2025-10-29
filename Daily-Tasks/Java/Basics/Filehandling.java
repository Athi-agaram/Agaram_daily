import java.io.*;
import java.util.*;
public class Filehandling {
    public static void main(String[] args) {
        try{
         File file=new File("example.txt");
            if(file.createNewFile()){
                System.out.println("File created");
            }
            else{
                System.out.println("File already exists");
            }
        }
        catch(IOException e){
            e.printStackTrace();
        }

        //write in a file
        try{
            FileWriter writer=new FileWriter("example.txt");
            writer.write("Hello this is a file");
            writer.close();
            System.out.println("Successfully written to the file");
        }
        catch(IOException e){
            e.getStackTrace();
        }

        //append
        try{
            FileWriter writer=new FileWriter("example.txt",true);
            writer.write("\nThis is the extra line");
            writer.close();
        }
        catch(IOException e){
            e.printStackTrace();
        }
        
        //read the file
        try{

            Scanner reader=new Scanner(new File("example.txt"));
            while(reader.hasNextLine()){
                String data=reader.nextLine();
                System.out.println(data);
            }
            reader.close();

        }
        catch(IOException e){
            e.printStackTrace();
    }

    try( 
        BufferedReader br=new BufferedReader(new FileReader("example.txt"));
        BufferedWriter bw=new BufferedWriter(new FileWriter("Buffered.txt"))){
                String line;
                while((line=br.readLine())!=null){
                        bw.write(line);
                        bw.newLine();
                }
         }
         catch(IOException e){
            e.printStackTrace();
         }

         try
         (FileInputStream in=new FileInputStream("example.txt");
         FileOutputStream out=new FileOutputStream("newfile.txt");){
            byte[] buffer=new byte[1024];
            int bytesRead;
            while((bytesRead=in.read(buffer))!=-1){
                out.write(buffer,0,bytesRead);
            }
         }
         catch(IOException e){
            e.printStackTrace();
         }

         File newFolder=new File("MyFolder");
         if(newFolder.mkdir()){
            System.out.println("Folder created");
         }
         else{
            System.out.println("Folder already exists");
         }

    //file properties-to get name, get the absolute path, canwrite, canread, length
    File file=new File("example.txt");
    if(file.exists()){
        System.out.println("Name: "+file.getName());
        System.out.println("Path: "+file.getAbsolutePath());
        System.out.println("Writable: "+file.canWrite());
        System.out.println("Readable: "+file.canRead());
        System.out.println("Size in bytes: "+file.length());
    }

}
}
