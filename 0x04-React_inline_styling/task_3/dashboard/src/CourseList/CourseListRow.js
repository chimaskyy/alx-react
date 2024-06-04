import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const style = StyleSheet.create({
  header: {
    backgroundColor: "red",
  },
  normal: {
    backgroundColor: "yellow",
  }
}) 
function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  
  return (
    <tr className={isHeader ? css(style.header) : css(style.normal)}>
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
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
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
