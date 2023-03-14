import "./App.css";
import Search from "./components/Search";
import List from "./components/List";

function App() {
  const items = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
    {
      id: 2,
      title: "Harry Potter and the Order of Phoenix",
      author: " J.K. Rowling",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
    },
    {
      id: 4,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
    },
    {
      id: 5,
      title: "Animal Farm",
      author: "George Orwell",
    },
    {
      id: 6,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: 7,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
    },
  ];

  return (
    <>
      <Search />
      <List list={items} />
    </>
  );
}

export default App;
