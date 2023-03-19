function List({ list }) {
  return (
    <div className="text-slate-800 font-medium tracking-wider">
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
    </div>
  );
}

export default List;
