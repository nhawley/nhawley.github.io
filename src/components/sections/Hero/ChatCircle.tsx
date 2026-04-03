import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { PulsingBorder } from '@paper-design/shaders-react';
import { motion } from 'framer-motion';

export function ChatCircle() {
  return (
    <div className="absolute bottom-8 right-8 z-30">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative w-20 h-20 flex items-center justify-center cursor-pointer">
            <PulsingBorder
              colors={["#f0f4ff", "#4f82b9", "#15205b"]}
              colorBack="#00000000"
              speed={1.5}
              roundness={1}
              thickness={0.1}
              softness={0.2}
              intensity={5}
              spotSize={0.1}
              pulse={0.1}
              smoke={0.5}
              smokeSize={4}
              scale={0.65}
              rotation={0}
              frame={9161408.251009725}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />

            {/* Rotating Text Around the Border */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ transform: "scale(1.6)" }}
            >
              <defs>
                <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="text-sm instrument select-none fill-black dark:fill-white">
                <textPath href="#circle" startOffset="0%" textLength="100%" lengthAdjust="spacing">
                  Nate Chat • Nate Chat • Nate Chat •
                </textPath>
              </text>
            </motion.svg>
          </div>
        </TooltipTrigger>
        <TooltipContent>Coming May 2026</TooltipContent>
      </Tooltip>
    </div>
  );
}
