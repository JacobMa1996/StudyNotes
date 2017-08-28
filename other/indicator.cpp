#include<iostream>
#include<stdio.h>

using namespace std;

int sum(int num1,int num2) {
	return num1 + num2;  
} 

void swap(int &a,int &b)
{
     int temp;
     temp=a;
     a=b;
     b=temp;
     cout<<a<<""<<b<<"\n";
}

int main() 
{
	int n = 5;
	int *p = &n;
	int *q = p;
	
	cout<<p<<"\t"<<q<<endl;//0x6ffe2c 0x6ffe2c 
	
	cout<<*p<<"\t"<<*q<<endl;//5 5 
	
	int x=1;
    int y=2;
    swap(x,y);
    cout<<x<<""<<y<<"\n";
    return 0;
	
} 
