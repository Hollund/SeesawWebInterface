#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <../iobb.h>  
#include <signal.h>  
#include <iostream>
using namespace std;


#define ir0 7
#define ir1 8
#define ir2 9
#define ir3 10
#define ir4 11
#define ir5 12
#define ir6 13
#define ir7 14



int main ()
{
  cout << "Hello World! ";
  cout << "I'm a C++ program";




}




void setup () {
    cout << "setup runnning...";

    // starting io lib
    iolib_init();  

    // GPIO direction 
    iolib_setdir(8, ir0, DigitalOut);  
    iolib_setdir(8, ir1, DigitalOut);  
    iolib_setdir(8, ir2, DigitalOut);  
    iolib_setdir(8, ir3, DigitalOut);  
    iolib_setdir(8, ir4, DigitalOut);  
    iolib_setdir(8, ir5, DigitalOut);  
    iolib_setdir(8, ir6, DigitalOut);  
    iolib_setdir(8, ir7, DigitalOut);  

    cout << "setup done";
}