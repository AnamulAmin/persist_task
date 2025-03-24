import React from "react";
import LoomVideo from "./LoomViedeo";
import "./Startupathon.css";
import VideoComponent from "../VideoComponent/VideoComponent";
export default function StartupAthon() {
  const btns = [
    {
      name: "Ongoing Startupathon",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840568c26049e42dd070_sound-on.png",
    },
    {
      name: "Startupathon Guide",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584067844b40361f47c65_user-guide.png",
    },
    {
      name: "Past Startupathons",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6775840659c6695bc2177369_checked.png",
    },
    {
      name: "Mentor Network",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/677584060ab4f3d12b8ebd4c_help.png",
    },
  ];

  const success_cards = [
    {
      name: "Competitive Salary",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
    },
    {
      name: "≥ $10,000 USD in Company Funding",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
    },
    {
      name: "≥ 10% Founder Equity",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png",
    },
    {
      name: "≥ $100,000 USD AWS Credits",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png",
    },
    {
      name: "$1,000 OpenAI Credits",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
    },
    {
      name: "$120,000 USD IBM Cloud Credits",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png",
    },
    {
      name: "$2,500 Twilio Credits",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png",
    },
    {
      name: "$2,000 Airtable Credits",
      href: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png",
    },
  ];
  return (
    <div className="-mt-20 pb-20 relative z-20 ">
      {/* <h1 className="magic-text text-center  heading-41 font-bold w-full max-w-[800px] mx-auto">
        Startupathon
      </h1>
      <p className="text-center font-semibold text-2xl mt-0 mb-7">
        Your Chance to Build, Lead, and Succeed as a Founder
      </p>
      <LoomVideo /> */}
      <VideoComponent
        title="Startupathon"
        subTitle="Your Chance to Build, Lead, and Succeed as a Founder"
        src="https://www.loom.com/embed/996f59a2e5c34fd38b86544833c23dde"
      />

      <div className="flex  items-center justify-center flex-wrap gap-4 mt-10 mb-20">
        {btns.map((btn) => (
          <a
            href="#ongoing-startupathon"
            className="main-button-n is-twitter w-inline-block"
            key={btn.name}
          >
            <div className="button-bg-2">
              <div className="button-inside-2">
                <div className="text-block-70">{btn.name}</div>
                <img
                  loading="lazy"
                  src={btn.href}
                  alt=""
                  className="image-38"
                />
              </div>
            </div>
            <div className="border-gradient"></div>
          </a>
        ))}
      </div>

      <section className="mt-10 container mx-auto">
        <h1 className="the-sticky-div-title-2 startupathon-head perk-section-head">
          Startupathon Success Comes with Extraordinary Rewards
        </h1>

        <div className="perks-cards-wrap row-1 gap-8">
          {success_cards.map((card) => (
            <div className="a-block">
              <div className="gradient">
                <div className="peark-logo-wrap">
                  <img src={card.href} loading="lazy" alt="" />
                </div>
                <div className="perk-head">{card.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
