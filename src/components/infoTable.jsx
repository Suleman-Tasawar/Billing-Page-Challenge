function Table() {
  const userData = [
    {
      id: 1,
      date: "Oct.21,2021",
      type: "Pro Annual",
    },
    {
      id: 2,
      date: "Aug.21.2021",
      type: "Pro Portfolio",
    },
    {
      id: 3,
      date: "Jul.21.2021",
      type: "Sponcered Post",
    },
    {
      id: 4,
      date: "Jun.21.2021",
      type: "Sponcered Post",
    },
  ];

  const userDataTable = userData.map((data) => (
    // eslint-disable-next-line react/jsx-key
    <table>
      <tbody>
        <tr key={data.id}>
          <td>{data.date}</td>
          <td>{data.type}</td>
          <td>
            <button className="downloadButton">Print Reciept</button>
          </td>
        </tr>
      </tbody>
    </table>
  ));

  return (
    <div className="tableData">
      <table>
        <thead>
          <td>Date</td>
          <td>Type</td>
          <td>Reciept</td>
        </thead>
      </table>
      {userDataTable}
    </div>
  );
}

export default Table;
