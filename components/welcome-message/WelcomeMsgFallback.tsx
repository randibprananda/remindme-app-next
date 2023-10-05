import { Skeleton } from '@/components/ui/skeleton';

const WelcomeMsgFallback = () => {
  return (
    <div className='flex w-full gap-2 flex-col'>
      <Skeleton className='w-[180px] h-[36px]' />
      <Skeleton className='w-[280px] h-[36px]' />
    </div>
  );
};

export default WelcomeMsgFallback;
