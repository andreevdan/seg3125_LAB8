import React from 'react';
import './Table.css';

function Table(props) {
  const data = props.data;

  return (
    <table>
      <thead>
        <tr>
          <th>Ranking</th>
          <th>ID</th>
          <th>Model</th>
          <th>Year</th>
          <th>Safety</th>
          <th>Speed</th>
          <th>Comford</th>
          <th>Reliability</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
          <td>{row.ranking}</td>
          <td>{row.id}</td>
          <td>{row.model}</td>
          <td>{row.year}</td>
          <td>{row.safety}</td>
          <td>{row.speed}</td>
          <td>{row.comfort}</td>
          <td>{row.reliability}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
