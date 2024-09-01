import type { NextPage } from 'next';
import OS from '../components/os'
import Meta from '../components/SEO/Meta'

const Home: NextPage = () => {
  return (
    <div>
      <Meta />
      <OS />
    </div>
  );
};

export default Home;
