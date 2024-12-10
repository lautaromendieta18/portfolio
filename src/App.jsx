import ProjectPreview from "./components/ProjectPreview";
import Avatar from "./components/Avatar";
import SectionHeading from "./components/SectionHeading";
import "./App.css";
import CustomSection from "./components/CustomSection";
import ReactIcon from "./components/ReactIcon";
import CustomButton from "./components/CustomButton";
import BootstrapIcon from "./components/BootstrapIcon";
import GodotIcon from "./components/GodotIcon";
import PythonIcon from "./components/PythonIcon";
import JSIcon from "./components/JSIcon";
import Experience from "./components/Experience";
import MinorProject from "./components/MinorProject";

function App() {
  document.body.classList.add("bg-slate-800");
  return (
    <div className="relative min-h-dvh">
      <main className="mx-4 lg:mx-80 text-white p-8">
        <header className="flex flex-col md:flex-row justify-center py-4 mb-4 items-center gap-5">
          <Avatar />
          <div className="">
            <h1 className="text-3xl font-bold">Lautaro Mendieta</h1>
            <h2 className="text-md">
              Fullstack developer, programming enthusiast
            </h2>
            <div className="flex items-center gap-5">
              <CustomButton to="./CV-1.pdf" color={"#18864B"}>
                <i className="fa-solid fa-file mr-2"></i> Resume
              </CustomButton>
              <a
                href="https://www.linkedin.com/in/lautaro-martin-mendieta-932443235"
                className="hover:scale-105 transition-all"
              >
                <i className="fa-brands fa-2xl fa-linkedin text-[#0A66C2]"></i>
              </a>
              <a
                href="https://github.com/lautaromendieta18"
                className="hover:scale-105 transition-all"
              >
                <i className="fa-brands fa-2xl fa-github text-white"></i>
              </a>
            </div>
          </div>
        </header>
        <hr className="border-slate-600"></hr>
        <CustomSection>
          <SectionHeading>
            Experience <i className="fa-solid fa-keyboard"></i>
          </SectionHeading>
          <Experience title="Freelance Developer" subtitle="Mar 2022 - Present">
            <ul className="list-disc px-5">
              <li className="mt-2">
                Web development with Python (Flask, Django), JavaScript (React),
                HTML and CSS.
              </li>
              <li className="mt-1">Game development with Godot</li>
            </ul>
          </Experience>
        </CustomSection>
        <CustomSection>
          <SectionHeading>
            Projects <i className="fa-solid fa-briefcase"></i>
          </SectionHeading>
          <ProjectPreview
            title="Dorados en Concordia"
            icons={
              <>
                <ReactIcon />
                <BootstrapIcon></BootstrapIcon>
              </>
            }
            to="https://lautaromendieta18.github.io/berloni/"
            image="./berloni.jpg"
          >
            Landing page for a fishing company, a freelancer job. From
            planification and design to deploying to production. Made 100% by
            me.
          </ProjectPreview>
          <ProjectPreview
            title="VR Physics Simulation"
            icons={<GodotIcon />}
            image="./vrphysicssimulator.jpg"
            to="https://www.youtube.com/watch?v=FcVHkW_ciVM&feature=youtu.be"
          >
            A projectile motion simulation adapted to run on Meta Quests
            headsets, my responsibility was the technical aspects and
            programming. University project.
          </ProjectPreview>
          <ProjectPreview
            title="CatelottiApp"
            icons={
              <>
                <PythonIcon />
                <JSIcon />
              </>
            }
            image="./catelottiapp.jpg"
            to="https://www.youtube.com/watch?v=sxzqIURtHoM&feature=youtu.be"
          >
            A Flask web application made for a gym. It has a users system, an
            admin system and a schedule management system.
          </ProjectPreview>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MinorProject
              title="AI for games"
              icons={<GodotIcon />}
              to="https://www.youtube.com/watch?v=FPMqDupeeWo&feature=youtu.be"
            >
              AI with differents design patterns
            </MinorProject>
            <MinorProject
              title="Wiki"
              icons={
                <>
                  <PythonIcon />
                  <JSIcon />
                </>
              }
              to="https://youtu.be/vI88aKI1XGk"
            >
              A simple wiki with CRUD
            </MinorProject>
            <MinorProject
              title="Network"
              icons={
                <>
                  <PythonIcon />
                  <JSIcon />
                </>
              }
              to="https://www.youtube.com/watch?v=csdqYifjYDM&feature=youtu.be"
            >
              Network with followers, likes, posts, etc.
            </MinorProject>
            <MinorProject
              title="Commerce"
              icons={
                <>
                  <PythonIcon />
                  <JSIcon />
                </>
              }
              to="https://www.youtube.com/watch?v=BzKsxMkDRBQ"
            >
              Auctions web application
            </MinorProject>
          </section>
        </CustomSection>
        <CustomSection>
          <SectionHeading>
            Work with me <i className="fa-solid fa-envelope"></i>
          </SectionHeading>
          <div className="flex items-center">
            <div className="bg-slate-700 rounded-lg px-3 py-2 my-5 select-all w-full">
              lautaromendienta05@gmail.com
            </div>
            <a
              href="mailto:lautaromendienta05@gmail.com"
              className="mx-2 px-4 py-2 bg-slate-600 rounded-lg hover:scale-105 transition-all"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </a>
          </div>
        </CustomSection>
      </main>
      <footer className="bg-slate-900 absolute bottom-0 w-full py-3 text-center text-white">
        Made by Lautaro M. Mendieta. Avatar by{" "}
        <a className="hover:underline" href="https://www.drawkit.com">
          Drawkit
        </a>
      </footer>
    </div>
  );
}

export default App;
