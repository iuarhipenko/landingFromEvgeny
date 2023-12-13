import React, {FC, JSX} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import AboutCompany from "../../sections/AboutCompany/AboutCompany";
import AreaOfExpertise from "../../sections/AreaOfExpertise/AreaOfExpertise";
import CountersValues from "../../sections/CountersValues/CountersValues";
import OurAdvantages from "../../sections/OurAdvantages/OurAdvantages";

const MainPageView: FC = (): JSX.Element => {
    return (
        <section>
            <Navbar />
            <AboutCompany />
            <AreaOfExpertise />
            <CountersValues count1={'3211'} count2={'23423'} count3={'2243'} />
            <OurAdvantages />
        </section>
    )
}

export default MainPageView