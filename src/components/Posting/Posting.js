import styled, { css } from "styled-components";
import StyledButton from "../Button/StyledButton";
import FormComments from "../Forms/FormComments";

const StyledArticle = styled.article`
  background-color: var(--article-color);
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  .date {
    color: var(--font-color);
    font-weight: 200;
    font-size: 12px;
  }

  p {
    color: var(--font-color);
    font-weight: 200;
  }

  h2 {
    color: var(--headline-color);
    margin-top: 10px;
    font-size: 20px;
  }

  .comments {
    display: flex;
    background-color: var(--secondary-color);
    border-radius: 50px;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
    margin-top: 15px;
  }

  .comments p {
    padding-left: 16px;
    color: var(--headline-color);
  }
`;

//___________________________________________________________________________________________________

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-top: 10px;

  ${({ variant }) => {
    if (variant === "hashtags") {
      return css`
        gap: 6px;
        flex-wrap: wrap;
        li {
          padding: 5px 10px;
          border-radius: 5px;
          background-color: var(--body-color);
          font-size: 12px;
          color: var(--font-color);
        }
      `;
    }
  }}
`;

//___________________________________________________________________________________________________

export default function Posting({
  post,
  onShowComments,
  onDeletePost,
  onAddComment,
  onDeleteComment,
}) {
  return (
    <StyledArticle>
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

      <StyledList variant="hashtags">
        {post.hashtags.map((hashtag, index) => {
          return <li key={index}>{hashtag}</li>;
        })}
      </StyledList>

      <div className="comments">
        <p>comments ({post.comments.length})</p>
        <StyledButton
          type="button"
          onClick={() => onShowComments(post.id)}
          variant="comments"
          show={post.showComments}
        >
          {post.showComments ? "hide" : "show"} comments
        </StyledButton>
      </div>

      {post.showComments && (
        <section>
          <FormComments id={post.id} onAddComment={onAddComment} />
          <ul>
            {post.comments.length !== 0
              ? post.comments.map((comment) => {
                  return (
                    <li key={comment.commentId}>
                      {comment.comment}
                      <button
                        type="button"
                        onClick={() =>
                          onDeleteComment(post.id, comment.commentId)
                        }
                      >
                        x
                      </button>
                    </li>
                  );
                })
              : "no comments jet"}
          </ul>
        </section>
      )}
    </StyledArticle>
  );
}
