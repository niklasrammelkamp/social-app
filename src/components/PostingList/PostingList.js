import Posting from "../Posting/Posting";

export default function PostingList({
  postings,
  onShowComments,
  onDeletePost,
  onAddComment,
  onDeleteComment,
  onPressSubmit,
  pressSubmit,
}) {
  return (
    <section>
      {postings.map((post) => {
        return (
          <Posting
            onPressSubmit={onPressSubmit}
            pressSubmit={pressSubmit}
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
