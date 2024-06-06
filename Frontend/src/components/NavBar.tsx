import { Link } from "react-router-dom";
import MainBtn from "./Buttons/MainBtn";
import Logo from "./Logo";

const navigation: any = [
  { id: 1, text: 'Home', to: '/' },
  { id: 2, text: 'About', to: '/about' },
  { id: 3, text: 'Work', to: '/work' },
];
export default function NavBar() {
  return (
    <nav className="flex justify-between items-center sticky top-0 bg-white/90 z-50 shadow xl:px-20 lg:px-16 md:px-10 px-5 dark:bg-gray-800">
      <Logo />
      <menu className="flex gap-4">
        {navigation.map((item: any) => (
          <Link className="hover:underline transition-all hover:text-pink-400" key={item.id} to={item.to}>{item.text}</Link>
        ))}
      </menu>
      <MainBtn
        className="hover:bg-pink-400 hover:text-white text-pink-400 border border-pink-400 transition-all"
        text="Let's Talk"
      />
    </nav>
  );
}
