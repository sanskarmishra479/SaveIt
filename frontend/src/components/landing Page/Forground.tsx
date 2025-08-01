import { useRef } from "react"
import { Card } from "./Card"
import { LandingNav } from "./LandingNav";


export const Forground = () =>{
    const containerRef = useRef<HTMLDivElement>(null!);
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return(
        <>  
            <LandingNav />
            
            <div ref={containerRef} className="fixed w-screen h-full z-[3] columns-4 space-y-4 ">
                <Card imgUrl="https://img.youtube.com/vi/y-4CG-ptHq4/maxresdefault.jpg" url="https://www.youtube.com/watch?v=y-4CG-ptHq4" title="This Took 10 Years... Welcome to 100xSchool" type="youtube" referance={containerRef} date={date} />
                <Card imgUrl="https://i.pinimg.com/1200x/86/da/97/86da97b094fdcf6109a864534fc5c804.jpg" url="https://www.instagram.com/" title="Marval 🔥" type="youtube" referance={containerRef} date={date} />
                <Card imgUrl="https://i.pinimg.com/1200x/35/48/46/354846023fa9267ccec5154d580085ef.jpg" url="https://x.com/naval/status/1946751284239097965" title="People With Low Attention Spans" type="youtube" referance={containerRef} date={date} />
                <Card className="mt-90" imgUrl="https://i.pinimg.com/1200x/85/bb/ae/85bbae288c5fa7ded5176c9910502939.jpg" url="https://in.pinterest.com/pin/7459155629656099/" title="Art is the only way to run away without leaving home." type="youtube" referance={containerRef} date={date} />
            </div>
        </>
    )
}