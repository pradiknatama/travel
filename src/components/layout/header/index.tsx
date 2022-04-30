import Image from "next/image";
import traveloLogo from "public/assets/travelo-logo-header.png";
import Container from "components/container";
import Search from "./Search";
const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-between item-center">
          <div className="flex">
            <Image
              src={traveloLogo}
              alt="Travelo Logo"
              placeholder="blur"
              height="48"
              width="182"
            />
            <Search />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
