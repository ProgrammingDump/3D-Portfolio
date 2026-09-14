import { motion } from 'framer-motion'

import { herographic } from '../../assets/'
import { SectionWrapper } from '../../hoc'
import { fadeIn } from '../../utils/motion'

const HeroGraphic = () => {
    return (
        <>
            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                whileHover={{ scale: 1.03, rotateX: -4, rotateY: 6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className=' w-full flex justify-center'
                style={{ perspective: 1000 }}
            >
                <img
                    src={herographic}
                    alt='Hero graphic'
                    className='w-full max-w-4xl rounded-2xl object-cover'
                />
            </motion.div>
        </>
    )
}

export default SectionWrapper(HeroGraphic, '')
