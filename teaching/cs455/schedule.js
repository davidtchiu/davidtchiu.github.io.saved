const days = {
  lectures: [
    "Why DBMS? Data independence",
    "Relational model: connection to set theory",
    "Keys and schema",
    "Labor Day (no class)",
    "Relational algebra",
    "RA: expression trees; composition",
    "RA: natural join, $$\theta$$ join",
    "RA: outer joins, rename, NULL",
    "RA: aggregation and grouping",
    "SQL: schema definition; integrity constraints",
    "SQL: selection, joins, set ops",
    "SQL: SQL: outer joins, rename, WITH",
    "SQL: subqueries: IN, EXISTS; start aggregation",
    "SQL: grouping and aggregation, triggers, transactions",
    "SQL Lab",
    "SQL Lab Cont.",
    "Review",
    "Exam 1",
    "DB theory: functional dependencies (FD)",
    "Armstrong’s axioms and deriving inference rules",
    "Attribute closure and keys",
    "Fall Break (no class)",
    "Normal forms: 1NF, 2NF",
    "BCNF; Canonical cover",
    "Disk and files: access times",
    "Access patterns, disk scheduling; Start files",
    "Buffer mgr; Start files: Format tradeoffs",
    "File organization of tuples",
    "Cost analysis: join algorithms",
    "Start indexing",
    "Indexing: B+Trees",
    "Review",
    "Exam 2",
    "B+Trees: properties, operations",
    "B+Trees (cont.): complexity analysis; Start dynamic hashing",
    "Bitmaps",
    "Bitmap compression: WAH",
    "Thanksgiving (no class)",
    "Thanksgiving (no class)",
    "Start transactions: ACID, serializability",
    "Transactions: serializability test, precedence graph, topoSort",
    "Transactions: Concurrency control",
    "Project Demos",
    "Project Demos",
    "Reading Period",
    "",
    "Final Exam: 4:00-6:00",
  ],
};

// print out the schedule to HTML
const schedule = new CourseCalendar("8/30/2021", days, MWF);
schedule.generateHTMLCalendar();
