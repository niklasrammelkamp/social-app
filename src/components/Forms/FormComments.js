export default function FormComments({ id, onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();

    onAddComment(id, event.target.elements.comment.value);

    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">add comment</label>
      <textarea name="comment" id="comment" rows={1} />

      <button type="submit">add comment</button>
    </form>
  );
}
