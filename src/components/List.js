function List({ list }) {
  return (
    <ul>
      {list.length > 0
        ? list.map((book) => {
            return (
              <li key={book.id} className="list-disc list-inside">
                {book.title}
              </li>
            );
          })
        : "Sorry, no results found"}
    </ul>
  );
}

export default List;
