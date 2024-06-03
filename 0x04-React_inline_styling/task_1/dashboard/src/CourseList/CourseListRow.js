import React from "react";
import PropTypes from "prop-types";

const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headStyle = {
  backgroundColor: "#deb5b545",
};
function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headStyle} colSpan={2}>{textFirstCell}</th>
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
