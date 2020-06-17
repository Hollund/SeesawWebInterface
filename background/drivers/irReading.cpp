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

int not_finished=1;  
  
  
int main(void)  {  
  irsetup();

  while(not_finished)  {  
    if (is_high(8, ir0)) { cout << "ir0 high " ;iolib_delay_ms(500);  }
    if (is_high(8, ir1)) { cout << "ir1 high " ;iolib_delay_ms(500);  }
    if (is_high(8, ir2)) { cout << "ir2 high " ;iolib_delay_ms(500);  }
    if (is_high(8, ir3)) { cout << "ir3 high " ;iolib_delay_ms(500);  }
    if (is_high(8, ir4)) { cout << "ir4 high " ;iolib_delay_ms(500);  }
    if (is_high(8, ir5)) { cout << "ir5 high " ;iolib_delay_ms(500);  }
    if (is_high(8, ir6)) { cout << "ir6 high " ;iolib_delay_ms(500);  }
    if (is_high(8, ir7)) { cout << "ir7 high " ;iolib_delay_ms(500);  }

    iolib_delay_ms(500);  
  }  

  printf("\nBye\n");  
  iolib_free();  
  return(0);  
}  

void  check_root_user(void)  
{  
  if(geteuid()!=0)  
    printf("Run as root user! (or use sudo)\n");  
}  
  
void  
ctrl_c_handler(int dummyvar)  
{  
  not_finished=0;  
}  

void irsetup () {
    cout << "setup runnning...";

    // starting io lib
    iolib_init();  

    signal (SIGINT, ctrl_c_handler);  
    check_root_user();  

    // GPIO direction 
    iolib_setdir(8, ir0, DigitalIn);  
    iolib_setdir(8, ir1, DigitalIn);  
    iolib_setdir(8, ir2, DigitalIn);  
    iolib_setdir(8, ir3, DigitalIn);  
    iolib_setdir(8, ir4, DigitalIn);  
    iolib_setdir(8, ir5, DigitalIn);  
    iolib_setdir(8, ir6, DigitalIn);  
    iolib_setdir(8, ir7, DigitalIn);  

    cout << "setup done";
}