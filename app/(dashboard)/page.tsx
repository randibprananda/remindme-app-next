import { Suspense } from 'react';

import WelcomeMsg from '@/components/welcome-message/WelcomeMsg';
import WelcomeMsgFallback from '@/components/welcome-message/WelcomeMsgFallback';

const Home = () => {
  return (
    <Suspense fallback={<WelcomeMsgFallback />}>
      <WelcomeMsg />
    </Suspense>
  );
};

export default Home;
