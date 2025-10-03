import { db } from "@/utlls/dbConnection";

export default function CommentForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get("comment");

    await db.query(
      `insert into comments (commenter, content) values ($1, $2)`,
      [commenter, content]
    );
  }

  return (
    <form>
      <label htmlFor="commenter">Your Name:</label>
      <input type="text" name="commenter" required />
      <label htmlFor="comment">Your Comment:</label>
      <textarea id="comment" name="comment" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
