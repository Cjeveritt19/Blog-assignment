//TODO: render a list of posts
//TODO: set up a sorting filter (searchParams)
import { db } from "@/utlls/dbConnection";
import Link from "next/link";
export default async function PostsPage() {
  const query = await db.query(`select id, title from posts`);
  const posts = query.rows;
  console.log(posts);
  return (
    <div>
      The posts page
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
