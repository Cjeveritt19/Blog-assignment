//TODO: get the individual post data from the database
//TODO: implement a delete action to delete comments
import { db } from "@/utlls/dbConnection";
import Image from "next/image";
import Form from "@/components/Form";

export default async function PostIdPage({ params }) {
  const postId = (await params).postId;

  const postQuery = await db.query(
    `select id, title, content, author, url from posts where id = ${postId}`
  );
  console.log(postQuery);

  const post = postQuery.rows[0];
  const commentsQuery = await db.query(
    `select id, commenter, content from comments where post_id = ${postId}`
  );
  const comments = commentsQuery.rows;
  console.log(comments);

  // console.log(post);
  return (
    <>
      <div>
        <h1>Individual Post Page</h1>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
        <Image src={post?.url} alt={post.title} width={500} height={300} />
      </div>
      <div>
        <h2>Comments Section</h2>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.commenter}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Add a Comment</h2>
        <Form />
      </div>
    </>
  );
}
