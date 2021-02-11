import React from 'react';
import styles from './DataTable.module.css';

const headOfTable = () => {
  return (
    <tr>
      <th>ID</th>
      <th>Full Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Age</th>
      <th>Experience</th>
      <th>Yearly Income</th>
      <th>Has children</th>
      <th>License states</th>
      <th>Expiration date</th>
      <th>License number</th>
      <th>Duplicate with</th>
    </tr>
  );
};

function DataTable({ state }) {
  return (
    <div className={styles.wrapper}>
    <table>
      <tbody>
        {headOfTable()}
        {state.length > 0 &&
          state.map(
            (item, idx) =>
              item.data.length > 1 && (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  {item.data.map((el, index) => (
                    <td
                      key={index}
                      className={
                        !item.myErrors[index] ? styles.wrongData : null
                      }
                    >
                      {el}
                    </td>
                  ))}
                  <td>{item.duplicate && item.duplicate}</td>
                </tr>
              ),
          )}
      </tbody>
    </table>
    </div>
  );
}

export default DataTable;
