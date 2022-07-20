import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

/*
 Importing React and ReactDOM
2. Rendering a BlogPost component with a default article text of "Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
3. Defining a Comment component and rendering it inside of BlogPost.
4. Importing stylesheet code from the blog_app.less file (which lives in the same directory as blog_app.py).
5. Adding a comment element to the blog post with a comment text of "I agree with this statement. - Angela Merkel".
6. Adding another comment element to the blog post with a comment text of "A universal truth. - Noam Chomsky".
7. Adding another comment element to the blog post with a comment text of "Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451". */

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
