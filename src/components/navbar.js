const Navbar = () => (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-10">
      <ul className="flex justify-center space-x-8 py-4">
        {['Home', 'About', 'Technical Skills', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-gray-400 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
  
  export default Navbar;