//TODO: get the individual post data from the database
//TODO: implement a delete action to delete comments
import { db } from "@/utlls/dbConnection";
import Image from "next/image";

export default async function PostIdPage({ params }) {
  const postId = (await params).postId;

  const query = await db.query(
    `select id, title, content, author, url from posts where id =  ${postId}`
  );
  const post = query.rows[0];

  console.log(post);
  return (
    <div>
      <h1>Individual Post Page</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <Image src={post?.url} alt={post.title} width={500} height={300} />
    </div>
  );
}
