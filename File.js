// 1. Insert Data (Basic CRUD)
// Insert 3 new users into the Users collection. Ensure that each user has a username, email, password, and createdAt date.

// 2. Query Data (Basic Querying)
// Find all articles that contain the tag "React". Display only the title, authorId, and tags fields.

// 3. Update Data (Update)
// Update the content of the article titled "Node.js for Backend Development" to add a new section on "Async Programming in Node.js". Also, update the updatedAt field to the current date.

// 4. Delete Data (Delete)
// Delete all comments for the article titled "Introduction to MongoDB".

// 5. Aggregation (Count and Grouping)
// Use the aggregation framework to find how many comments each article has. Return the title of the article and the number of comments.

// 6. Aggregation (Lookup)
// Use $lookup to join the Articles and Comments collections to return a list of articles along with their comments. Display title, content, and an array of all comments (content field) for each article.

// 7. Advanced Querying (Find with Comparison Operators)
// Find all users who joined before 2024-03-01. Use comparison operators like $lt to filter users based on their createdAt date.

// 8. Advanced Querying (Text Search)
// Implement a full-text search to find articles that contain the word "JavaScript" in their title or content. Make sure that text indexing is enabled.

// 9. Aggregation (Popular Tags)
// Use the $group stage to find the most popular tags by counting how many times each tag appears across all articles. Return the tag and the count.

// 10. Advanced Querying (Complex Query with $in and $or)
// Find all articles that have either "Node.js" or "React" as tags. Use the $in operator to match these tags and return the title, tags, and authorId.