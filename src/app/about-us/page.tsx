import React from "react";
import { OurValues } from "./_components/OurValues";
import { History } from "./_components/History";
import { MeetTeam } from "./_components/MeetTeam";
import { CommentsRate } from "./_components/CommentsRate";
import { Stats } from "./_components/Stats";
import { VisitUs } from "./_components/VisitUs";
import { Ready } from "./_components/Ready";
import { OurStory } from "./_components/OurStory";

const AboutUsPage = () => {
  return (
    <div className="w-full h-full bg-[#ff ffff] ">
      <OurStory />

      <History />

      <OurValues />

      <MeetTeam />

      <CommentsRate />

      <Stats />

      <VisitUs />

      <Ready />
    </div>
  );
};

export default AboutUsPage;
