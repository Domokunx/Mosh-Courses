/* Basic Java Syntax
ReturnType Name(){

}
*/

/* ReturnTypes in Java:
* void = returns no value
* int = returns int value
* string = returns string value
* boolean = returns boolean value
*
*
* */

// All functions should be wrapped inside a class
class Main(){
    // Method is a function that is part of the class
    void main(){

    }
}

// Access Modifiers (in front of class and method declarations)
public class Main(){
    public void main(){

    }
}

// Primitives
/* Name : Bytes : Range
-----for storing whole numbers-----
* byte : 1 : [-128,127]
* short : 2 : [-32K,32K]
* int : 4 : [-2B,2B]
* long : 8 : [] **Ass 'L' as a suffix as compiler assumes it is an integer
-----for storing decimal values-----
* float : 4 : [] **Add 'F' as a suffix as compiler assumes it is a double
* double : 8 : []
-----for storing letters values-----
* char : 2 : []
-----for storing true/false-----
* boolean : 1 : [true/false]
*/

// References (for storing complex objects)
/* Similar to classes in Js.
* EG: Date now = new Date // new to allocate memory
*
* Types:
* String
* Date
* Point
* Array --> String[size] or int[size]
* */

// Difference is that references do not contain the value itself unlike primitives
// Therefore, changing the reference does not change the value
// Also, having multiple variables point to a single ref, changing that ref changes all the variable outputs
