const Book = ({ img, title, author, number }) => {
  // const displayTitle = () => {
  //   console.log(title);
  // };
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* <button onClick={getSingleBook}>click me</button> */}
      {/* <button onClick={() => getBook(id)}>click me</button> */}
      <h4>{author}</h4>
      <span className="number">#{number + 1}</span>
    </article>
  );
};

export default Book;
