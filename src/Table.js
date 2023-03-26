import React from 'react';
import './Table.css';

function Table(props) {
  const data = props.data;

  return (
    <table style={{marginRight:'15%',marginLeft:'15%',width:'70%'}}>
      <thead>
        <tr>
          <th style={{textAlign:'center', marginRight:'10px'}}>Ranking</th>
          <th style={{textAlign:'center', marginRight:'10px'}}>ID</th>
          <th style={{textAlign:'center', marginRight:'10px'}}>Model</th>
          <th style={{textAlign:'center', marginRight:'10px'}}>Year</th>
          <th style={{textAlign:'center', marginRight:'10px'}}>Safety</th>
          <th style={{textAlign:'center', marginRight:'10px'}}>Speed</th>
          <th style={{textAlign:'center', marginRight:'10px'}}>Comfort</th>
          <th style={{textAlign:'center'}}>Reliability</th>
        </tr>
      </thead>
      <tbody >
        {data.map((row, index) => (
          <tr key={index}>
          <td style={{textAlign:'center'}}>{row.ranking}</td>
          <td style={{textAlign:'center'}}>{row.id}</td>
          <td style={{textAlign:'center'}}>{row.model}</td>
          <td style={{textAlign:'center'}}>{row.year}</td>
          <td style={{textAlign:'center'}}>{row.safety}</td>
          <td style={{textAlign:'center'}}>{row.speed}</td>
          <td style={{textAlign:'center'}}>{row.comfort}</td>
          <td style={{textAlign:'center'}}>{row.reliability}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

