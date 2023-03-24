import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            {/* navbar */}
            <nav className="w-full fixed top-0 bg-white">
                <div className="container mx-auto py-5 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-indigo-900">Doman.</span>
                    </div>

                    <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
                        <li className="hover:text-gray-500"><Link to="/">Beranda</Link></li>
                        <li className="hover:text-gray-500"><Link to="/portofolio">Portofolio</Link></li>
                        <li className="hover:text-gray-500"><Link to="/kontak">Kontak</Link></li>
                    </ul>

                    <span></span>

                    <div className="space-y-1 md:hidden cursor-pointer">
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </div>

                    <ul className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
                        <li className="hover:text-gray-500"><Link to="/">Beranda</Link></li>
                        <li className="hover:text-gray-500"><Link to="/portofolio">Portofolio</Link></li>
                        <li className="hover:text-gray-500"><Link to="/kontak">Kontak</Link></li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Header;