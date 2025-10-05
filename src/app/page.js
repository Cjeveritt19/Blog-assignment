import Image from "next/image";
import Guineapig from "@/../public/images/guinea-pig-on-a-laptop.jpeg";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to my blog</h1>
      <Image
        className="home-image"
        src={Guineapig}
        alt="A guinea pig on a laptop"
        width={500}
        height={500}
      />
    </>
  );
}
