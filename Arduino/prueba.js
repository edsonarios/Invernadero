// #define BATCARG 2     // declaramos las constantes con los pines donde conectamos los leds
// #define BATMEDCARG 3  // donde la salida 2, 3, 4 seran indicadores de carga de bateria
// #define BATDESCARG 4  // rojo amarillo verde , descargado media carga y cargado al 100%
// #define ANALOGBAT 0   // pin analogico
// // Variables
// int analogValor = 0;   //declarar variables
// float voltaje = 0;  
// int ledDelay = 800;
 
// // Umbrales
// float maximo = 1.29;    //definir unbrales maximo medio y minimo
// float medio = 1.24;
// float minimo = 1.19;


// #include <Wire.h>
// #include "RTClib.h"   // incluye libreria de reloj
// RTC_DS3231 RTC;
// #include "DHT.h"      // incluye libreria de temperatura
// #define DHTPIN 2
// #define DHTTYPE DHT11
// DHT dht(DHTPIN, DHTTYPE);

// int Temp = 25;           // Parámetro  para el encendido de los ventiladores
// int r_diaSemana;         // almacena el resultado del dia de la semana calculado
// const int RELE  = 13;    // rele1 ventilador
// const int RELE1 = 12;    // rele2 conecta a la bateria
// const int RELE2 = 11;    // rele3 conecta al motor dc
// int segundo;
// int minuto;
// int hora;

// int h1_c1 = 1;    int m1_c1 = 0;   int s1_c1 = 0; // cambia la  hora  programada
// int h3_c1 = 4;    int m3_c1 = 0;   int s3_c1 = 0;
// int h4_c1 = 23;   int m4_c1 = 0;   int s4_c1 = 0;
// int h5_c1 = 14;   int m5_c1 = 20;  int s5_c1 = 0;

// void setup() {
//   Serial.begin(9600);
//   dht.begin();
//     //RTC.adjust(DateTime(__DATE__, __TIME__)); //para que el arduino pueda tener un buen funcionamiente se debe carga 
//     //la primera vez esta linea sin comentario y la segunda carga se debe cargar como comentario
//     //esta linea Lee la fecha y hora del PC para que a la segunda carga no busque la hora de la pc 
//   Wire.begin();
//   RTC.begin();
//   pinMode(8, OUTPUT);       //define salida de los pines 
//   pinMode(9, OUTPUT);
//   pinMode(10, OUTPUT);
//   pinMode(RELE, OUTPUT);    //define salida de los pines para cargar la bateria
//   pinMode(RELE1, OUTPUT);
//   pinMode(RELE2, OUTPUT);
  
//   pinMode(BATCARG, OUTPUT);    //salida de led indicadores de la carga de la bateria
//   pinMode(BATMEDCARG, OUTPUT);
//   pinMode(BATDESCARG, OUTPUT);

// }
// void loop() {
//   float t = dht.readTemperature();
//   //Serial.println("Temperatura: ");  Se imprimen las variables
//   //Serial.println(t);  Quitar comentarios si desea imprimir la temperatura
//   if (t >= Temp) {
//     digitalWrite(8, HIGH);
//     digitalWrite(9, HIGH);
//     digitalWrite(10, LOW);
//   }
//   if (t < Temp) {
//     digitalWrite(8, LOW);
//     digitalWrite(9, LOW);
//     digitalWrite(10, HIGH);
//   }
//   delay(100);

//   DateTime now = RTC.now();         // Obtiene la fecha y hora del RTC
//   Serial.print(now.year(), DEC);  // A€o
//   Serial.print('/');
//   Serial.print(now.month(), DEC); // Mes
//   Serial.print('/');
//   Serial.print(now.day(), DEC);   // Dia
//   Serial.print(' ');
//   Serial.print(now.hour(), DEC);  // Horas
//   Serial.print(':');
//   Serial.print(now.minute(), DEC); // Minutos
//   Serial.print(':');
//   Serial.print(now.second(), DEC); // Segundos
//   Serial.println();
//   delay(300);
//   segundo = now.second();
//   minuto  = now.minute();
//   hora    = now.hour();
//   //delay(3000);

//   int r_diaSemana = dia_de_semana();
//   // Dias de carga de la bateria  SE ACTIVA EL RELE
//   if (r_diaSemana == 1 || r_diaSemana == 2 || r_diaSemana == 3  || r_diaSemana == 4 || r_diaSemana == 5 || r_diaSemana == 6 || r_diaSemana == 0) { // si el contacto4 de Fin de semana esta apagado y es fin de semana no hace nada
// //hora de carga de la bateria
//     if ((hora == h1_c1) && (minuto == m1_c1) && (segundo == s1_c1)){
//       digitalWrite(RELE, HIGH);
//       digitalWrite(RELE1, HIGH);
//       digitalWrite(RELE2, LOW);
//       Serial.println("INICIO");
//       }
//     if ((hora == h3_c1) && (minuto == m3_c1) && (segundo == s3_c1)|| (hora == h5_c1) && (minuto == m5_c1) && (segundo == s5_c1)  )
//     {
//       digitalWrite(RELE, LOW);
//       digitalWrite(RELE1, LOW);
//       digitalWrite(RELE2, HIGH);
//       Serial.println("CONECTAR MOTOR");
//     }
//   }
//   if (r_diaSemana == 1 || r_diaSemana == 2  || r_diaSemana == 3 || r_diaSemana == 4 || r_diaSemana == 5 || r_diaSemana == 6 || r_diaSemana == 0) {

//     if ((hora == h4_c1) && (minuto == m4_c1) && (segundo == s4_c1) || (hora == h4_c1) && (minuto == m4_c1) && (segundo == s4_c1) )
//     {
//       digitalWrite(RELE2, LOW);
//       Serial.println("DESACTIVAR MOTOR");
//     }
//   }
//  // Leemos valor de la entrada analógica
//   analogValor = analogRead(ANALOGBAT);
//   // Obtenemos el voltaje
//   voltaje = 0.0048 * analogValor;
//   Serial.print("Voltaje: ");
//   Serial.println(voltaje);
//   // Dependiendo del voltaje mostramos un LED u otro
//   if (voltaje >= maximo)
//   {
//     digitalWrite(BATCARG, HIGH);
//     delay(ledDelay);
//     digitalWrite(BATCARG, LOW);
//     Serial.println(" bateria cargada al 100% ");  
//   }
//   else if (voltaje < maximo && voltaje > medio)
//   {
//     digitalWrite(BATMEDCARG, HIGH);
//     delay(ledDelay);
//     digitalWrite(BATMEDCARG, LOW);
//     Serial.println("bateria cargada al 50% ");
//   }
//   else if (voltaje < medio && voltaje > minimo)
//   {
//     digitalWrite(BATDESCARG, HIGH);
//     delay(ledDelay);
//     digitalWrite(BATDESCARG, LOW);
//     Serial.println("bateria cargada al 5% ");
//   }
//   // Apagamos todos los LEDs
//   digitalWrite(BATCARG, LOW);
//   digitalWrite(BATMEDCARG, LOW);
//   digitalWrite(BATDESCARG, LOW);
// }

// int dia_de_semana() {
//   // Encuentar el dia de la semana de una fecha
//   int n_dia;
//   int r_dia;
//   int n_mes;
//   int t_mes;
//   int n_anno;
//   int d_anno;
//   int t_siglo = 6;
// //formula calculo de mes fecha y hora
//   DateTime now = RTC.now();        //fecha y hora del RTC
//   n_anno = (now.year() - 2000);
//   d_anno = n_anno / 4;
//   n_dia = now.day();
//   n_mes = now.month();

//   switch (n_mes) {
//     case 1:
//       t_mes = 0;
//       break;
//     case 2:
//       t_mes = 3;
//       break;
//     case 3:
//       t_mes = 3;
//       break;
//     case 4:
//       t_mes = 6;
//       break;
//     case 5:
//       t_mes = 1;
//       break;
//     case 6:
//       t_mes = 4;
//       break;
//     case 7:
//       t_mes = 6;
//       break;
//     case 8:
//       t_mes = 2;
//       break;
//     case 9:
//       t_mes = 5;
//       break;
//     case 10:
//       t_mes = 0;
//       break;
//     case 11:
//       t_mes = 3;
//       break;
//     case 12:
//       t_mes = 5;
//       break;
//     default:
//       t_mes = t_mes;
//       break;
//   }
  
//   r_dia = n_dia + t_mes + n_anno + d_anno + t_siglo;
//   r_dia = r_dia % 7;
  
//   switch (r_dia) {
//     case 1:
//       Serial.print(" Lun ");
//       break;
//     case 2:
//       Serial.println(" Mar ");
//       break;
//     case 3:
//       Serial.print(" Mie ");
//       break;
//     case 4:
//       Serial.print(" Jue ");
//       break;
//     case 5:
//       Serial.print(" Vie ");
//       break;
//     case 6:
//       Serial.print(" Sab ");
//       break;
//     case 0:
//       Serial.print(" Dom ");
//       break;
//     default:
//       Serial.print(" ---");
//       break;
//   }
//   return r_dia;
// }





