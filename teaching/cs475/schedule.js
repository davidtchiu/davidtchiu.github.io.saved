  

let days = {
  resources: [
    {
      name: "Course Syllabus",
      url: "syllabus"
    },
    {
      name: "Notes and Sample Code",
      url: "https://canvas.pugetsound.edu"
    },
  ],
  assignments: {
    homework: [
      {
        name: "Hwk 0 (vscode)",
        title: "Setting up VS Code",
        url: "hwk0.vscode/",
        due: "1/19/2024",
      },
      {
        name: "Hwk 1 (sorting)",
        title: "Pointers, Arrays, Strings",
        url: "hwk1.sorting/",
        due: "1/29/2024",
      },
      {
        name: "Hwk 2 (ls2)",
        title: "Dynamic Memory Allocation",
        url: "hwk2.ls/",
        due: "2/9/2024",
      },
      {
        name: "Hwk 3 (dsh)",
        title: "David Shell",
        url: "hwk3.dsh/",
        due: "2/19/2024",
      },
      {
        name: "Hwk 4 (mmm)",
        title: "Matrix Multiplication",
        url: "hwk4.mmm/",
        due: "2/28/2024",
      },
      // {
      //   name: "Hwk 4 (BackItUp)",
      //   title: "Back It Up",
      //   url: "hwk4.biu/",
      //   due: "2/28/2024",
      // },
      {
        name: "Hwk 6 (ts_hashmap)",
        title: "Thread-Safe Hashmap",
        url: "hwk6.hashmap/",
        due: "3/27/2024", // after break
      },
      {
        name: "Hwk 7 (OneLaneBridge)",
        title: "One Lane Bridge ",
        url: "hwk7.thebridge/",
        due: "4/8/2024",
      },
      {
        name: "Hwk 8 (bankers)",
        title: "Banker's Algorithm",
        url: "hwk8.bankers/",
        due: "4/22/2024",
      },
      {
        name: "Extra Credit",
        title: "Bonus Tech Report",
        url: "hwkB.report/",
        due: "5/3/2024",
      },
    ],
    /////////////////////////////////// labs /////////////////////////////////////////
    labs: [
      {
        name: "Lab 1",
        title: "C Basics",
        url: "lab1/",
      },
      {
        name: "Lab 2",
        title: "Pointers, Arrays, C Strings",
        url: "lab2/",
      },
      {
        name: "Lab 3",
        title: "Memory Allocation",
        url: "lab3/",
      },
    ],
  },

  lectures: [
    // wk 1
    "<strong>MLK Day<br/>(no class)</strong>",
    "Intro: What's an OS?",
    "Intro: A brief history of computer systems",
    // wk 2
    "<font color='blue'>Lab 1 (Attendance required; Bring laptops)</font>",
    "<font color='blue'>Lab 2 (Attendance required; Bring laptops)</font>",
    "<font color='blue'>Lab 3 (Attendance required; Bring laptops)</font>",
    // wk 3
    "Intro: Job scheduling models",
    "Bootstrapping, interrupts",
    "Invoking the OS: Interrupts, traps and system calls",
    // wk 4
    "Processes: PCB, address space, program stack",
    "Processes: state transitions, fork()",
    "Processes: wait(); zombies and orphans",
    // wk 5
    "Processes: exec() system call",
    "Threads; User vs. kernel threads",
    "Threads: pthread library",
    // wk 6
    "Threads: Performance and data sharing; Amdahl's Law",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 1</emph></strong>",
    // wk 7
    "Scheduling: goals and metrics; FCFS",
    "Sched: RR, SJF, SRTF",
    "Sched: Priority, MLFQ; Examples: Linux O(1) and CFS",
    // wk 8
    "Sched: hyperthreading, multicore considerations",
    "Synchronization: critical section",
    "Sync: spin locks; atomic ops",
    // wk 9
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    "<strong><emph>Spring break</emph></strong>",
    // wk 10
    "Sync: blocking locks",
    "Sync: semaphores",
    "Sync: more semaphores",
    // wk 11
    "Sync: monitors and condition variables",
    "<strong><emph>Review</emph></strong>",
    "<strong><emph>Exam 2</emph></strong>",
    // wk 12
    "Memory Management: virtual addressing",
    "MM: memory partitioning",
    "MM: segmentation",
    // wk 13
    "MM: paging",
    "MM: translation caching",
    "Start Virtual Memory",
    // wk 14
    "VM: replacement policies",
    "VM: clock",
    "VM: memory allocation and working set",
    // wk 15
    "Start File System",
    "File System",
    "<strong>Reading Period</strong>",
    // "VM: memory allocation (cont.)",
    // "VM: malloc(), free()",
    // wk final
    "<strong><emph>Final Exam<br/>4:00-6:00</emph></strong>",
    "",
    "",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("1/15/2024", days, MWF);
schedule.generateHTMLResources();
schedule.generateHTMLAssigments();
schedule.generateHTMLCalendar();
