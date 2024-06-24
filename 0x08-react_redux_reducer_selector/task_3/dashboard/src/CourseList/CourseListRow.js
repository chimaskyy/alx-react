import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
  },
  normal: {
    backgroundColor: "yellow",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <tr
      className={
        isHeader
          ? css(styles.header)
          : css(checked ? styles.rowChecked : styles.normal)
      }
    >
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            {textFirstCell}
          </td>
          {textSecondCell !== null && <td>{textSecondCell}</td>}
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
