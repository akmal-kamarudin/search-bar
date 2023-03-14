function List({ list }) {
  return (
    <ul>
      {list.map((book) => {
        return <li key={book.id}>{book.title}</li>;
      })}
    </ul>
  );
}

export default List;
