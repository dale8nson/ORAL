import { ReactNode, forwardRef, useEffect } from "react";
import { motion, MotionValue, useMotionValue, animate } from 'framer-motion'
import { useStore } from '@/lib/store'
const Quote = forwardRef(function Quote({ children }: { progress: MotionValue, children: ReactNode }, ref) {

  const progress = useMotionValue(0)

  const anim = animate(progress, 1, {duration:3.5, repeatType:'mirror', repeat:Infinity} )

  anim.play()

  useEffect(() => {
    
  })

  const sideMenuOpen = useStore((state: any) => state.sideMenuOpen)
  return (
    <motion.div className="absolute left-auto flex justify-center top-[8rem] mx-auto w-9/12"  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3.5, repeatType:'mirror', repeat:Infinity}}>
      <motion.blockquote ref={ref as any} className="absolute blur-[1px] text-blue-200/60 top-[0rem] transition-all duration-500 left-auto w-9/12 mx-auto text-5xl z-20" >{children}</motion.blockquote>
      </motion.div>
  )
})

export default Quote


// animate={{ transform: sideMenuOpen ? 'translateX(10rem)' : 'translateX(0)', transitionDuration: '500ms' }}