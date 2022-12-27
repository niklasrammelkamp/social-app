export default function Form({ onAddPost }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    const hashtags = data.hashtags.split("#");

    const filteredHashtags = hashtags.filter((hashtag) => {
      return hashtag; //removing empty string elements
    });

    const finalHashtags = filteredHashtags.map((hashtag) => {
      const finalHashtag = "#" + hashtag; //adding #
      return finalHashtag;
    });

    onAddPost({
      headline: data.headline,
      text: data.text,
      hashtags: finalHashtags,
    });

    event.target.reset();
    event.target.elements.headline.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="headlineInput">headline</label>
      <input type="text" id="headlineInput" name="headline" />
      <label htmlFor="postInput">post</label>
      <textarea id="postInput" name="text" />
      <label htmlFor="hashtagInput">hashtags</label>
      <textarea id="hashtagInput" name="hashtags" />

      <button type="submit">Submit</button>
    </form>
  );
}
