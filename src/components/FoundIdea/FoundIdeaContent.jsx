import React, { useEffect, useRef } from "react";

export default function FoundIdeaContent() {
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.style.opacity = 1;
            // target.style.transform = "translateY(0)";
            target.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          } else {
            target.style.opacity = 0.25;
            // target.style.transform = "translateY(20px)";
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "-40% 0% -40% 0%", // Triggers when element is centered
        threshold: 0.2, // 50% of the element must be visible
      }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const step_content = [
    {
      id: "71f1e103-bcd8-f4ab-4e8a-1bd996ec975c",
      src: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/67194d6803b1bb4c2483b4fb_icons8-start-100.png",
      name: "Dive into the Challenge Details Video",
      heading: "It all starts here!",
      describtion:
        " Receive an exciting task—your startup idea—with a detailed video to spark creativity and clarify our vision.",
      pro_tips:
        "💡<span class='text-span-11'>Pro Tip</span>: Pay attention—it’s more than just instructions. It’s your roadmap to success!",
    },

    {
      id: "71f1e103-bcd8-f4ab-4e8a-1bd996ec975f",
      src: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719b898b850d820a0151895_icons8-submit-idea-100.png",
      name: "Build, Submit & Shine",
      describtion:
        "Create a prototype that showcases your approach, then submit your work with a Loom video presentation (no GitHub repo or complex code required). Your creative solution is what matters most. ",
      pro_tips:
        "💡<strong>Stay ahead:</strong> Submit on time or early to show your dedication!",
    },
    {
      id: "71f1e103-bcd8-f4ab-4e8a-1bd996ec9761",
      src: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719be4a8ec2af8db1816720_icons8-feedback-100.png",
      name: "Get Feedback, Level Up!",
      describtion:
        "Three days after submission, we review your work. If it stands out, you're in! If not, we'll share feedback on how to improve. The cycle continues until we find the perfect fit. ",
      pro_tips:
        "💡<span class='text-span-11'>Pro Tip</span>: This feedback is <strong>gold</strong>. Use it to sharpen your submission or learn what it takes to win!",
    },
    {
      id: "71f1e103-bcd8-f4ab-4e8a-1bd996ec9776",
      src: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6719c1ccefbcd50505f5d302_icons8-checked-96.png",
      name: "Claim Your Crown",
      heading: "Ace the challenge to become the project leader.",
      describtion:
        "Ace the challenge to become the project leader. Lead the Project. Ace the challenge, and take charge as BOSS. Enjoy ownership, 20% equity, and a competitive salary. Turn vision into impact with top-tier talent! ",
      pro_tips:
        "💡<span class='text-span-11'>Pro Tip</span>: This feedback is <strong>gold</strong>. Use it to sharpen your submission or learn what it takes to win!",
    },
  ];

  return (
    <div className="timeline_component-2 mb-[100px]">
      <div className="timeline_progress-3">
        <div className="timeline_progress-bar-3"></div>
      </div>

      {step_content.map((step, index) => (
        <div
          ref={(el) => (stepRefs.current[index] = el)}
          data-w-id={step.id}
          key={step.id}
          className="timeline_item step-1"
          style={{
            opacity: 0.25,
            transform: "translateY(20px)",
          }}
        >
          <div className="timeline_left">
            <div className="timeline_date-text-2">{step.name}</div>
          </div>
          <div className="timeline_centre">
            <div
              className="timeline_circle step-1"
              style={{
                backgroundColor: "rgb(65, 65, 65)",
                backgroundImage: `url(${step.src})`,
              }}
            ></div>
          </div>
          <div className="timeline_right">
            <div className="timeline_text-2">{step.heading ?? ""}</div>
            <div className="margin-bottom-xlarge">
              <div className="text-block-67">{step.describtion}</div>
              <div
                className="text-block-67 step-tip"
                dangerouslySetInnerHTML={{ __html: step.pro_tips }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
