//TODO: render a list of posts
//TODO: set up a sorting filter (searchParams)
import { db } from "@/utlls/dbConnection";
import Link from "next/link";
export default async function PostsPage({ searchParams }) {
  const query = await db.query(`select id, title from posts`);
  const posts = query.rows;
  console.log(posts);
  const queryParams = await searchParams;
  console.log(queryParams);

  if (queryParams.sort === "asc") {
    posts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (queryParams.sort === "desc") {
    posts.sort((a, b) => b.title.localeCompare(a.title));
  }
  return (
    <div>
      The posts page
      <div className="flex gap-2">
        <button>
          <Link href="/posts?sort=asc">Alphabetical</Link>
        </button>
        <button>
          <Link href="/posts?sort=desc">Reverse Alphabetical</Link>
        </button>
      </div>
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
