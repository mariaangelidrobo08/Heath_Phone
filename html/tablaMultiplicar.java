import java.util.Scanner;
public class tablaMultiplicar {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        System.out.print("ingrese un numero: ");
        int numero = entrada.nextInt();

        System.out.print("\n Tabla del " + numero);
        for (int i = 1; i <= 10; i++){
            int resultado = numero * i;
            System.out.print(numero + "+" + i + "=" + resultado);
        }
        entrada.clase();
    }
}