## CS 161 - Intro to Computer Science

### Homework: Loops and Arrays

In this assignment, you'll be working with arrays, loops, and nested loops. This assignment can be quite challenging, so start early. Don't get too frustrated if you can't figure out how to write a method. Use the design approaches that you've learned in class. Seek tutoring or office-hours help from me.

#### Student Outcomes

- Exposure to writing loops (and nested loops).
- Exposure to arrays.

#### Instructions

Open BlueJ and create a new project. Create a new class and name it `AdvancedLoops`. This class will not have any fields or constructors.


##### Part I: Nested Loops
Let's try our hand at writing some (doubly) nested loops.

1. **(Nested Loops)** Write a method `reveal()` which inputs an integer `n` and returns nothing. It gradually reveals each number 1, 2, 3, ..., up to `n`, on each line (see below). Ignore negative input. (Hint: For each row `r`, how many numbers do you need to print up to? How many dashes follow?)

    ```java
    AdvancedLoops loopie = new AdvancedLoops();
    loopie.reveal(4);
    1---
    12--
    123-
    1234

    loopie.reveal(8);
    1-------
    12------
    123-----
    1234----
    12345---
    123456--
    1234567-
    12345678
    ```

2. **(Nested Loops)** The factorial of $$x$$, written $$x!$$ is defined $$x \times (x-1) \times (x-2) \times ... \times 2 \times 1$$. There's a special case if $$x = 0$$, then $$x! = 1$$. Write a method `printFactorials()` which inputs an integer `n`. It prints out the factorial of all numbers between `0` and `n`. You may assume that `n` is nonnegative. 

    ```java
    AdvancedLoops loopie = new AdvancedLoops();
    loopie.printFactorials(5);
    0! == 1
    1! == 1
    2! == 2
    3! == 6
    4! == 24
    5! == 120

    loopie.printFactorials(0);
    0! == 1
    1! == 1

    loopie.printFactorials(1);
    0! == 1
    1! == 1

    loopie.printFactorials(20);
    0! == 1
    1! == 1
    2! == 2
    3! == 6
    4! == 24
    5! == 120
    6! == 720
    7! == 5040
    8! == 40320
    9! == 362880
    10! == 3628800
    11! == 39916800
    12! == 479001600
    13! == 6227020800
    14! == 87178291200
    15! == 1307674368000
    16! == 20922789888000
    17! == 355687428096000
    18! == 6402373705728000
    19! == 121645100408832000
    20! == 2432902008176640000
    ```

##### Part II: Arrays/Strings and Loops

Let's work on a couple methods that input arrays. The problems in this section can be solved *without* using nested loops.

3. **(Arrays + Loop)** Write a method called `rotateRight()` that inputs an array of Strings and shifts every element in the array one position to the right. The right-most item would then jump to the first position. Here are some things that can help.

    - An array of integers is declared using: `int[] arrayName`
    - You can always find the length of the array using: `arrayName.length`
    - To access a certain element of the array, use `arrayName[pos]` where `pos` is the integer address of the element you seek.

    ```java
    import java.util.Arrays;  // this is for printing arrays

    AdvancedLoops loopie = new AdvancedLoops();
    String[] list1 = {"A", "B", "C", "D", "E"};
    System.out.println(Arrays.toString(loopie.rotateRight(list1)));
    > [E, A, B, C, D]

    String[] list2 = {};
    System.out.println(Arrays.toString(loopie.rotateRight(list2)));
    > []
    ```


4. **(Strings + Loop)**  Write a method called `vowelRatio()` which inputs a String and returns the fraction of letters that are vowels in the string. Assume that `y` is not a vowel. Here are some things to remember about Strings that can help.

    - You can always find the length of the string using: `stringName.length()`
    - To access a certain character of the string, use `stringName.charAt(pos)` where `pos` is the integer address of the character you seek.
    - A single character `c`, which is of `char` type, can be compared to another character using `if (c == 'A')`

    ```java
    AdvancedLoops loopie = new AdvancedLoops();
    int[] list1 = {-4, -1, 2, 3, 4, 5, 6, 6};
    System.out.println(loopie.countEvens(list1));
    > 5

    int[] list2 = {};
    System.out.println(loopie.countEvens(list2));
    > 0
    ```


##### Part III: Arrays + Nested Loops
Let's write some algorithms that require nested loops to repeatedly iterate over arrays.

5. **(Arrays + Nested Loops)** Write a method called `barGraph()` which inputs an integer array and prints a horizontal bar graph based on the contents of that array. Say the array `[3, 6, 4]` is input. Your method should print 3 asterisks on the first line, followed by 6 asterisks on the next line, followed by 4 asterisks on the last line. You may assume all values in the array are nonnegative. Here's an example:

    ```java
    AdvancedLoops loopie = new AdvancedLoops();
    int[] list1 = {6, 4, 3, 5, 6};
    loopie.barGraph(list1);
    ******
    ****
    ***
    *****
    ******

    int[] list2 = {5};
    loopie.barGraph(list2);
    *****
    ```



##### Challenges
If you've got a good grasp on this stuff, and want a real challenge. Try this one.


- **(Arrays + Nested Loops)** Write a method called `median()` which inputs an integer array and returns the median. The median of an array is defined to be the value in the list that has an equal number of values larger and smaller than itself. For instance, the median of `[3, 5, 7, 3, 9, 8, 2]` is `5`, because there are three numbers less than 5, and three numbers greater than 5. For each value `x[i]` in the array `x`, you need to traverse the array again (skipping itserlf) and count up the values greater than and less than `x[i]` (keep two counters). If these counters are equal, then return `x[i]` to be the median.

    - The algorithm described above only works for odd-length arrays, so make sure you use those for input while testing. (How would you modify your algorithm to work with even-length arrays?)

      ```java
      AdvancedLoops loopie = new AdvancedLoops();
      int[] list1 = {6, 3, 5, 6, 4};
      System.out.println(loopie.median(list1));
      > 4

      int[] list2 = {7};
      System.out.println(loopie.median(list2));
      > 7
      ```

- **(Arrays + Nested Loops)** Write a method called `vertBarGraph()` which does the same as above, but prints a vertical bar graph. This method can be quite challenging. Give it your best shot! Here's an example of what it does.

  ```java
  AdvancedLoops loopie = new AdvancedLoops();
  int[] list1 = {6, 3, 4, 5, 6};
  loopie.vertBarGraph(list1);
  *       *
  *     * *
  *   * * *
  * * * * *
  * * * * *
  * * * * *
  ```


#### Program Defensively

You can't control how another user or program chooses to use your methods. For each method, think critically about all the things that could go wrong and cause an unintended result (e.g., a runtime error, infinite loop/recursion, etc.). Chances are, I'll be trying all kinds of inputs (negative values, zeroes, nulls, empty-strings, etc.) when I grade your program. The mark of a good programmer is one that can anticipate such scenarios ahead of time and ensure that their program handles all sorts of errors gracefully.

#### Commenting

Each and every method should have a "javadoc-style" comment above it (the ones that use `/* ... */`). For full credit, you should use the @param and @return tags as appropriate in these method comments. Each instance variable (field) should have a brief comment as well. Don't forget the main comment at the top of the class either - I'm looking for more than just a sentence or two.

#### Grading

```
This assignment will be graded out of a total of 60pts.

[10pts] printDownTriangle is implemented.

[10pts] printRightTriangle is fully implemented.

[15pts] reveal is implemented. It inputs a positive integer, n, and prints n lines
of output. Each line of output reveals one more digit.

[20pts] rotate is properly implemented. If N > 0, it should shift every item in the 
array one position to the right, and the right-most item would jump to the left-most 
spot. If N < 0, then it should go the reverse direction.

Misc.
[5pts] You provide Javadocs style comments for any new methods implemented. You include
sufficient inline comments to explain the logic of your methods.
```

#### Submitting Your Assignment

After you have completed the assignment, use the following to submit your work.
Exit BlueJ

- Open your computer's File Finder (some times called File Explorer). Locate the project folder.

- Right-click on the project folder, then:

  - If using Windows, select Send to then Zip file
  - If using MacOS, select Compress ... items
  - This step takes your selected creates a .zip file that you will submit to me.

  It's really important you got this right. If you have doubts, ask one of us to check for you! I recommend that you double-check by opening the zip file, and investigating the contents to ensure that all the files are in there.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting.

- Click on Submit Assignment, and you should be able to "browse" for your file

- Select the `.zip` you just created, and click Submit Assignment again to upload it.

- You may submit as often as you'd like before the deadline. I will grade the most recent copy.

#### Credits

Written by David Chiu.