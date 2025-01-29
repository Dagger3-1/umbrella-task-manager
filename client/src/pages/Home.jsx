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
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="mb-5">
                <h2>Pending Tasks</h2>
                <ThoughtList
                  thoughts={thoughts}
                  title=""
                  showCompleted={false}
                />
              </div>
              <div>
                <h2>Completed Tasks</h2>
                <ThoughtList
                  thoughts={thoughts}
                  title=""
                  showCompleted={true}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
