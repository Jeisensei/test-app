import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";

const BookList = () => {
  // const someValue = "shakeAndBake";
  // const displayValue = () => {
  //   console.log(someValue);
  // };
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };
  return (
    <>
      <h1>Best Sellers in Books</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);
//   };
//   const handleButtonClick = () => {
//     alert("handle button click");
//   };
//   const handleFormSumission = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSumission}>
//         <h2>Typical form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: "1rem 0" }}
//         />
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
