import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { TOGGLE_THOUGHT_COMPLETION, DELETE_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS } from '../../utils/queries';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
  showCompleted = false,
}) => {
  const [toggleCompletion] = useMutation(TOGGLE_THOUGHT_COMPLETION, {
    refetchQueries: [{ query: QUERY_THOUGHTS }],
  });

  const [deleteThought] = useMutation(DELETE_THOUGHT, {
    refetchQueries: [{ query: QUERY_THOUGHTS }],
  });

  const filteredThoughts = thoughts.filter(
    (thought) => thought.completed === showCompleted
  );

  if (!filteredThoughts.length) {
    return <h3>{showCompleted ? 'No Completed Tasks' : 'No Pending Tasks'}</h3>;
  }

  const handleToggleCompletion = async (thoughtId) => {
    try {
      await toggleCompletion({
        variables: { thoughtId },
      });
    } catch (err) {
      console.error('Error toggling completion:', err);
    }
  };

  const handleDelete = async (thoughtId) => {
    try {
      await deleteThought({
        variables: { thoughtId },
      });
    } catch (err) {
      console.error('Error deleting thought:', err);
    }
  };

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {filteredThoughts &&
        filteredThoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this task on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this task on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${thought._id}`}
            >
              Join the discussion on this Task.
            </Link>
            <button
              className="btn btn-secondary btn-block"
              onClick={() => handleToggleCompletion(thought._id)}
            >
              {thought.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            
            {showCompleted && (
              <button
                className="btn btn-danger btn-block"
                onClick={() => handleDelete(thought._id)}
              >
                Delete Task
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
