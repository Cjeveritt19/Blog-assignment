import { db } from "@/utlls/dbConnection";

export default function CommentForm() {
  async function handleSubmit(formData) {
    "use server";
    const formValues = {
      commenter: formData.get("commenter"),
      content: formData.get("comment"),
    };
    console.log(formValues);
    db.query(
      `insert into comments (commenter, content)
       values ($1, $2)`,
      [formValues.commenter, formValues.content]
    );
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="commenter">Your Name:</label>
      <input type="text" name="commenter" required />
      <label htmlFor="comment">Your Comment:</label>
      <textarea id="comment" name="comment" required></textarea>
      <button type="submit">Add Comment!</button>
    </form>
  );
}
