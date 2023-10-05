import { currentUser } from '@clerk/nextjs';

const WelcomeMsg = async () => {
  const user = await currentUser();

  if (!user) {
    return <div>Error</div>;
  }

  return (
    <div className='flex w-full'>
      <h1 className='text-4xl font-bold'>
        Welcome, <br />
        {user.firstName} {user.lastName}
      </h1>
    </div>
  );
};

export default WelcomeMsg;
