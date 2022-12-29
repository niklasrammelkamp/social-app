import StyledButton from "../Button/StyledButton";
import Form from "../Forms/Form";
import Textarea from "../Forms/Textarea";
import StyledArticle from "../Article/StyledArticle";
import StyledList from "../List/StyledList";

export default function Posting({
  post,
  onShowComments,
  onDeletePost,
  onAddComment,
  onDeleteComment,
}) {
  return (
    <StyledArticle showComments={post.showComments}>
      <p className="date">{post.date}</p>
      <StyledButton
        type="button"
        onClick={() => onDeletePost(post.id)}
        variant="delete"
      >
        delete
      </StyledButton>
      <h2>{post.headline}</h2>
      <p>{post.text}</p>

      {/*________________ HASHTAGS ________________ */}
      {post.hashtags.length !== 0 && (
        <StyledList variant="hashtags">
          {post.hashtags.map((hashtag, index) => {
            return <li key={index}>{hashtag}</li>;
          })}
        </StyledList>
      )}

      {/*________________ SHOW COMMENTS ________________ */}
      <div className="comments">
        <p>comments ({post.comments.length})</p>
        <StyledButton
          type="button"
          onClick={() => onShowComments(post.id)}
          variant="showComments"
          show={post.showComments}
        >
          {post.showComments ? "hide" : "show"} comments
        </StyledButton>
      </div>

      {/*________________ COMMENTS LIST ________________ */}

      {post.showComments && (
        <section className="addComments">
          <Form submitType={"comment"} id={post.id} onAddComment={onAddComment}>
            <Textarea name="comment" id="comment" label="write comment" />

            <StyledButton variant="submit" type="submit">
              add comment
            </StyledButton>
          </Form>
          <StyledList variant="comments">
            {post.comments.length !== 0 ? (
              post.comments.map((comment) => {
                return (
                  <li key={comment.commentId}>
                    <p>{comment.comment}</p>
                    <StyledButton
                      type="button"
                      variant="delete"
                      special="deleteComment"
                      onClick={() =>
                        onDeleteComment(post.id, comment.commentId)
                      }
                    ></StyledButton>
                  </li>
                );
              })
            ) : (
              <p className="noComments">- no comments jet -</p>
            )}
          </StyledList>
        </section>
      )}
    </StyledArticle>
  );
}
