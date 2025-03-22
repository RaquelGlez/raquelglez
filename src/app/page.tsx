import Contact from "@/components/contact/Contact";
import Work from "@/components/work/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
        <h1>Raquel González</h1>
        <h3>FrontEnd Developer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          tenetur nulla, accusamus maiores dolorem, perspiciatis voluptate sequi
          explicabo ut praesentium eos doloremque deserunt quisquam illo vel
          cum. Maiores, vel voluptates!
        </p>
        <br />
        <br />
        <br />
      </main>
      <br />
      <br />
      <div className="w-full h-1 bg-slate-600"></div>
      <Work />
      <Contact />
    </div>
  );
}
