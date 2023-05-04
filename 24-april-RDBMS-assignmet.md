### Q1 What is RDBMS? Why do idustries use RDBMS?
- It stands for Relational Database Management System, which is a type of software used to manage relational databases. A relational database is a type of database that organizes data into one or more tables, with each table consisting of a set of rows and columns.
Industries use RDBMS to manage and analyze large amounts of data, such as customer information, inventory, and financial data.
1. Data Integrity: RDBMS enforces rules for data integrity such as uniqueness and consistency, ensuring the data is accurate annd consistent.
2. Scalability: RDBMS can handle a range of security features, such as access control, to protect the data stored in the database.
3. Security: RDBMS provides a range of security features, such as access control, to protect the data stored in the database.

### Q2 Explain the relationship data model in depth?
- A representation of the relationships betweenn different data entities in a system. It is used to organize and structure data in a way that reflects the relationships between different enntities, such as customers, orders, products and suppliers.
- There are several types of relationships that can exist between data entities in a realtionship data model, including:
1. One-to-one: This type of relationship occurs when each instance of one entity is associated with exactly one instance of another entity.
2. One-to-many: In this type of relationship, each instance of one entity is associated with one or more instances of another entity.
3. Many-to-many: In this type of relationship, each instance of one entity can be associated with one or more instances of another entity, and each instance of the second entity cann be associated with one or more instances of the first entity.
A key aspect of relationship data model is the use of primary and foreign keys. A primary key is unique idenntifier for each entity in a database, and it is used to establish relationships with other entities. A foreign key is a reference to the primary key of another entity, and it is used to establish relationships between entities.

### Q3 What is the importance of Relationships in a Database management system? Explain the types of relationships ?
- Relationships are crucial in a database management system as they help to organize and connect data across multiple tables, thereby improving the efficiency and accuracy of data retrieval, storage, and analysis. Without relationships, a database would consist of only isolated data tables, which would make it difficult to retrieve meaningful information and perform complex queries.
1. One-to-One Relationship: This is a relationship where each record in one table is associated with only one record in another table. For example, each employee may have only one employee ID number, and this employee ID number may be linked to only one employee record.
2. One-to-Many Relationship: In this type of relationship, one record in a table can be linked to multiple records in another table. For example, each customer may have multiple orders associated with them, and each order record would link back to the customer record using a unique identifier such as a customer ID.
3. Many-to-Many Relationship: This type of relationship exists when multiple records in one table are associated with multiple records in another table. For example, a student may be enrolled in multiple courses, and each course may have multiple students enrolled in it. To represent this relationship, a third table called a junction table is used to link the two tables together.

### Q4 Explain the different types of Keys in RDBMS considering a real-life scenario?
1. Primary Key: A primary key is a unique identifier for each row in a table. It ensures that each row has a unique value and can be easily accessed when needed.
2. Foreign Key: A foreign key is a field that refers to the primary key of another table. It is used to establish a relationship between two tables.
3. Unique Key: A unique key is a field that allows only unique values and ensures that no two rows have the same value in that field. It can be used to enforce data integrity and prevent duplicate data.

### Q5 Write a short note on Single Responsibility Principle?
- The Single Responsibility Principle (SRP) is a software development principle that states that a class or module should have only one reason to change. The main benefit of adhering to SRP is that it makes the code more modular and easier to maintain. By spreading responsibility into smaller, more focused calsses, developers can isolate changes and minimize the impact of changes on other parts of the code.

### Q6 Expalin the different types of errors that could arise in a denormalized database?
- Denormalization is a technique used in database design to improve the performance of database queries by adding redundant data to the database. While denormalization can lead to improved performance, it can also introduce several types of errors in the database. Here are some of the most common types of errors that can arise in a denormalized database:
1. Data Inconsistency: In a denormalized database, data may be duplicated across multiple tables. If this data is updated in one table but not in the others, the database may contain inconsistent data. This can lead to incorrect query results and other errors.
2. Update Anomalies: Denormalization can also lead to update anomalies, where changing a single piece of data requires updating multiple tables. This can be time-consuming and error-prone, and can result in inconsistent data if not done correctly.
3. Insertion Anomalies: Similarly, denormalization can lead to insertion anomalies, where it is not possible to add data to the database without adding it to multiple tables. This can be problematic if the data being added is incomplete or inconsistent.
4. Deletion Anomalies: Denormalization can also lead to deletion anomalies, where deleting a single piece of data requires deleting multiple rows from multiple tables. This can be difficult to manage and can lead to unintended data loss.
3. Performance Issues: While denormalization can improve query performance, it can also introduce performance issues if the database becomes too large or if the denormalized data is not properly indexed.

### Q7 What is normalizationn and what is the need for normalization?
- Normalization refers to the process of organizing data in a database so that it is structured in a way that reduces redundancy and eliminates data inconsistencies. The goal of normalization is to create a well-structured database that is easier to maintain and that supports efficient data retrieval and manipulation. Normalization involves breaking down a large table into smaller, more specific tables, and defining relationships between those tables using keys. This helps to minimize data redundancy and ensure data integrity. There are different levels of normalization, called normal forms, with each level representing a higher degree of normalization. The need for normalization arises because databases are often subject to data anomalies such as insertion, deletion, and update anomalies. For example, if a table contains redundant data, it is possible for that data to become inconsistent if it is updated in one place but not in another. Normalization helps to prevent these anomalies by organizing data in a structured and logical way.

### Q8 List out the different levels of Normalization and explain them in detail?
- Normalization is a technique used in relational database design to eliminate data redundancy and dependency, and ensure data consistency. It involves breaking down a large table into smaller ones and creating relationships between them. There are several levels of normalization, each building on the previous one, with the ultimate goal of achieving the highest level of normalization possible, which is the Boyce-Codd Normal Form (BCNF).
1. First Normal Form (1NF):
In 1NF, the table is required to have a primary key, and each column must contain only atomic values (that is, indivisible values). This means that each cell in the table should contain a single value and not a list of values.
2. Second Normal Form (2NF):
In 2NF, the table must be in 1NF and every non-key column must depend on the entire primary key. This means that there should be no partial dependencies, where a non-key column depends on only a part of the primary key.
3. Third Normal Form (3NF):
In 3NF, the table must be in 2NF and all non-key columns must be independent of each other. This means that there should be no transitive dependencies, where a non-key column depends on another non-key column.
4. Boyce-Codd Normal Form (BCNF):
BCNF is a higher level of normalization than 3NF, where every determinant (a column that uniquely determines another column) is a candidate key. In other words, in BCNF, there should be no overlapping candidate keys, and all dependencies should be on candidate keys.

### Q9 What are joins and why do we need them?
- Joins are used in relational databases to combine data from two or more tables based on a related column between them. In a database, data is often split into different tables to avoid data duplication and improve data consistency.

### Q10 Explain the different types of joins?
1. Inner join: returns only the matching rows between two tables.
2. Left join: returns all the rows from the left table and the matching rows from the right table.
3. Right join: returns all the rows from the right table and the matching rows from the left table.
4. Full outer join: returns all the rows from both tables, including the unmatched rows.
