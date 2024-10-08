## CS 261 - Computer Science II

### Doubly Linked Lists

In this assignment you'll complete the `SinglyLinkedList` class that we've been working on to get some practice with linked structures. You'll add all the optimization features, including upgrading it into a `DoublyLinkedList`.

Fair warning: This assignment is tougher than it looks. Start early!


#### Student Objectives
- To understand the performance of various operations of a Linked List.
- To understand the optimizations put in place.
- To understand the utility of double links.

#### Required Files

The following file(s) have been provided for this homework.

- [Hwk_SinglyLinkedList.zip](Hwk_SinglyLinkedList.zip)


#### Preamble

This assignment is all about how to optimize our singly linked list. In order to understand the running time of its methods, I've added a couple of modifications to the `SinglyLinkedList` to count and report hops. A "hop" refers to each "link" that must be crossed to access a certain Node in the list. For instance,

```java
SinglyLinkedList<String> list = new SinglyLinkedList<>();
list.add("dopey");
list.add("doc");
list.add("donkey");
list.add("doughy");
list.add("dorky");
System.out.println("Hops taken " + list.getHopCount());
> Hops taken 6

System.out.println(list.toString());
> [dopey, doc, donkey, doughy, dorky]

System.out.println("Hops taken " + list.getHopCount());
> Hops taken 11
```

1. Take some time to look over the code that's in the class and understand how it works. Check out the "`LinkTester`" class, which contains a main method for testing your code. It creates a singly linked list of 10,000 elements, then sums all those elements traversing the list in forward and in reverse direction. Then it prints out the number of "hops" that it required. If you ran the main method, you should get the following output:

    ```
    Singly: 
    Adding 10000 elements:  took 49985001 hops
    Summing up: 49995000 took 49995000 hops
    Summing down: 49995000 took 49995000 hops
    Singly removing list: took 0 hops
    ```
    Try to understand why it requires this many hops to do these operations on only 10,000 elements. (The "removing list" took 0 hops only because the `remove()` methods haven't been implemented yet!)


2. Our book writes most of the methods in `SinglyLinkedList` when discussing linked structures, but there are two left for you to do: The 1-argument `remove()` method that takes an index and removes the item at that position from the list (while returning the data in that node), and the other 1-argument `remove()` method that takes an item and removes the first occurrence of that item from the list if it's found (return a `boolean`). Implement these two methods and test them before proceeding. 

    You should first complete the helper methods, `removeFirst()` and `removeAfter()`. Their "stubs" are given in the file. Like I did in class for addFirst and addAfter, you should start by drawing out what you need to happen to your "links" in order to delete the Node object. You do not need to traverse any nodes to complete these two helper methods. After you have completed these helper methods, then work on the `remove(..)` methods. Test them to ensure they're working. Try all sorts of edge cases until you are convinced. Here are a couple examples of how they should work.

    ```java
    SinglyLinkedList<String> list = new SinglyLinkedList<>();
    list.add("dopey");
    list.add("doc");
    list.add("doughy");
    list.add("dorky");

    System.out.println(list.toString());
    > [dopey, doc, doughy, dorky]

    list.remove(2);
    System.out.println(list.toString());
    > [dopey, doc, dorky]
    ```

    ```java
    SinglyLinkedList<String> list = new SinglyLinkedList<>();
    list.add("dopey");
    list.add("doc");
    list.add("doughy");
    list.add("dorky");

    list.remove("doc");
    System.out.println(list.toString());
    > [dopey, doughy, dorky]
    ```

<!-- 

3. When inserting, removing, or retrieving a value from a singly linked list, the list must first be traversed to get to an appropriate position in the list. That seems like it could lead to an awful lot of traversing. Modify your code so that it increments a counter each time a "hop" from one node to the next occurs. (Look for things like node = node.next in the code.) Implement the following methods:

    - `getHopCount()`: An accessor that returns the current value of the counter.
    - `resetHopCount()`: A void method that sets the count back to zero.

    Using these methods, we can now get a peek at the complexity of our methods. Try this out:

    ```java
    SinglyLinkedList<String> list = new SinglyLinkedList<>();
    list.add("dopey");
    list.add("doc");
    list.add("donkey");
    list.add("doughy");
    list.add("dorky");
    System.out.println("Hops taken " + list.getHopCount());
    > Hops taken 6

    System.out.println(list.toString());
    > [dopey, doc, donkey, doughy, dorky]

    System.out.println("Hops taken " + list.getHopCount());
    > Hops taken 11
    ```

    You should try to understand why it took 6 steps to add five elements to the tail of the singly linked list before moving on. -->

<!-- 
3. Now write a `ListTester` class with the following static methods:

    - `public static int sumUp(MyList<Integer> list)`: A method that takes a linked list of integers and returns the list's sum. It should work from the front of the list to the back (low index values to high).

    - `public static int sumDown(MyList<Integer> list)`: A method that takes a linked list of integers and returns the list's sum, working from the back of the list to the front (high index values to low).

    - A `main()` method that creates a list containing 10,000 integers, passes that list to `sumUp()`, then passes it to `sumDown()`. For full credit, main should print how many "hops" were required for each of those three steps (creating the list, summing up, and summing down). Don't forget to reset the hop counter between the steps. -->

<!-- 4. Next, write a method called `public void reverse()` that reverses the contents of your linked list. You should manipulate the `Node` objects directly: Identify the tail element, unlink it, and move it to the head. Then grab the new tail node and move it behind the new head, and so on. -->


#### Instructions

3. **Optimizing tail accesses:** As we know, the 1-argument `add()` method inserts a new item to the tail of the list. In practice, it is one of the most common operations on lists, so this has to be fast. In the current implementation, adding to the tail would be an $$O(n)$$ operation. 

    Modify your class so that it additionally stores a reference to the tail node. When adding an item to the end of the list, you'd just have to link it after tail node, and update the tail reference to refer to the new node. You just need to make the changes inside `addFirst()` and `addAfter()`. Similarly, you must also ensure that the "remove" methods update the tail too. Make any changes you need to `removeFirst()` and `removeLast()`.

4. **Location Caching (Iterator):** When calling `sumUp()`, it's really annoying that for each item in the list we have to start all over at the head again to find it. To get the $$ith$$ node, you'd currently have to make $$i−1$$ hops! (When adding the item at index 99 to the total, we have to start at the front of the list again and find index 99 even though we were just at index 98 on the previous iteration of the loop!) One improvement would be to add some internal state to our linked list class so that it "remembers" (or caches) the most recently-accessed position in the list.

    Add **two** new instance variables to `SinglyLinkedList`: An integer to record the most recently accessed position (index) in the list, and a `Node` reference that points to the corresponding list node. Modify your `getNodeAt()` method to take advantage of the new information when possible. For example, if we do a `get(107)` and the previous access to the list was at index `98`, the list traversal should start at `98` and work its way to `107` rather than starting at `0`. 

    After you make this modification to `getNodeAt()`, here's the cost of adding 10000 integers (from 0 to 9999), summing up, and summing down, respectively.

    ```
    > Adding 10000 elements: took 0 hops
    > Summing up: 49995000 took 9998 hops
    > Summing down: 49995000 took 49995001 hops
    ```

    We've managed to make left-to-right accesses to the list much faster through location caching... but notice that summing down is still taking a lot of steps! That's because, to gradually access the list in reverse order, we still need to start from the head when identifying the next node.

5. **Understanding the Need for Double Links:** Even after all the enhancements we've made, there are still two major concerns with the singly linked list's performance. [1] a reverse (backward) traversal of the singly linked list would be a really costly operation (you saw that with `sumDown()` already), and [2] removing any element (including  `tail`) is still slow, because you always need to find the deleted `Node`'s previous `Node` in order to link up the remaining list. To illustrate problem [1], try running something like the following, and observe how many hops it takes:

    ```java
    SinglyLinkedList<String> list = new SinglyLinkedList<>();
    list.add("dopey");
    list.add("doc");
    list.add("doughy");
    list.add("dorky");
    list.resetHopCount();

    for (int i = list.size()-1; i >= 0; i--) {
        System.out.println(list.get(i));
    }
    System.out.println("Hops taken to traverse list in reverse order: " + list.getHopCount());
    > Hops taken to traverse list in reverse order: 6
    ```

    What's the running time of the above loop in terms of Big-O? Hint: It's worse than $$O(n)$$. Why   is this? Because we're accessing the list in reverse order, the iterator is not helping us at all. The `getNodeAt()` method has to reset and start from 0 for every call, because the current index is less than the previous index.

    To illustrate problem [2], try the following:

    ```java
    SinglyLinkedList<String> list = new SinglyLinkedList<>();
    list.add("dopey");
    list.add("doc");
    list.add("doughy");
    list.add("dorky");
    list.resetHopCount();

    // remove all items from the tail
    for (int i = 0; i < list.size(); i++) {
        list.remove(list.size()-1);
    }
    System.out.println("Hops taken to remove given item: " + list.getHopCount());
    > Hops taken to remove given item: 6
    ```

    Notice that removing from the tail still requires hops! But why? We added a tail reference! Ah, the problem is that, in order to remove from the tail, it is calling `removeAfter()`. This means it must first find the node preceding the tail node, requiring O(n) time, so having a tail reference doesn't help at all when removing the tail node (it only helps in adding to the tail).

6. **Implementing Double links:** Instead of only storing a reference to the next node, what if each node also stored a reference to its previous node? Such a structure is called a doubly linked list (and is the true implementation of Java's `LinkedList` class).

    - Rename `SinglyLinkedList` to `DoublyLinkedList`. Add a pointer to the previous item in all `Nodes`, and add the necessary code to update that pointer to `addFirst`, `addAfter`, `removeFirst`, `removeAfter`.

    - Next, change the `getNodeAt()` helper method to traverse in the appropriate direction, depending on the value of the given index, and the current location of the iterator (location cache):

        - If the given index is to the left of the iterator, but is closer to the head, then traverse right starting from the head. (This is currently what's being done)

        - If the given index is to the right of the iterator, and is closer to the iterator than it is to the tail, then traverse right starting from the iterator. (This is currently what's being done)

        - If the given index is to the right of the iterator, but is closer to the tail, then traverse left (using the previous links) from the tail.

        - If the given index is to the left of the iterator, and is closer to the iterator than the head, then traverse left (using the previous links) from the iterator.

        - Don't forget to update the "hop counts" when traversing left too!

    - After you make this modification, here's the cost of adding 10000 integers (from 0 to 9999), summing up, and summing down, respectively.

        ```
        Adding 10000 elements:  took 0 hops
        Summing up: 49995000 took 9998 hops
        Summing down: 49995000 took 9998 hops
        ```

    - Here's another test. I wrote a loop to remove the last element from the list 10000 times. Here's the before and after:

        ```
        Still singly linked. Remove-last 10000 times: took 49985001 hops
        After doubly linked. Remove-last 10000 times: took 9999 hops
        ```

#### Grading
```
CS 261 Homework (Linked List)


----------------------------------------------------------
[20pts] Implementation of the Remove methods


> Completion of removeFirst(), removeAfter(),
remove(int index), and remove(E item)

> Your remove methods consider updating the tail reference
when appropriate.

> Your remove methods should also ensure that both the next
and previous references are linked up properly after the
removal of a node.


----------------------------------------------------------
[10pts] Tail reference

> You added a tail reference to the linked list class that
points to the last Node in the list.

> The tail reference is updated correctly on calls to
add() and remove().

> getNodeAt(index) has been updated to consider using the tail
reference when appropriate.


----------------------------------------------------------
[20pts] Iterator

> Appropriate fields (instance variables) have been added,
used, and updated to provide location caching to getNode().

> getNodeAt(index) must be updated to take advantage of the iterator,
and save loop iterations when traversing.

> The iterator must also be used and updated in getNodeAt(index) when
traversing backwards in a Doubly-Linked list.


----------------------------------------------------------
[30pts] Double Links

> Nodes now know their previous and next Nodes.

> Modify addFirst, addAfter, removeFirst, removeAfter so that
the previous nodes are linked up as well.

> Modify getNodeAt(index) so that the following properties are ensured:

  * The starting position begins at the iterator, or head, or tail
    depending on what the given index is closer to.

  * The "direction" that you need to move the iterator need to be considered:
    1) Go right (using the "next" pointers) if index > starting position.
    2) Go left (using the "previous" pointers) if index < starting position.

> Ensure that iterating through the list in reverse order is O(n).

> Ensure that removing the tail element is O(1).


----------------------------------------------------------
[5pts] Comments

> You include sufficient Javadocs comments for each class and method.

> You include sufficient inline comments in your methods.


----------------------------------------------------------
[0pts] Misc. Deductions


----------------------------------------------------------
Suggestions (No Deductions)


Total: 85 pts possible.
```

#### Submitting Your Assignment
Follow these instructions to submit your work. You may submit as often as you'd like before the deadline. I will grade the most recent copy.

- If this is a team assignment, please ensure that you listed all of your team members in a Javadocs comment at the top of each `.java` file.

- Navigate to our course page on Canvas and click on the assignment to which you are submitting. Click on "Submit Assignment."

- Upload all the files ending in `.java` from your project folder.

- Click "Submit Assignment" again to upload it.