/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package integrationtests;

import calculator.Calculator;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import junit.framework.ComparisonFailure;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import utils.HttpClient;

/**
 *
 * @author Mathias
 */
public class WebCalculatorTest {

    public WebCalculatorTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of div method, of class Calculator.
     */
    @Test
    public void testDiv() {
        System.out.println("div");
        int n1 = 10;
        int n2 = 2;
        Calculator instance = new Calculator();
        int expResult = 5;
        int result = instance.div(n1, n2);
        assertEquals(expResult, result);
    }

    @Test
    public void testAdd() {
        System.out.println("add test web");
        HttpClient instance = new HttpClient("http://localhost:7777/mavenproject2/calculator?");
        String expected = "{\"n1\" : 5, \"n2\" : 10, \"opreration\" : \"add\", \"res\" : \"15\"}";
        String res = "";
        try {
            res = instance.makeHttpRequest("operation=add&n1=5&n2=10");
        } catch (IOException ex) {
            System.out.println("Failure in makeHttpRequest");
        }
        assertEquals(expected, res);
    }

    @Test
    public void testMul() {
        System.out.println("add test web");
        HttpClient instance = new HttpClient("http://localhost:7777/mavenproject2/calculator?");
        String expected = "{\n"
                + "  \"n1\" : 5,\n"
                + "  \"n2\" : 10,\n"
                + "  \"opreration\" : \"mul\",\n"
                + "  \"res\" : 50\n"
                + "}";
        String res = "";
        try {
            res = instance.makeHttpRequest("operation=mul&n1=5&n2=10");
        } catch (IOException ex) {
            System.out.println("Failure in makeHttpRequest");
        }
        assertEquals(expected, res);
    }

    @Test
    public void testSub() {
        System.out.println("add test web");
        HttpClient instance = new HttpClient("http://localhost:7777/mavenproject2/calculator?");
        String expected = "{\n"
                + "  \"n1\" : 5,\n"
                + "  \"n2\" : 10,\n"
                + "  \"opreration\" : \"sub\",\n"
                + "  \"res\" : -5\n"
                + "}";
        String res = "";
        try {
            res = instance.makeHttpRequest("operation=sub&n1=5&n2=10");
        } catch (IOException ex) {
            System.out.println("Failure in makeHttpRequest");
        }
        assertEquals(expected, res);
    }

    @Test
    public void testDivWeb() {
        System.out.println("add test web");
        HttpClient instance = new HttpClient("http://localhost:7777/mavenproject2/calculator?");
        String expected = "{\n"
                + "  \"n1\" : 10,\n"
                + "  \"n2\" : 5,\n"
                + "  \"opreration\" : \"div\",\n"
                + "  \"res\" : 2\n"
                + "}";
        String res = "";
        try {
            res = instance.makeHttpRequest("operation=div&n1=10&n2=5");
        } catch (IOException ex) {
            System.out.println("Failure in makeHttpRequest");
        }
        assertEquals(expected, res);
    }
}
