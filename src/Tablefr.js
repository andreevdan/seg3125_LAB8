import React from 'react';
import './Table.css';

function Tablefr(props) {
  const data = props.data;

  return (
    <table style={{marginRight:'15%',marginLeft:'15%',width:'70%'}}>
      <thead>
        <tr>
        <th style={{textAlign:'center', marginRight:'10px'}}>Classement</th>
        <th style={{textAlign:'center', marginRight:'10px'}}>ID</th>
        <th style={{textAlign:'center', marginRight:'10px'}}>Modèle</th>
        <th style={{textAlign:'center', marginRight:'10px'}}>Année</th>
        <th style={{textAlign:'center', marginRight:'10px'}}>Sécurité</th>
        <th style={{textAlign:'center', marginRight:'10px'}}>Vitesse</th>
        <th style={{textAlign:'center', marginRight:'10px'}}>Confort</th>
        <th style={{textAlign:'center'}}>Fiabilité</th>
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

export default Tablefr;

