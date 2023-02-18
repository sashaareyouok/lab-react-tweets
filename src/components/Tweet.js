function Tweet() {
  return (
    <div className="tweet">
      <img
        src="https://i.imgur.com/b0EdHVV.jpg"
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">Thoughts of Dog®</span>
            <span className="handle">@dog_feeling</span>
          </span>

          <span className="timestamp">1h ago</span>
        </div>

        <p className="message">
        The human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company
       🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
