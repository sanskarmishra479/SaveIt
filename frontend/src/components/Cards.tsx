import axios from 'axios';
import { ArrowUpLeft } from '../icons/ArrowUpLeft';
import { Bin } from '../icons/Bin';
import type { CardType } from '../types/CardTypes';
import { 
    InstagramEmbed,
    PinterestEmbed,
    YouTubeEmbed,
    LinkedInEmbed,
    FacebookEmbed,
    XEmbed,
  } from 'react-social-media-embed';
import { Backend_URL } from '../config';

  const embedDiv = {

    overflow: 'hidden',
    pointerEvents: 'none' as const,
    width: '100%',
  };

export const Cards = (props:CardType) =>{
    async function deleteContent(){
        const token = localStorage.getItem("authorization");
        if (!token) {
            alert("Please login to delete content");
            return;
        }
        const contentId = props.contentId;
        const response = await axios.delete(`${Backend_URL}/api/v1/content`,{
            headers: {
                "authorization": token
            },
            data: {
                contentId: contentId
            }
        });
        if (response.status === 200) {
            alert("Content deleted successfully");
            window.location.reload();
        }
        console.log(response);
    }
    return(
        <div className="w-65 h-fit bg-zinc-800 rounded-[40px] overflow-hidden ">
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
                {props.type === "youtube" && props.url && <YouTubeEmbed url={props.url} width="100%" height="145px rounded-none" />}
                {props.type === "twitter" && props.url && <XEmbed url={props.url} width="100%" className="mb-[-85px] mt-[-10px]" />}
                {props.type === "instagram" && props.url && <InstagramEmbed url={props.url} width="100%" height="100%" className="mt-[-120px] mb-[-125px]"/>}
                {props.type === "pinterest" && props.url && <PinterestEmbed url={props.url} width="100%" className="mb-[-65px] " />}
                {props.type === "linkedin" && props.url && <LinkedInEmbed url={props.url} width="100%" height="100%" className="rounded-2xl" />}
                {props.type === "facebook" && props.url && <FacebookEmbed url={props.url} width="100%" height="auto" className="rounded-2xl" />}
                {props.type === "other" && props.url && <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${props.url}`} alt="image" className="w-full object-cover" />}
            </div>
            <div className="flex items-center justify-between mt-1 p-5">
                    <div className="flex">
                        <a href={`${props.url}`} target="_blank"><ArrowUpLeft size={"8"} /></a>
                        <div onClick={deleteContent}>
                            <Bin size={"8"}/>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <p className="text-xs text-white font-[Josefin_Sans] font-light">01 Aug 2025</p>
                    </div>
            </div>
        </div>
    )
}