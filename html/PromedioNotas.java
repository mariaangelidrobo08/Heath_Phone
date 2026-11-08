import java.util.Scanner;
public class PromedioNotas {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        double nota;
        double suma = 0;
        for(int i = 1; i <= 5; i++){
            System.out.print("la nota " + i + ":");
            nota = entrada.nextDouble();
            suma = suma + nota;

        }
        double promedio = suma / 5;
        System.out.println("suma de las notas: " + suma);
        System.out.println("promedio de notas: " + promedio);
        entrada.close();
    }
}    
