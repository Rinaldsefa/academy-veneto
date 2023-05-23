import CourseCard from "@/components/ui/course";
import Text from "@/components/ui/text";
import { courses } from "@/constants";
import { motion } from "framer-motion";

const Courses = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const balloonAnimation = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div variants={textAnimation}>
        <Text classes="md:text-2xl" text="Ma veniamo al punto" />
      </motion.div>

      <motion.div variants={textAnimation}>
        <Text classes="md:text-2xl" text="Ecco le nostre specializzazioni!" />
      </motion.div>

      <motion.div variants={textAnimation}>
        <Text
          classes="text-primary font-semibold text-lg md:text-3xl"
          text="Seleziona la tua preferita"
        />
      </motion.div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center my-8 gap-12 md:gap-8 ">
        {courses.map((course, index) => (
          <motion.div variants={balloonAnimation} key={course.title}>
            <CourseCard {...course} delay={index * 0.4} />
          </motion.div>
        ))}
      </div>

      <motion.div variants={textAnimation}>
        <Text
          classes="text-purple-500 font-black text-lg md:text-xl uppercase"
          text="novità"
        />
      </motion.div>

      <motion.div variants={textAnimation}>
        <Text
          classes="md:text-xl"
          text="Non sai quale scegliere? Fai il nostro quiz! L'intelligenza
					Artificiale ti aiuterà in questa importante decisione."
        />
      </motion.div>
    </>
  );
};

export default Courses;
