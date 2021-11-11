const Navbar = () => {
  return (
    <div className=''>
      <nav className='px-14 py-4'>
        <ul className="flex justify-between">
          <div>
            <a className="uppercase text-3xl text-red-700 font-bold">netflix</a>
          </div>
          <div className='flex  items-center justify-between w-52 '>
            <li className='bg-gray-900 text-white py-1 px-4 border border-white'>English</li>
            <li className='bg-red-600 text-white py-1 px-4 rounded capitalize'>Sign in</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
