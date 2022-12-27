import FormComments from "../Forms/FormComments";

export default function Posting({
  post,
  onShowComments,
  onAddComment,
  onDeleteComment,
}) {
  return (
    <article>
      <p>{post.date}</p>
      <h2>{post.headline}</h2>
      <p>{post.text}</p>

      <ul>
        {post.hashtags.map((hashtag, index) => {
          return <li key={index}>{hashtag}</li>;
        })}
      </ul>

      <button type="button" onClick={() => onShowComments(post.id)}>
        {post.showComments ? "hide" : "show"} comments
      </button>

      {post.showComments && (
        <section>
          <FormComments id={post.id} onAddComment={onAddComment} />
          <ul>
            {post.comments.map((comment) => {
              return (
                <li key={comment.commentId}>
                  {comment.comment}
                  <button
                    onClick={() => onDeleteComment(post.id, comment.commentId)}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </article>
  );
}
