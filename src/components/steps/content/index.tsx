import Cta from "@/components/ui/cta";
import Form from "@/components/ui/form";
import { useStepsStore } from "@/state/steps";
import { LayoutGroup, motion } from "framer-motion";
import { FC, PropsWithChildren, useEffect, useRef } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { steps, current, setCurrent } = useStepsStore();

  const isLastStep = current.number === steps.length;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      scrollY: 0,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <LayoutGroup>
      <motion.div
        id="content"
        ref={contentRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="px-8 py-8 h-full flex flex-col overflow-scroll md:max-w-screen-xl md:mx-auto justify-between items-center"
      >
        {current.content}

        {isLastStep ? (
          <>
            <Cta text={"Fai il quiz"} classes="mt-8 bg-sky-500" href="/test" />
            <h5 className="text-center ">
              <span className="block text-xl font-semibold text-gray-900">
                Vuoi saperne di più o sei indeciso su quale corso scegliere?
              </span>
              <span className="block text-md text-gray-500">
                Lasciaci i tuoi dati, ti contatteremo noi al più presto!
              </span>
            </h5>
            <Form />
          </>
        ) : (
          <Cta
            text={"Avanti"}
            classes="mt-8 bg-primary"
            onClick={() => {
              contentRef.current?.scrollTo(0, 0);
              setCurrent(
                steps.find((step) => step.number === current.number + 1)?.id ||
                  current.id
              );
            }}
          />
        )}
      </motion.div>
    </LayoutGroup>
  );
};

export default Content;
