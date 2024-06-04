import React from 'react'
import PropTypes from "prop-types";
import BodySection from "./BodySection"
import { StyleSheet, css } from "aphrodite";


class BodySectionWithMarginBottom extends React.Component {
    render () {
         return (
           <div className={css(styles.marg)}>
             <BodySection {...this.props} />
           </div>
         );
    }
}

const styles = StyleSheet.create({
  marg: {
    marginBottom: 40, 
  }
})

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom