import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CommentSection({ targetType, targetId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios.get(`/api/comments/${targetType}/${targetId}`)
      .then(res => setComments(res.data));
  }, [targetType, targetId]);

  const postComment = () => {
    axios.post('/api/comments', {
      targetType,
      targetId,
      content: newComment
    }).then(res => {
      setComments(prev => [...prev, res.data]);
      setNewComment('');
    });
  };

  return (
    <div className="mt-4">
      <h5>Comments</h5>
      <ul className="list-group">
        {comments.map(comment => (
          <li key={comment.id} className="list-group-item">
            {comment.content}
          </li>
        ))}
      </ul>
      <textarea className="form-control mt-2" value={newComment} onChange={e => setNewComment(e.target.value)}></textarea>
      <button className="btn btn-primary mt-2" onClick={postComment}>Post Comment</button>
    </div>
  );
}

export default CommentSection;
