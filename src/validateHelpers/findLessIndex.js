

const findLessIndex = (dublPhone, dublEmail, idx, arr) => {
    let lessIndex;
    const numLikeNull = -1;
    if (dublPhone !== numLikeNull && dublEmail !== numLikeNull) {
      if (dublPhone < dublEmail) {
        lessIndex = dublPhone;
        arr[idx].myErrors[1] = false;
      } else {
        lessIndex = dublEmail;
        arr[idx].myErrors[2] = false;
      }
    }
    if (dublPhone !== numLikeNull && dublEmail === numLikeNull) {
      lessIndex = dublPhone;
      arr[idx].myErrors[1] = false;
    }
    if (dublPhone === numLikeNull && dublEmail !== numLikeNull) {
      lessIndex = dublEmail;
      arr[idx].myErrors[2] = false;
    }

    return lessIndex;
}

export default findLessIndex