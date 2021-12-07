import React from 'react';
import * as S from './Table.styles';

const Table = ({ headings, data, handleClick }) => {
  return (
    <S.table>
      <thead>
        <tr>
          {headings.map((heading) => (
            <S.th key={heading}>{heading}</S.th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((row, index) => (
            <tr
              key={row.id || index}
              onClick={() => handleClick(row.id || index)}
            >
              {Object.values(row).map((item, index) => (
                <S.td key={`${item}${index}`}>{item}</S.td>
              ))}
            </tr>
          ))}
      </tbody>
    </S.table>
  );
};

export default Table;
