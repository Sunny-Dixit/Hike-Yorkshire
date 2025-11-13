import { useState } from "react";

import RyanImg from "../../assets/Team/Ryan.jpg";
import DavidImg from "../../assets/Team/David.jpg";
import BonnieImg from "../../assets/Team/Bonnie.jpg";
import JimmyImg from "../../assets/Team/jimmy.jpg";
import AndyImg from "../../assets/Team/Andy.jpg";
import samEImg from "../../assets/Team/samE.jpg";
import BenPImg from "../../assets/Team/BenP.jpg";
import RoisinEImg from "../../assets/Team/RoisinE.jpg";
import samTImg from "../../assets/Team/samT.jpg";

// Import all icons
import NavigationIcon from "../../assets/Team/Icons/navigation.png";
import HistoryIcon from "../../assets/Team/Icons/history.png";
import GeologyIcon from "../../assets/Team/Icons/geology.png";
import ForagingIcon from "../../assets/Team/Icons/foraging.png";
import FieldCraftIcon from "../../assets/Team/Icons/fieldcraft.png";
import RouteSelectionIcon from "../../assets/Team/Icons/routeselection.png";
import WildlifeIcon from "../../assets/Team/Icons/wildlife.png";
import FirstAidIcon from "../../assets/Team/Icons/firstaid.png";
import MapReadingIcon from "../../assets/Team/Icons/mapreading.png";

import ArchitectureIcon from "../../assets/Team/Icons/architecture.png";




export default function Team() {
    const [selectedMember, setSelectedMember] = useState(null);

    // Map skills to their icons
    const skillIcons = {
        Navigation: NavigationIcon,
        History: HistoryIcon,
        Geology: GeologyIcon,
        Foraging: ForagingIcon,
        "Field Craft": FieldCraftIcon,
        "Route Selection": RouteSelectionIcon,
        Wildlife: WildlifeIcon,
        "First Aid": FirstAidIcon,
        "Map Reading": MapReadingIcon,
        Architecture: ArchitectureIcon, // ✅ make sure team.skills has "Architecture"
    };

    const team = [
        {
            name: "Ryan Womersley",
            img: RyanImg,
            skills: ["Navigation", "History", "Foraging"],
            description:
                "Ryan spent six years in the Royal Marines and is an avid walker.Ryan spent six years in the Royal Marines and is an avid walker. He has led many multi day hikes in the UK, including in the Yorkshire Dales, Lake District, Dartmoor and Scottish Highlands. He has also led groups in Albania, Lebanon, Spain and Turkey.Ryan is passionate about hiking, foraging and the geology in his native Yorkshire and likes to incorporate those elements into his walks. He founded Hike Yorkshire to share this passion with others.",
        },
        {
            name: "David Bruce",
            img: DavidImg,
            skills: ["Navigation", "Geology", "Field Craft"],
            description:
                "David spent 10 years in the Royal Marines, during which time he hiked all over the world, including in Antarctica. He is also an ocean rower and along with Sam has completed two Atlantic crossings and holds a rowing world record.David is a keen adventurer and has undertaken many multi day hikes in the UK and abroad. He is from Yorkshire and is enthusiastic about sharing his home county with others. He is highly skilled in navigation and map reading, particularly on featureless terrain.",
        },
        {
            name: "Bonnie",
            img: BonnieImg,
            skills: ["Route Selection", "Foraging", "Wildlife"],
            description:
                "Bonnie is the team scout and at just three years old has completed several multi day hikes and the Yorkshire three peaks. She provides entertainment on walks, taking a keen interest in wild swimming and foraging for leftovers. Bonnie provides route selection support for the team. In her spare time she enjoys sleeping and eating.",
        },
        {
            name: "Jimmy D",
            img: JimmyImg,
            skills: ["Route Selection", "Field Craft", "First Aid"],
            description:
                "Jimmy is a former Grenadier Guards PTI of 12 years who now runs Jim’s Gym. He has undertaken extreme expeditions in countries such as Afghanistan, Kenya, Oman and Namibia, having crossed both the Wahabi Sands and the Namib Desert unsupported. Jimmy supports people of all ages and abilities through his personal training, leading groups on marathon length hikes and encouraging team spirit and a healthy lifestyle.In his spare time, Jimmy competes in ultramarathons and Ironman triathlons.",
        },
        {
            name: "Sam E",
            img: samEImg,
            skills: ["First Aid", "Wildlife", "Map Reading"],
            description:
                "Sam has just completed 12 years in the Royal Marines and is also a world record holding ocean rower, having crossed the Atlantic twice.Sam is an international kayaker, having raced in international races, placing competitively. He has hiked as far as Antarctica, where he led a military expedition with David. Sam learnt his skills on his native Dartmoor and loves to share his knowledge with groups of all abilities. As a man of the wilderness, he has specialist knowledge regarding flora and fauna.",
        },
        {
            name: "Andy",
            img: AndyImg,
            skills: ["Architecture", "History", "First Aid"],
            description:
                "Andy graduated UCL with a degree in archeology and worked as a professional archeologist before joining the Metropolitan Police. He ran history and architecture tours around London before moving to Yorkshire and teaching in schools. Andy takes groups on educational walking tours in towns, villages and in the countryside.Andy keeps animals on his land and enjoys working outdoors during his spare time.",
        },
        {
            name: "Ben P",
            img: BenPImg,
            skills: ["First Aid", "Field Craft", "Map Reading"],
            description:
                "Ben grew up in the Yorkshire Dales and served as an officer in the British Army for eight years. He instructed recruits in soldiering skills such as fieldcraft, map reading, first aid and physical training as well as using those skills as a leader on deployments. Ben is a regular on the three peaks and enjoys walking his dog on the moors in Yorkshire.",
        },
        {
            name: "Roisin E",
            img: RoisinEImg,
            skills: ["Foraging", "Wildlife", "First Aid"],
            description:
                "Roisin combines her knowledge of foraging and wildlife with first aid expertise to guide educational and safe hikesRoisin is a medical doctor and experienced multi day hiker. Having lived in New Zealand, she has tackled some of the most beautiful scenery in the world and now enjoys exploring the four corners of the British Isles every weekend. Roisin is also a forager and takes care to understand and protect the environment around her.In her spare time Roisin runs up fells and goes wild swimming.",
        },
        {
            name: "Sam T",
            img: samTImg,
            skills: ["Navigation", "Field Craft", "History"],
            description:
                "Sam served in the army for five years, followed by 10 years in the Royal Marines. During this time he practiced and used essential hiking skills such as navigation, route selection, first aid and fieldcraft. He is passionate about sharing this knowledge with others and particularly enjoys running courses for beginners with Hike Yorkshire. Sam loves to finish his hikes in a cosy pub by a log fire.",
        },
    ];


    return (
        <section className="py-14 bg-gray-50">
            <div className="text-center mb-10">
                <h2 className="font-[Raleway] font-bold text-[30px] leading-[44px] text-[#926A39]">
                    Meet The Team
                </h2>
                <p className="font-['Nunito_Sans'] font-normal text-[18px] leading-[30px] text-[#434343] mt-2">
                    Meet the passionate guides who turn every hike into an adventure
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center px-6 md:px-20">
                {team.map((t) => (
                    <div
                        key={t.name}
                        className="bg-white rounded-[32px] shadow-md hover:shadow-xl transition-all duration-300 
            p-4 text-center w-[360px] h-[418px] mx-auto flex flex-col gap-[10px]"
                    >
                        <div className="overflow-hidden rounded-[32px] h-[284px] w-[328px] mx-auto">
                            <img
                                src={t.img}
                                alt={t.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        <h3 className="font-['Nunito_Sans'] font-bold text-[20px] leading-[30px] text-[#C56441]">
                            {t.name}
                        </h3>

                        <div className="flex flex-wrap justify-center gap-1">
                            {t.skills.map((s) => (
                                <div
                                    key={s}
                                    className="flex items-center gap-1 px-2 py-1 rounded-full"
                                >
                                    <img
                                        src={skillIcons[s]}
                                        alt={s}
                                        className="w-3 h-3 object-contain"
                                    />
                                    <span className="font-['Nunito_Sans'] font-medium text-[14px] leading-[22px] text-[#2B2B2B]">
                                        {s}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Read More button */}
                        <button
                            onClick={() => setSelectedMember(t)}
                            className="mt-auto text-[#C56441] font-semibold hover:underline"
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-auto">
                    <div className="bg-white rounded-2xl w-full max-w-3xl p-6 relative flex flex-col md:flex-row gap-6">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                        >
                            ×
                        </button>

                        {/* Left: Photo */}
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="w-full h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                                <img
                                    src={selectedMember.img}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right: Skills & description */}
                        <div className="w-full md:w-2/3 flex flex-col gap-4 overflow-auto max-h-[400px]">
                            <h3 className="font-['Nunito_Sans'] font-bold text-[24px] text-[#C56441]">
                                {selectedMember.name}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {selectedMember.skills.map((s) =>
                                    skillIcons[s] ? (
                                        <div
                                            key={s}
                                            className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded-lg"
                                        >
                                            <img src={skillIcons[s]} alt={s} className="w-5 h-5" />
                                            <span className="font-['Nunito_Sans'] font-medium text-[16px]">
                                                {s}
                                            </span>
                                        </div>
                                    ) : null
                                )}
                            </div>

                            <p className="font-['Nunito_Sans'] text-[16px] text-gray-700 mt-2">
                                {selectedMember.description}
                            </p>

                        </div>
                    </div>
                </div>
            )}

        </section>




    );
}
