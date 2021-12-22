import React from 'react';
import css from './addFamily.module.css';
import * as AiIcons from "react-icons/ai";

const AddFamily = (props) => {

  return (
    <>
      <button className={css.button}>
          <AiIcons.AiOutlinePlusCircle />
      </button>
    </>
  );
};

export default AddFamily;
