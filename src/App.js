import "./App.css";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Details from "./components/details";

function App() {
  const scrollRef = useRef(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const [animationPlayer, setAnimationPlayed] = useState(false);

  const textControls = useAnimation();
  const carControls = useAnimation();

  const [scrollYPos, setScrollYPos] = useState(0);

  // useEffect(() => {
  //   return scrollYProgress.on("change", (latest) => {
  //     const newAnimation = latest > 0.4 ? "stretched" : "default";
  //     if (newAnimation !== lastAnimation) {
  //       textControls.start(newAnimation);
  //       setLastAnimation(newAnimation);
  //     }
  //   });
  // }, [scrollYProgress, textControls, lastAnimation]);

  useEffect(() => {
    if (scrollYPos > 0.4 && !animationPlayer) {
      textControls.start("stretched");
      carControls.start("entrance");
      setAnimationPlayed(true);
    }
  }, [scrollYPos]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollYPos(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="App" ref={scrollRef}>
      <div className="header">
        <div className="header__items">
          <h1 className="brand-name">PORSCHE</h1>
          <img
            className="logo"
            src="./assets/Porsche-logo.png"
            alt="Porsche Logo"
          />
        </div>

        <div className="header__tagline">
          <h2 className="tagline">The new 911 GT3 RS. Limits pushed. Again.</h2>
        </div>

        <div className="header__content">
          <motion.div
            variants={{
              default: { transform: "scale(0.7, 1.25)" },
              stretched: { transform: "scale(0.7, 2.2)" },
            }}
            initial="default"
            animate={textControls}
            transition={{ duration: 0.3, type: "linear" }}
            className="car__name"
            ref={ref}
          >
            PORSCHE
          </motion.div>

          <motion.img
            variants={{
              default: { opacity: 0, x: 200, y: "-50%" },
              entrance: { opacity: 1, x: "-50%", y: "-50%" },
            }}
            initial="default"
            animate={carControls}
            transition={{ duration: 0.65, delay: 0.1, type: "circInOut" }}
            className="car__image"
            src="./assets/Porsche-911-GT3-RS_waifu2x_noise3_scale2x.png"
            alt="Porsche Car"
          ></motion.img>
        </div>
      </div>

      <Details />
    </div>
  );
}

export default App;
