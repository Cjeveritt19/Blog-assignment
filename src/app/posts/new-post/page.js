import { db } from "@/utlls/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewPostPage() {
  async function handleSubmit(formData) {
    "use server";
    const formValues = {
      title: formData.get("title"),
      content: formData.get("content"),
      author: formData.get("author"),
      url: formData.get("url"),
    };
    console.log(formValues);
    db.query(
      `insert into posts (title, content, author, url) values ($1, $2, $3, $4)`,
      [formValues.title, formValues.content, formValues.author, formValues.url]
    );

    revalidatePath("/posts");

    redirect("posts");
  }

  return (
    <>
      <h1>Add a new post here!</h1>
      <form action={handleSubmit}>
        <fieldset>
          <label htmlFor="title">Title of your post:</label>
          <input type="text" name="title" required />
          <label htmlFor="content">Content of your post:</label>
          <input type="text" name="content" required />
          <label htmlFor="author">Author of this post:</label>
          <input type="text" name="author" required />
          <label htmlFor="url">Image link for the post:</label>
          <input
            type="text"
            name="url"
            placeholder="Add a link to the image you would like on your post"
          />
        </fieldset>
        <button type="submit">Click me to submit!</button>
      </form>
    </>
  );
}
