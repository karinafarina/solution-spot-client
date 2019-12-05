import React from 'react';
import './SolutionsHome.css';

export default function SolutionsHome() {
  return (
    <div className="solutions">
      <h2>Post Solutions</h2>
      <div className="form-container">
        <h2>Category Name</h2>
        <form className="solutions-form">
          <label htmlFor="my-solution">Solution Idea</label>
          <textarea id="my-solution" name="my-solution" cols="30" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ex consectetur repellat labore? Id doloribus ducimus
      unde perferendis eos labore minima soluta adipisci eveniet iure sit aliquam, quo beatae. Et.</textarea>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}
