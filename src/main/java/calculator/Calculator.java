/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculator;

/**
 *
 * @author Mathias
 */
public class Calculator implements ICalculator {

    public int add(int n1, int n2) {
        return n1+n2;
    }

    public int sub(int n1, int n2) {
        return n1-n2;
    }

    public int mul(int n1, int n2) {
       return n1*n2;
    }

    public int div(int n1, int n2) throws ArithmeticException {
        return n1/n2;
    }
    
}
