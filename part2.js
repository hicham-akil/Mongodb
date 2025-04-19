// 1. Find all articles that contain the tag "Node.js" and display only the title and content.
// 2. Find all comments made by a specific user with userId: ObjectId("60c72b2f5f1b2c001f8e4d58"). Display only the content and createdAt fields.
// 3. Find all articles that were created after "2024-03-01" and display the title, createdAt, and tags.
// 4. Find all comments for the article with articleId: ObjectId("60c72c2f5f1b2c001f8e4d5b"). Display the content and userId.
// 5. Find all articles that have at least one comment and display the article title and the number of comments.
// 6. Use the $push operator to add a new comment to the comments array of the article with articleId: ObjectId("60c72c2f5f1b2c001f8e4d5b").
// 7. Use the $pull operator to remove the comment with the content "Great introduction to MongoDB!" from the comments array of the article with articleId: ObjectId("60c72c2f5f1b2c001f8e4d5b").