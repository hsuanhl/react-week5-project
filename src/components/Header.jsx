import { NavLink } from 'react-router';

function Header() {
  return (
    <>
      <nav className="fixed top-0 w-full h-[70px] bg-white/70 backdrop-blur-md border-b border-black/5 flex items-end gap-8 pb-4 px-6 md:px-12 z-50">
        <h1 className="text-xl font-light tracking-widest text-[#5d6a80]">LIVIN</h1>
        <div className="grow flex justify-between items-end ">
          <div className="flex gap-4">
            <NavLink to="/" className="hover:opacity-80 transition-opacity">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">首頁</div>
            </NavLink>
            <NavLink to="/products" className="hover:opacity-80 transition-opacity">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">產品列表</div>
            </NavLink>
            <NavLink to="/about" className="hover:opacity-80 transition-opacity">
              <div className="text-md font-light tracking-widest text-[#5d6a80]">關於我們</div>
            </NavLink>
          </div>
          <NavLink
            to="/cart"
            className="cursor-pointer w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm hover:bg-[#5d6a80] hover:text-white transition-all duration-300"
          >
            <i className="fa-solid fa-cart-shopping text-sm"></i>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
