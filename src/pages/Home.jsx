import SkillItems from "../components/SkillItems";
import RenderList from "../shared/RenderList";
import skillsData from "../data/skills.json";

const Home = () => {
  return (
    <main className="bg-surface text-text">
      {/* Hero section */}
      <div className="wrapper">
        <section className="text-text  min-h-[89vh] grid grid-cols-12 items-center md:py-20  py-10">
          <div className="md:col-span-5 space-y-4 col-span-12 justify-items-center">
            <div className="w-60 h-60 aspect-square border-3 border-border">
              <img
                className="w-full aspect-square object-cover"
                src="./assets/qabardy.jpg"
                alt="Qabardy-Photo"
              />
            </div>
            <h2 className="capitalize font-bold text-2xl">mohamed qabardy</h2>
            <p className="text-2xl capitalize font-light">
              Art Director & designer
            </p>
          </div>
          <div className="md:col-span-7 col-span-12 mt-10">
            <span className="capitalize font-bold text-2xl">bio:</span>
            <p className="leading-8 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              vero non omnis, hic possimus ad at, quos fugit quam nobis pariatur
              odit? Ducimus, natus quo. Aperiam qui voluptates quis inventore.
            </p>
          </div>
        </section>
      </div>
      {/* About Section */}

      <section className="min-h-[100vh] bg-background py-20">
        <div className="wrapper">
          <p className="text-2xl tracking-wider leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptates, voluptatum laboriosam quod obcaecati expedita id dolor
            saepe a voluptatibus deserunt, repellendus asperiores vitae esse
            libero quas doloremque corporis necessitatibus?
          </p>
          <p className="mt-10 text-xl leading-8 tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            repellat id quaerat sit culpa minus,
            <span className="bg-accent p-2">
              quod dolor odit nostrum placeat
            </span>
            magnam aliquam perferendis iure dolorum magnam aliquam perferendis
            iure dolorum magnam aliquam perferendis iure dolorum
            <span className="bg-accent p-2">quas itaque illo alias quae.</span>
            repellat id quaerat sit culpa minus, quod dolor odit nostrum placeat
            magnam aliquam perferendis iure dolorum quas itaque illo alias quae.
          </p>
        </div>
      </section>

      <section className="min-h-[100vh] bg-background md:py-20  py-10 ">
        <div className="wrapper border-t pt-10 border-accent">
          <h2 className="text-3xl font-bold text-center">My Skills</h2>
          <div className="grid grid-cols-12 justify-items-center mt-10 gap-6">
            <RenderList data={skillsData} ItemComponent={SkillItems} />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
