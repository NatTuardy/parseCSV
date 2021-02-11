import React, { useState } from 'react';
import DataTable from '../DataTable/DataTable';
import ErrorBlock from '../ErrorBlock/ErrorBlock';
import validFile from '../../validateHelpers/validFile';
import { CSVReader } from 'react-papaparse';
import styles from './MainPage.module.css';

const buttonRef = React.createRef();

function MainPage() {
  const [state, setState] = useState([]);
  const [importantError, setImportantError] = useState(false);

  const onOpenDialog = e => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const onFileLoad = data => {
    setImportantError(false);
    validFile(data, setImportantError);
    setState(data);
  };

  const onError = err => {
    console.log(err);
  };

  return (
    <>
      <CSVReader
        onFileLoad={onFileLoad}
        onError={onError}
        ref={buttonRef}
        noClick
        noDrag
      >
        {({ file: csvFile }) => (
          <aside className={styles.aside}>
            <button
              type="button"
              onClick={onOpenDialog}
              className={styles.btn}
            >
              Import employees
            </button>

            <div className={styles.fileName}>{csvFile && csvFile.name}</div>
          </aside>
        )}
      </CSVReader>
      {importantError ? <ErrorBlock /> : <DataTable state={state} />}
    </>
  );
}

export default MainPage;
