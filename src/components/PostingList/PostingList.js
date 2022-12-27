import Posting from "../Posting/Posting";

export default function PostingList({
  postings,
  onShowComments,
  onDeletePost,
  onAddComment,
  onDeleteComment,
}) {
  return (
    <section>
      {postings.map((post) => {
        return (
          <Posting
            key={post.id}
            post={post}
            onShowComments={onShowComments}
            onDeletePost={onDeletePost}
            onAddComment={onAddComment}
            onDeleteComment={onDeleteComment}
          />
        );
      })}
    </section>
  );
}
