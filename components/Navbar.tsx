import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-between p-4 px-8 h-[60px]'>
      <Logo />
      <div className='flex gap-4 items-center'>
        <UserButton afterSignOutUrl='/' />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
