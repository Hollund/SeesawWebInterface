#include <stdio.h>
#include <stdlib.h>
#include <../iobb/iobb.h>
#include <signal.h>  
#include <iostream>
using namespace std;

 //Declare pin functions 
#define stp 15
#define dir 16
#define MS1 17
#define MS2 18
#define EN  19

//Declare variables for functions
char user_input;
int x;
int y;
int state;
int not_finished=1;  


 //Main loop
void main() {

  while(Serial.available()){
      user_input = Serial.read(); //Read user input and trigger appropriate function
      digitalWrite(EN, LOW); //Pull enable pin low to allow motor control
      if (user_input =='1')
      {
         StepForwardDefault();
      }
      else if(user_input =='2')
      {
        ReverseStepDefault();
      }
      else if(user_input =='3')
      {
        SmallStepMode();
      }
      else if(user_input =='4')
      {
        ForwardBackwardStep();
      }
      else
      {
        Serial.println("Invalid option entered.");
      }
      resetEDPins();
  }
}




void setup() {
  iolib_setdir(8, stp, DigitalOut);
  iolib_setdir(8, dir, DigitalOut);
  iolib_setdir(8, MS1, DigitalOut);
  iolib_setdir(8, MS2, DigitalOut);
  iolib_setdir(8, EN,  DigitalOut); 
  resetEDPins(); //Set step, direction, microstep and enable pins to default states


  cout << "Begin motor control";
  cout << "Enter number for control option:";
  cout << "1. Turn at default microstep mode.";
  cout << "2. Reverse direction at default microstep mode.";
  cout << "3. Turn at 1/8th microstep mode.";
  cout << "4. Step forward and reverse directions.";


}

//Default microstep mode function
void StepForwardDefault()
{
  Serial.println("Moving forward at default step mode.");
  digitalWrite(dir, LOW); //Pull direction pin low to move "forward"
  for(x= 0; x<1000; x++)  //Loop the forward stepping enough times for motion to be visible
  {
    digitalWrite(stp,HIGH); //Trigger one step forward
    delay(1);
    digitalWrite(stp,LOW); //Pull step pin low so it can be triggered again
    delay(1);
  }
  Serial.println("Enter new option");
  Serial.println();
}

//Reverse default microstep mode function
void ReverseStepDefault()
{
  Serial.println("Moving in reverse at default step mode.");
  digitalWrite(dir, HIGH); //Pull direction pin high to move in "reverse"
  for(x= 0; x<1000; x++)  //Loop the stepping enough times for motion to be visible
  {
    digitalWrite(stp,HIGH); //Trigger one step
    delay(1);
    digitalWrite(stp,LOW); //Pull step pin low so it can be triggered again
    delay(1);
  }
  Serial.println("Enter new option");
  Serial.println();
}

// 1/8th microstep foward mode function
void SmallStepMode()
{
  Serial.println("Stepping at 1/8th microstep mode.");
  digitalWrite(dir, LOW); //Pull direction pin low to move "forward"
  digitalWrite(MS1, HIGH); //Pull MS1, and MS2 high to set logic to 1/8th microstep resolution
  digitalWrite(MS2, HIGH);
  for(x= 0; x<1000; x++)  //Loop the forward stepping enough times for motion to be visible
  {
    digitalWrite(stp,HIGH); //Trigger one step forward
    delay(1);
    digitalWrite(stp,LOW); //Pull step pin low so it can be triggered again
    delay(1);
  }
  Serial.println("Enter new option");
  Serial.println();
}

//Forward/reverse stepping function
void ForwardBackwardStep()
{
  Serial.println("Alternate between stepping forward and reverse.");
  for(x= 1; x<5; x++)  //Loop the forward stepping enough times for motion to be visible
  {
    //Read direction pin state and change it
    state=digitalRead(dir);
    if(state == HIGH)
    {
      digitalWrite(dir, LOW);
    }
    else if(state ==LOW)
    {
      digitalWrite(dir,HIGH);
    }

    for(y=0; y<1000; y++)
    {
      digitalWrite(stp,HIGH); //Trigger one step
      delay(1);
      digitalWrite(stp,LOW); //Pull step pin low so it can be triggered again
      delay(1);
    }
  }
  Serial.println("Enter new option:");
  Serial.println();
}

//Reset Easy Driver pins to default states
void resetEDPins()
{
  digitalWrite(stp, LOW);
  digitalWrite(dir, LOW);
  digitalWrite(MS1, LOW);
  digitalWrite(MS2, LOW);
  digitalWrite(EN, HIGH);
}

    