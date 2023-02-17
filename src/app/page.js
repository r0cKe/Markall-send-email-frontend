import { Inter } from "@next/font/google";
import { Main } from "./components/Main";
import Section from "./components/Section";
import AutomationSection from "./components/AutomationSection";
import TestimonialDescription from "./components/TestimonialDescription";
import ContactSection from "./components/ContactSection";
import InputState from "./components/context/InputState";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <InputState>
      <Main />
      <Section
        heading="our features"
        title="Know your audience and boost sales"
        description={
          <p style={{ width: "82%", fontWeight: "500", fontSize: "25px" }}>
            Effective emails convey the most significant substance to a client
            at the proper time which is our marketing approaches include
            scheduled emails.
          </p>
        }
      />
      <AutomationSection
        title="Save precious time with automation"
        description="Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa leo purus cras commodo. Volutpat massa fusce sit libero ut mollis risus."
        imgSrc="/assets/images/automation.jpeg"
      />
      <Section
        heading="our happy coustomers"
        title="What our coustomers say about us"
        bgColor="#FFFBEE"
        description={<TestimonialDescription />}
      />
      <ContactSection />
    </InputState>
  );
}
