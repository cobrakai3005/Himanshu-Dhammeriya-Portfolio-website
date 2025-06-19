import { TypeAnimation } from "react-type-animation";
export default function Main() {
  return (
    <div id="#main">
      <img
        className="w-full h-screen object-cover object-center"
        src="https://images.unsplash.com/photo-1514543250559-83867827ecce?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div
        className={`hidden absolute top-0 left-0 w-full h-full bg-black/50 z-10 text-white sm:grid place-items-center place-content-center `}
      >
        <h3 className="text-2xl md:text-6xl font-semibold tracking-widest">
          Hello ! I am Himanshu
        </h3>
        <h3 className="text-3xl font-semibold tracking-widest ">
          I am{" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "a Full Stack Developer",
              1000,
              "Coder",
              1000,
              "Tech Learner",
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h3>
      </div>
    </div>
  );
}
