import WhyChooseUsData from "../data/why_choose_us.json";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="px-20 mt-40">
      <h1 className="text-4xl text-center font-semibold font-archivo text-slate-900 p-4 mb-10">{`Why Choose Us`}</h1>
      <div className="grid grid-cols-6  gap-8 w-full items-center">
        <div className="col-span-4 grid grid-cols-3 gap-8 ">
          {WhyChooseUsData.whyChooseUs.map((item, index) => {
            return (
              <InfoCard
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        <div className="col-span-2 flex justify-self-end">
          <Image
            className=" -z-20 "
            src="/images/whychooseus.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, description }: any) => {
  return (
    <div className="relative p-4 hover:bg-seafoam transition-colors font-archivo rounded-3xl ">
      <span className=" absolute inline-flex -z-10 mt-2 h-4 w-20 rounded-full bg-seafoam opacity-75"></span>
      <div className="space-y-4 ">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-black  font-inter ">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;