import { ArrowUpLeft } from "../icons/ArrowUpLeft"
import { Bin } from "../icons/Bin"
import type { CardType } from "../types/CardTypes";
import { 
    InstagramEmbed,
    PinterestEmbed,
    YouTubeEmbed,
    LinkedInEmbed,
    FacebookEmbed,
    XEmbed,
  } from 'react-social-media-embed';

export const Cards = (props: CardType) => {
    const embedDiv = {
        position: 'relative' as const,
        zIndex: 1,
        overflow: 'hidden',
        pointerEvents: 'none' as const,
        width: '100%',
        borderRadius: '18px'
      };
    return (
        <div className="w-65 bg-gray-300 rounded-md flex flex-col p-2 h-fit break-inside-avoid">
            <div style={embedDiv}>
                {props.type === "youtube" && props.url && <YouTubeEmbed url={props.url} width="100%" height="auto" className="rounded-2xl" />}
                {props.type === "twitter" && props.url && <XEmbed url={props.url} width="100%" className="mb-[-85px] rounded-2xl" />}
                {props.type === "instagram" && props.url && <InstagramEmbed url={props.url} width="100%" height="100%" className="mt-[-120px] mb-[-125px] rounded-2xl"/>}
                {props.type === "pinterest" && props.url && <PinterestEmbed url={props.url} width="100%" className="mb-[-100px] rounded-2xl" />}
                {props.type === "linkedin" && props.url && <LinkedInEmbed url={props.url} width="100%" height="auto" className="rounded-2xl" />}
                {props.type === "facebook" && props.url && <FacebookEmbed url={props.url} width="100%" height="auto" className="rounded-2xl" />}
                {props.type === "other" && props.url && <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${props.url}`} alt="image" className="w-full object-cover" />}
            </div>
            <div className="flex-col items-center gap-3 pt-3 w-full">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-6">
                        <img
                            src={`https://www.google.com/s2/favicons?sz=64&domain_url=${props.url}`}
                            alt="favicon"
                            className="w-6 h-6 rounded"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                    </div>
                    <h1 className="text-md font-[Josefin_Sans] overflow-hidden text-ellipsis whitespace-nowrap max-w-50">
                        {props.title}
                    </h1>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <div className="flex">
                        <a href={`${props.url}`} target="_blank"><ArrowUpLeft size={"8"} /></a>
                        <Bin size={"8"} />
                    </div>
                    <div className="flex items-end">
                        <p className="text-xs font-[Josefin_Sans] font-light">27 Jul 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}