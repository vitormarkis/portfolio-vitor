"use client"

import { IProjectLink } from "@/data/project"
import { TAnimation } from "@/types/framer-motion"
import { motion } from "framer-motion"
import { HTMLAttributes } from "react"
import { ImageCoverProject } from "../ImageCoverProject"
import twc from 'tailwindcss/colors'

interface Props extends HTMLAttributes<HTMLDivElement> {
  project: IProjectLink
}

const importantTagAnimation: TAnimation = {
  animate: {
    backgroundColor: [
      twc.blue["500"],
      twc.cyan["500"],
      twc.indigo["500"],
  ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
}

export function ProjectPageImageContainer({ project, className, ...rest }: Props) {
  return (
    <div className={`relative ${className ?? ""}`} {...rest}>
      {project.importance === "important" ? <motion.div
        animate="animate"
        variants={importantTagAnimation}
        className="py-0.5 px-2 -top-3 -right-3 text-white text-xs absolute z-30 shadow-md rounded-full"
      >
        <span>Principal</span>
      </motion.div> : null}
      <div className="rounded-xl md:p-3 p-1.5 overflow-hidden">
        <ImageCoverProject project={project} />
      </div>
    </div>
  )
}
