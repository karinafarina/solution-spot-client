import React from 'react';
import './Others.css';

export default function Others() {
  return (
    <div className="others">
      <h2>Someone else's Solution</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quia, vero placeat tenetur obcaecati error provident enim distinctio consequatur mollitia earum aspernatur voluptates aperiam quidem, officiis reprehenderit pariatur illo quibusdam.</p>
      <form className="comments">
        <label htmlFor="new-comment" id="new-comment">Comment</label>
        <textarea name="new-comment" id="new-comment" cols="50" rows="20"></textarea>
        <input type="submit"/>
        {/* After submitting, comment will be added to database */}
      </form>
    </div>
  )
}
