#include <stdio.h>
#include <stdlib.h>
#include <signal.h>  
#include <iostream>  
#include <../iobb/iobb.h>
using namespace std;

#define ir0 7
#define ir1 8
#define ir2 9
#define ir3 10
#define ir4 11
#define ir5 12
#define ir6 13
#define ir7 14

int not_finished=1;  

int main () {
  if (irsetup() == 1) {   
      cout << "Hello World! ";
      cout << "I'm a C++ program";
    
      while(not_finished) {
        if (is_high(ir0, 12)) { cout << "ir0 high";}
        if (is_high(ir1, 12)) { cout << "ir1 high";}
        if (is_high(ir2, 12)) { cout << "ir2 high";}
        if (is_high(ir3, 12)) { cout << "ir3 high";}
        if (is_high(ir4, 12)) { cout << "ir4 high";}
        if (is_high(ir5, 12)) { cout << "ir5 high";}
        if (is_high(ir6, 12)) { cout << "ir6 high";}
        if (is_high(ir7, 12)) { cout << "ir7 high";}

        iolib_delay_ms(100);
      }
      iolib_free();  
      cout << "operation done";

    }
    else {
      cout << "error, setup failed";

  }
}




int irsetup () {
    cout << "setup runnning...";

    // starting io lib
    iolib_init();  

    signal (SIGINT, ctrl_c_handler);  
    check_root_user();  

    // GPIO direction 
    iolib_setdir(8, ir1, DigitalIn);  
    iolib_setdir(8, ir2, DigitalIn);  
    iolib_setdir(8, ir3, DigitalIn);  
    iolib_setdir(8, ir0, DigitalIn);  
    iolib_setdir(8, ir4, DigitalIn);  
    iolib_setdir(8, ir5, DigitalIn);  
    iolib_setdir(8, ir6, DigitalIn);  
    iolib_setdir(8, ir7, DigitalIn);  

    cout << "setup done";

    return 1;
}


void check_root_user(void) {  
  cout << "did you run as super user ? ok ? then dont worry";
}  
  
void  
ctrl_c_handler(int dummyvar)  
{  
  not_finished=0;  
} 