export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span>Aaron kim</span>
            </h1>
          </div>
          <div className="">photo</div>
        </div>
      </div>
    </section>
  );
}
