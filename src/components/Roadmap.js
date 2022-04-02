import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import timelineElements from "./data/timelineElement.js";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

function Roadmap() {
    let titleelment = useRef(null)
    let roadmapelement = useRef(null)
    let triggerelement = useRef(null)

    useEffect(()=> {
        gsap.from(roadmapelement,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
                toggleActions: "restart pause restart pause",
                start: "35% 95%",
                end: "100% 5%",
                markers: false
            },
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "expo.out"
        });
        gsap.from(titleelment,{
            scrollTrigger:{
                trigger: triggerelement,
                endTrigger: triggerelement,
                toggleActions: "restart pause restart pause",
                start: "35% 95%",
                end: "100% 5%",
                markers: false
            },
            duration: 2,
            opacity: 0,
            y: 100,
            ease: "expo.out"
        });
    }, [])
    

class Roadmap extends React.Component {

    render() {
        return (
            <div className="w-full flex flex-col place-items-center" id="roadmap">
                <div className="w-84.5% pb-36 flex flex-col place-items-center space-y-36">
                    <div className="w-max">
                        <h1 className="text-white text-5xl font-extrabold italic">THE ROADMAP</h1>
                        <div className="w-full h-1.5" style={{
                            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(162 105 247) 50%, rgba(255, 255, 255, 0) 100%)'
                        }}></div>
                    </div>
                    <VerticalTimeline>
                        {timelineElements.map((element, i) => {
                        return (
                            <VerticalTimelineElement
                                key={i}
                                date={element.date}
                                dateClassName="date"
                                contentStyle={{ 
                                    background: "rgb(67 41 134)", 
                                    color: "#fff",
                                    borderWidth: '2px',
                                    borderRadius: '20px',
                                    borderColor: 'white',
                                    WebkitBoxShadow: 'none'
                                }}
                            >
                                <h3 className="vertical-timeline-element-title text-3xl font-bold">
                                    {element.title}
                                </h3>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        );
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        )
    }
}

export default Roadmap
