import validCells from './validCells';
import findLessIndex from './findLessIndex';

const validFile = (data, setImportantError) => {
  // validate cells

  data &&
    data.forEach((item, idx, arrey) => {
      const findedErrors =
        item.data.length > 1
          ? item.data.map((el, index, rowArr) => {
              try {
                if (validCells[index](el, index, rowArr)) return false;
              } catch (error) {
                console.log('error', error.message);
                setImportantError(true);
              }
              return true;
            })
          : [];
      arrey[idx].myErrors = findedErrors;
    });

  // validate phone and email

  data &&
    data.forEach((item, idx, arr) => {
      const currentPhone = item.data[1];
      const currentEmail = item.data[2] && item.data[2].toLowerCase();
      const numLikeNull = -1;
      let dublPhone = numLikeNull;
      let dublEmail = numLikeNull;

      arr.forEach((arr, i) => {
        if (currentPhone === arr.data[1] && i !== idx) {
          dublPhone = dublPhone !== numLikeNull ? dublPhone : i + 1;
        }

        const emailForCompare = arr.data[2] && arr.data[2].toLowerCase();
        if (currentEmail === emailForCompare && i !== idx) {
          dublEmail = dublEmail !== numLikeNull ? dublEmail : i + 1;
        }
      });

      arr[idx].duplicate = findLessIndex(dublPhone, dublEmail, idx, arr);
    });
  // ----------------------
};

export default validFile;
