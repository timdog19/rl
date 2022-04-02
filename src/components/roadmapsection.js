import React from 'react'
import timelineElements from "./data/timelineElement.js";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


class RoadMapSection extends React.Component {

    render() {
        return (
            <div className="w-full flex flex-col place-items-center" id="roadmapSection">
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

export default RoadMapSection
