let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
    {
      name: "Community Statement",
      url: "community"
    },
    {
      name: "Notes and Sample Code",
      url: "https://canvas.pugetsound.edu"
    },
    {
      name: "Download Google Drive App",
      url: "https://www.google.com/drive/download/"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 1",
        title: "Warmup: Letter Counter",
        url: "hwk1.lc/",
        due: "9/4/2023",
      },
      {
        name: "Hwk 2",
        title: "TicTacToe Player",
        url: "hwk2.ttt/",
        due: "9/13/2023",
      },
      {
        name: "Hwk 3",
        title: "You Complete Me",
        url: "hwk3.ycm/",
        due: "9/25/2023",
      },
      {
        name: "Hwk 4",
        title: "Sentiment Predictor",
        url: "hwk4.sent/",
        due: "10/6/2023",
      },
      {
        name: "Hwk 5",
        title: "Doubly Linked List",
        url: "hwk5.LL/",
        due: "10/18/2023",
      },
      {
        name: "Hwk 6",
        title: "Ranked Choice Voting",
        url: "hwk6.rcv",
        due: "10/30/2023",
      },
      {
        name: "Hwk 7",
        title: "Recursion",
        url: "hwk7.rec",
        due: "11/13/2023",
      },
      // {
      //   name: "Hwk 7",
      //   title: "Evil Hangman",
      //   url: "https://cs.pugetsound.edu/~dchiu/cs261/hwk6.ehm",
      //   due: "11/13/2023",
      // },
      {
        name: "Hwk 8",
        title: "Data Compression (Huffman)",
        url: "hwk8.huff",
        due: "12/4/2023",
      },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "Review: Around the Farm",
        url: "lab1.farm/",
        due: "8/31/2022",
      },
      {
        name: "Lab 2",
        title: "Inheritance Lab",
        url: "lab2.dice/",
        due: "9/7/2022",
      },
      {
        name: "Lab 3",
        title: "Abstract Classes Lab",
        url: "lab3.lib/",
        due: "9/14/2022",
      },
      {
        name: "Lab 4",
        title: "Interface Lab ",
        url: "lab4.interface/",
        due: "9/21/2022",
      },
      {
        name: "Lab 5",
        title: "Exceptions Lab",
        url: "lab5.exc/",
        due: "9/28/2022",
      },
      {
        name: "Lab 6",
        title: "ArrayLists Lab",
        url: "lab6.AL/",
        due: "10/12/2022",
      },
      {
        name: "Lab 7",
        title: "Stacks and Queues Lab",
        url: "lab7.melody/",
        due: "10/26/2022",
      },
      {
        name: "Lab 8",
        title: "Recursion Lab",
        url: "https://cs.pugetsound.edu/~dchiu/cs261/lab8/",
        due: "11/2/2022",
      },
      {
        name: "Lab 9",
        title: "Expression Trees (Recursive Structs)",
        url: "https://cs.pugetsound.edu/~dchiu/cs261/lab9.expr",
        due: "11/16/2022",
        },
        {
          name: "Lab 10",
          title: "BST Lab",
          url: "https://cs.pugetsound.edu/~dchiu/cs261/lab10/",
          due: "11/23/2022",
        },
        {
          name: "Lab 11",
          title: "Maps Lab",
          url: "https://cs.pugetsound.edu/~dchiu/cs261/lab11.map/",
          due: "11/30/2022",
        },
        // {
        //   name: "Lab 12",
        //   title: "Sorting Lab",
        //   url: "https://cs.pugetsound.edu/~dchiu/cs261/lab12.sorters/",
        //   due: "12/7/2022",
        // },
    ],
  },
  lectures: [
    // wk 1
    "Introductions: Who are we? Syllabus",
    "Lab 1: Review",
    "Inheritance: motivation, abstraction",
    "Inheritance (cont.): this(), super()",
    // wk 2
    "<strong><emph>Labor Day<br/>(No Class)</emph></strong>",
    "Lab 2: Inheritance Lab",
    "Object class, instanceof, down-casting, @Override",
    "Polymorphism, dynamic  dispatch",
    // wk 3
    "Abstract classes",
    "Lab 3: Abstract classes Lab",
    "Interfaces and implementations",
    "Multiple implementation, Comparable<T>",
    // wk 4
    "Start exceptions",
    "Lab 4: Interfaces",
    "Exceptions: throwing, catching",
    "Customizing exceptions; Start Big-O",
    // wk 5
    "Big-O",
    "Lab 5: Exception Lab",
    "Big-O",
    "Big-O (binary search)",
    // wk 6
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    "List interface, ArrayList: add(), rellocation",
    "ArrayList: Generics; Big-O analysis",
    // wk 7
    "Linked list: Inner classes; get(), set()",
    "Lab 6: ArrayList and Generics lab",
    "Linked list: indexOf(), add()",
    "Linked list optimizations (tail, iterator)",
    // wk 8
    "<strong>Fall Break</strong>",
    "<strong>Fall Break</strong>",
    "Stacks, Infix Algo",
    "Queue, PriorityQueue, Dijkstra's Algo",
    // wk 9:
    "PriorityQueue, Dijkstra's Algo",
    "Lab 7: Stacks and Queues",
    "Start recursion: setup and tracing",
    "Recursion (cont.): code reading, common pitfalls",
    // wk 10
    "Recursion (cont.): Big-O (telescoping method)",
    "Lab 8: Recursion Lab",
    "Recursion (cont.): Big-O of binary search, fibonacci",
    "Recursive structures, start Trees",
    // wk 11
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    "Trees,  Binary Trees",
    "Tree Traversal; Start Binary Search Trees (BST)",
    // wk 12
    "BST (cont.): contains(), add(), remove()",
    "Lab 9: Expression Trees Lab",
    "BST (cont.): performance, size(), smallest()",
    "Start Heaps: heapify",
    // wk 13 
    "Heaps (cont.): heapify; PriorityQueue",
    "Lab 10: BST Lab",
    "<strong><emph>Thanksgiving</emph></strong>",
    "<strong><emph>Thanksgiving</emph></strong>",
    // wk 14
    "Start HashMaps: Open Addressing",
    "Lab 11: Open Addressing lab",
    "HashMap (cont.): chaining",
    "Cancelled",
    // wk 15
    "Sorting: MergeSort (Zoom)",
    "Homework Lab",
    "Sorting: QuickSort (Zoom)",
    "<strong>Reading Period</strong>",
    // wk final
    "",
    "",
    "<strong><emph>Final Exam<br/>12:00-2:00</strong></emph>",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/28/2023", days, MTWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
