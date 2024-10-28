import photocatalytic_research from "@/public/images/research-areas/photocatalytic_research.webp";
import CorrosionBehavior from "@/public/images/research-areas/CorrosionBehavior.webp";
import Photocatalysts from "@/public/images/research-areas/Photocatalysts.webp";
import Photoelectrochemical from "@/public/images/research-areas/Photoelectrochemical.webp";
import SynthesizingSemiconductors from "@/public/images/research-areas/SynthesizingSemiconductors.webp";
import Image from "next/image";

const ResearchAreas = () => {
  return (
    <main className="py-16">
      <div className="bg-gray-50 dark:bg-slate-800 pb-12 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center max-w-6xl max-lg:max-w-2xl max-sm:max-w-sm mx-auto">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-yellow-700  mb-6">
              Research Areas
            </h2>
            <h3
              className="text-sm md:text-base lg:text-base leading-2 pb-8 lg:pb-32 font-semibold text-gray-500
             dark:text-gray-300"
            >
              Electrochemistry Research Focus: Corrosion, Dopant Optimization,
              Metal Oxides, and Photocatalytic Performance....
            </h3>
            {/* 0.  Study Of Photocatalytic Dye Degradation Ability(PCA) Performance Of Semiconductors */}
            <div
              className="mt-8 cursor-pointer rounded-lg
             overflow-x-hidden overflow-y-scroll 
             max-h-[270px] group shadow-lg bg-white dark:bg-slate-700 [&::-webkit-scrollbar]:w-[5px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-yellow-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
            >
              <Image
                src={photocatalytic_research}
                alt="Study Of Photocatalytic Dye Degradation Ability(PCA) Performance Of Semiconductors Graphics"
                height={500}
                width={500}
                quality={80}
                loading="lazy"
                className="w-full object-cover rounded-md"
              />
              <div className="py-6">
                <span className="text-sm block text-blue-600 font-bold mb-2 text-center border-b border-gray-300 dark:border-gray-600 pb-2">
                  Study Of Photocatalytic Dye Degradation Ability(PCA)
                  Performance Of Semiconductors
                </span>
                <span className="text-sm block text-gray-600 dark:text-gray-300 font-normal mb-2 text-center">
                  The Photo Decolorization Of Dyes Is Considered As A Favorable
                  Technology For Industrial Wastewater Treatment Techniques
                  Owing To Its Environmentally Friendly Method, Low Cost, And
                  Lack Of Secondary Pollution. The Efficiency Of Photocatalysis
                  System Depends On The Operational Parameters That Govern The
                  Adsorption And Photodegradation Of Dye Molecules. Our Study Is
                  Focused In The Field Of Photocatalysis Of Various Water
                  Pollutants Such As The Toxic Organic Compounds (Cationic And
                  Anionic Dyes) Using Various Semiconductor Nanoparticles Under
                  Visible, Solar And UV Irradiation.
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
            {/* 1. Development Of Metal Oxides Based Photocatalysts */}
            <div
              className="cursor-pointer rounded-lg overflow-x-hidden  overflow-y-scroll max-h-[270px] group shadow-lg bg-white dark:bg-slate-700  
                 [&::-webkit-scrollbar]:w-[5px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-yellow-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
            >
              <Image
                src={Photocatalysts}
                alt="Development Of Metal Oxides Based Photocatalysts Graphics"
                height={300}
                width={300}
                quality={80}
                loading="lazy"
                className="w-full object-cover rounded-md"
              />
              <div className="py-6">
                <span className="text-sm block text-blue-600 font-bold mb-2 text-center border-b border-gray-300 dark:border-gray-600 pb-2">
                  Development Of Metal Oxides Based Photocatalysts
                </span>
                <span className="text-sm block text-gray-600 dark:text-gray-300 font-normal mb-2 text-center">
                  Synthesis Of Several Metal Oxides Nanocatalysts Using Iron
                  Oxide, Silica, Alumina, Halloysite, Copper Oxide, Zinc Oxide,
                  Titania,Etc. As The Support Matrix. These Engineered Oxide
                  Based Nanocatalytic Systems Significantly Contribute To
                  Shaping The Sustainable Future Of Modern Society Given That
                  They Provide A Myriad Of Opportunities Such As Low Energy
                  Consumption, Economic Viability, Little Environmental Impact,
                  Enhanced Activity And Selectivity Together With Facile
                  Recovery.
                </span>
              </div>
            </div>

            {/* 2. Use Of Scanning Electrochemical Microscopy(SECM) For Synthesizing Semiconductors */}
            <div
              className="cursor-pointer rounded-lg overflow-x-hidden 
              overflow-y-scroll max-h-[270px] group shadow-lg bg-white dark:bg-slate-700
               [&::-webkit-scrollbar]:w-[5px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-yellow-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
            >
              <Image
                src={SynthesizingSemiconductors}
                alt="Use Of Scanning Electrochemical Microscopy(SECM) For Synthesizing Semiconductors Graphics"
                height={300}
                width={300}
                quality={80}
                loading="lazy"
                className="w-full object-cover rounded-md"
              />
              <div className="py-6">
                <span className="text-sm block text-blue-600 font-bold mb-2 text-center border-b border-gray-300 dark:border-gray-600 pb-2">
                  Use Of Scanning Electrochemical Microscopy(SECM) For
                  Synthesizing Semiconductors
                </span>
                <span className="text-sm block text-gray-600 dark:text-gray-300 font-normal mb-2 text-center">
                  Rapid Screening Of Microelectrode Arrays Of These
                  Photocatalysts Using Scanning Electrochemical Microscopy For
                  Finding Suitable Dopants For Better Photoelectrochemical (PEC)
                  Performance Of The Semiconductor.
                </span>
              </div>
            </div>

            {/* 3. Study Of Corrosion Behavior Of Al Alloys & Metal Matrix Composites Under Different Environmental Conditions */}
            <div
              className="cursor-pointer rounded-lg overflow-x-hidden overflow-y-scroll max-h-[270px] group shadow-lg bg-white dark:bg-slate-700
                 [&::-webkit-scrollbar]:w-[5px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-yellow-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
            >
              <Image
                src={CorrosionBehavior}
                alt="Study Of Corrosion Behavior Of Al Alloys & Metal Matrix Composites Under Different Environmental Conditions Graphics"
                height={300}
                width={300}
                quality={80}
                loading="lazy"
                className="w-full object-cover rounded-md"
              />
              <div className="py-6">
                <span className="text-sm block text-blue-600 font-bold mb-2 text-center border-b border-gray-300 dark:border-gray-600 pb-2">
                  Study Of Corrosion Behavior Of Al Alloys & Metal Matrix
                  Composites Under Different Environmental Conditions
                </span>
                <span className="text-sm block text-gray-600 dark:text-gray-300 font-normal mb-2 text-center">
                  Metal Matrix Composite (MMC) Is A Material Which Consists Of
                  Metal Alloys Reinforced With Continuous, Discontinuous Fibers,
                  Whiskers Or Particulates, The End Properties Of Which Are
                  Intermediate Between The Alloy And Reinforcement. These
                  Materials Have Remained The Focus Of Attention Of Aerospace,
                  Automobile And Mineral Processing Industry Because Of The
                  Several Advantages They Offer Which Include High Strength To
                  Weight Ratio, Elevated Temperature Toughness, Low Density,
                  High Stiffness And High Strength Compared To Its Monolithic
                  Counterpart (The Original Alloy).
                </span>
              </div>
            </div>

            {/* 4. Study Of Photoelectrochemical (PEC) Performance Of Semiconductors */}
            <div
              className="cursor-pointer rounded-lg overflow-x-hidden overflow-y-scroll max-h-[270px] group shadow-lg bg-white dark:bg-slate-700   
            [&::-webkit-scrollbar]:w-[5px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-yellow-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500
  "
            >
              <Image
                src={Photoelectrochemical}
                alt="Study Of Photoelectrochemical (PEC) Performance Of Semiconductors Graphics"
                height={300}
                width={300}
                quality={80}
                loading="lazy"
                className="w-full object-cover rounded-md"
              />
              <div className="py-6">
                <span className="text-sm block text-blue-600 font-bold mb-2 text-center border-b border-gray-300 dark:border-gray-600 pb-2">
                  Study Of Photoelectrochemical (PEC) Performance Of
                  Semiconductors
                </span>
                <span className="text-sm block text-gray-600 dark:text-gray-300 font-normal mb-2 text-center">
                  PEC Water Splitting Using Sunlight Represents An Eco-Friendly
                  And Promising Technology Which Has Generated Excessive
                  Consideration For The Production Of Renewable Hydrogen.
                  Semiconductor Electrode Materials As The Major Components In
                  PEC Water Splitting Cells Have Significant Impacts On The
                  Device’s Solar-To-Hydrogen Conversion Efficiency.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResearchAreas;
