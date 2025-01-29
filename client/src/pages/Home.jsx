import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <h2 className="text-center">Pending Tasks</h2>
              <ThoughtList
                thoughts={thoughts}
                title=""
                showCompleted={false}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <h2 className="text-center">Completed Tasks</h2>
              <ThoughtList
                thoughts={thoughts}
                title=""
                showCompleted={true}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
