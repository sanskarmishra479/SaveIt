import { Bin } from '../../icons/Bin';
import { ArrowUpLeft } from '../../icons/ArrowUpLeft';
import { motion } from "motion/react"


  const embedDiv = {
    position: 'relative' as const,
    zIndex: 1,
    overflow: 'hidden',
    pointerEvents: 'none' as const,
    width: '100%',
  };

export interface propType{
    title?: string;
    url?: string;
    imgUrl?: string;
    type?: "youtube" | "twitter" | "instagram" | "pinterest";
    referance?: React.RefObject<HTMLDivElement>;
    date?: string;
    className?: string;
}

export const Card = (props:propType) =>{
    return(
        <motion.div drag whileDrag={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} dragConstraints={props.referance} initial={{ x: 3, y: 8 }} className="w-65 h-fit bg-zinc-800 rounded-[40px] ml-5 overflow-hidden shadow-2xl">
            <div className="h-15 w-full p-5">
                <div className="flex items-center gap-2 h-full text-white">
                    <div className="w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center">
                            <img
                                src={`https://www.google.com/s2/favicons?sz=64&domain_url=${props.url}`}
                                alt="favicon"
                                className="w-6 h-6 rounded"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                    </div>
                    <div><h1 className='text-md font-[Josefin_Sans] overflow-hidden text-ellipsis whitespace-nowrap max-w-45'>
                        {props.title}</h1>
                    </div>
                </div>
            </div>
            <div className='w-full' style={embedDiv}>
                {props.type === "youtube" && props.url && <img src={`${props.imgUrl}`} alt="image"/>}
            </div>
            <div className="flex items-center justify-between mt-1 p-5">
                    <div className="flex">
                        <a href={`${props.url}`} target="_blank"><ArrowUpLeft size={"8"} /></a>
                        <Bin size={"8"} />
                    </div>
                    <div className="flex items-end">
                        <p className="text-xs text-white font-[Josefin_Sans] font-light">{props.date}</p>
                    </div>
            </div>
        </motion.div>
    )
}