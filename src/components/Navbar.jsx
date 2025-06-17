import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
  <div className='max-w-screen-lg mx-auto flex justify-between items-center px-4 py-2'>
    <div className='logo font-bold text-2xl'> 
      <span className='text-green-700 text-2xl'>&lt;</span>  
      Pass
      <span className='text-green-500 text-2xl'>Vault&gt;</span> 
    </div>

    <ul>
      <li className='flex gap-4'>
        <a className='hover:font-bold' href='/'>Home</a>
        <a className='hover:font-bold' href='#'>About</a>
        <a className='hover:font-bold' href='#'>Contact</a>
      </li>
    </ul>

    <a href="https://github.com/kanishkgoyall" target="_blank" rel="noopener noreferrer">
      <button className='text-white bg-green-700 rounded-full flex items-center ring-white ring-1 px-3 py-2'> 
        <FaGithub className="mr-2 w-5 h-5" />
        <span className='font-bold'>GitHub</span>
      </button>
    </a>
  </div>
</nav>
  );
};

export default Navbar;
