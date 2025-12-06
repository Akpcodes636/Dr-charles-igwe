"use client";
import Image from "next/image";
import Button from "../ui/Button";
import Footer from "../Footer";
import Link from "next/link";
import AboutCard from "./AboutCard";
import { serviceContent } from "@/utils/contents/HomePage.content";

const AboutHero = () => {
  return (
    <section className="bg-white">
      <div className="py-[45px] md:py-[50px] lg:py-[120px] container-sm mx-auto flex items-center justify-center flex-col md:flex-col lg:flex-col xl:flex-row gap-[24px] md:gap-[30px]">
        <div className="b-[24px]">
          {/* <div className="max-w-full sm:max-w-[400px] md:max-w-[300px] lg:max-w-[605px] mx-auto h-[240px] md:h-[400px] lg:h-[456px]">
            <Image
              src="/images/Img.png"
              width={500}
              height={500}
              alt="pictures of Charles Igwe"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div> */}
          <p className="w-full mx-auto max-w-[358px] md:max-w-[500px] lg:max-w-[605px] text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[24px] md:leading-[26px] lg:leading-[32px] text-[#000000] font-semibold mb-0 md:mb-[32px]">
            I&apos;m Dr. Charles Igwe, educator, leadership coach, and
            Program Manager leading over 40 innovation projects in Canada&apos;s
            nuclear sector.
          </p>

          <div className="bg-red-500 h-[328px] w-full max-w-[605px] rounded-[12px] hidden md:block lg:block">
            <Image
              src="/images/Maskg4.png"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-[10px]"
              alt="An Image of Mr Charles Igwe and friends"
            />
          </div>
        </div>
        <div className="w-full mx-auto max-w-[358px] md:max-w-[500px] lg:max-w-[605px]">
          <p className=" text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-normal text-[#000000] leading-[24px] md:leading-[28px] lg:leading-[34px] mb-[24px] md:mb-[16px] lg:mb-[16px]">
            My work has always been about one thing: helping people step into
            their next chapter, with clarity, courage, and conviction.{" "}
          </p>
          <p className="text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] text-[#000000] leading-[24px] md:leading-[34px] lg:leading-[34px] font-normal ">
            I host the Fireside Chat series, where I sit down with global
            leaders to explore the forces that truly drive innovation,
            leadership, and growth. With more than a decade of experience
            delivering complex programs and developing talent in highly
            regulated industries, I&apos;ve learned that the true engine of
            transformation isn&apos;t process, it&apos;s people. Their stories.
            Their grit. Their potential.
          </p>
          <div>
            <div className="mt-[20px] md:mt-[10px] lg:mt-[20px] flex items-center justify-center md:items-start md:justify-start lg:items-start lg:justify-start">
              <Link href="/booking">
                <Button style="danger" type="button" css="w-[217px] h-[56px]">
                Book a discovery call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="bg-[#0A1F44] py-[52px] md:py-[64px] container-sm mx-auto grid grid-cols-1 md:grid-cols-2 gap-[32px] ">
        {/* TEXT SECTION */}
        <div className="order-2 md:order-1 flex gap-[24px] md:gap-[24px] lg:gap-[32px] flex-col">
          <p className="text-[#FFFFFF] text-[16px] md:text-[17px] lg:text-[20px] xl:text-[20px] leading-[24px] md:leading-[24px] lg:leading-[32px]">
            That&apos;s why I mentor immigrant professionals into certification
            and leadership. Why I teach 200+ postgraduate students every year.
            And why I speak, coach, and write, to help individuals and teams
            unlock hidden strengths and turn strategy into lasting change.
          </p>
          <p className="text-[#FFFFFF] text-[16px] md:text-[17px] lg:text-[20px] xl:text-[20px] leading-[24px] md:leading-[24px] lg:leading-[32px]">
            This site isn&apos;t just about me , it&apos;s about you. It&apos;s
            a space to find clarity, challenge assumptions, and connect with a
            community that believes in building bold skills and shaping futures
            that matter.
          </p>
          <p className="text-[#FB8C00] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] font-normal">
            If you&apos;re ready to grow, lead, or rebuild with purpose ,
            welcome. You&apos;re in the right place.
          </p>
          <div>
            <Link href="/booking">
              <Button style="danger" type="button" css="w-[217px] h-[56px]">
                Invite me to speak
              </Button>
            </Link>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="order-1 md:order-2 w-full max-w-[358px] md:max-w-[450px] lg:max-w-[605px] mx-auto h-[240px] md:h-[536px] lg:h-[536px] rounded-[10px] bg-red-800">
          <Image
            src="/images/photo-2.png"
            width={500}
            height={500}
            alt="An image of Charles Igwe"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3rd section */}
      <div className="py-[96px] md:py-[120px] container-sm mx-auto grid-cols-1 md:grid-cols-2 gap-[32px] grid">
        <div>
          <Image
            src="/images/Group-2.png"
            width={500}
            height={500}
            alt="an Image of Charles Igwe"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[34px] text-[#000000] mb-[24px]">
            Some of his certifications include globally recognized credentials
            that reflect his expertise in project management, leadership, and
            continuous improvement.
          </p>
          <ul className="flex flex-col gap-6 text-[16px] leading-[24px] text-[#6A0DAD] lg:text-[20px] lg:leading-[100%] list-disc mb-[40px]">
            <li>Project Management Professional (PMP).</li>
            <li>
              Project Management Institute-Risk Management Professional
              (PMI-RMP).
            </li>
            <li>
              Project Management Institute Agile Certified Practitioner
              (PMI-ACP).
            </li>
            <li>Projects IN Controlled Environments (PRINCE2).</li>
            <li>Managing Successful Programmes (MSP).</li>
            <li>Certified Identity and Access Manager (IAM Cert).</li>
            <li>Lean Six Sigma Black Belt.</li>
            <li>LEED Green Associate (LEED GA).</li>
          </ul>
          
          <Link href="/booking">
          <Button style="danger" type="button" css="w-[217px] h-[56px]">
            Request a proposal
          </Button>
          </Link>
        </div>
      </div>

      {/* My resources */}
      <div className="bg-[#0A1F44] py-[67px] container-sm mx-auto">
        <h2 className="hidden md:hidden lg:block text-[28px] text-[#FFFFFF] text-center">
          My Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className="py-0  md:py-[50px] lg:py-[80px]">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[34px] text-[#FFFFFF] font-normal mb-[16px]">
              I&apos;ve made some of my resources and project files available
              for download — feel free to explore, learn, and get inspired!
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[34px] text-[#FFFFFF] font-normal mb-[16px]">
              These materials showcase my creative process and the practical
              tools I use, offering insights into how I approach design and
              problem-solving.
            </p>
          
          {/* Where does Download Resources link to? */}
            <Button style="danger" type="button" css="w-[217px] h-[56px]">
              Download Resources
            </Button>
          </div>
          <div>
            <Image
              src="/images/group-3.png"
              width={500}
              height={500}
              alt="An image showing resources by Charles Igwe"
              className="w-full h-full object-cover mt-[32px] rounded-[10px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-[96px] pb-[120px] container-sm mx-auto">
        <h2 className="font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[100%] text-[#000000] text-center mb-[24px]">
          My Services
        </h2>
        <div className="w-full">
          {/* TOP ROW — FIRST THREE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-[56px] lg:gap-[32px] mb-[96px]">
            {serviceContent.map((item, index) => (
              <AboutCard
                key={index}
                img={item.img}
                title={item.title}
                text={item.text}
                link={item.link}
                linkText={item.linkText}
              />
            ))}
          </div>

          <div className="flex items-center justify-center ">
            <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-center w-full gap-x-[30px] gap-y-[56px]">
              {/* Ist card */}
              <div className=" w-full max-w-full xl:max-w-[393px] h-full">
                {/* Image Section */}
                <div className="max-w-full md:max-w-full lg:max-w-full xl:max-w-[393px] h-[200px] md:h-[285px] mx-auto w-full rounded-[10px] mb-[24px] overflow-hidden">
                  <Image
                    src="/images/group-45.png"
                    alt="An image of Charles igwe"
                    className="w-full h-full object-cover object-[50%_20%]"
                    width={500}
                    height={500}
                  />
                </div>

                {/* Text Section */}
                <div>
                  <h3 className="text-[20px] text-[#000000] font-medium leading-[100%] mb-[8px] text-start sm:text-center  md:text-center lg:text-center">
                    Consulting & Strategic Projects
                  </h3>

                  <p className="text-[16px] md:text-[18px] leading-[24px] font-normal text-[#000000B2] mb-[12px] text-start sm:text-center md:text-center lg:text-center">
                    I help organizations transform through strategic leadership
                    and execution.
                  </p>

                  <Link
                    href="/project"
                    className="text-[#E28101] text-[16px] font-normal leading-[100%] text-start sm:text-center md:text-center lg:text-center block"
                  >
                    Request a proposal
                  </Link>
                </div>
              </div>

              {/* 2nd card */}
              <div className="w-full max-w-full xl:max-w-[393px] h-full">
                {/* Image Section */}
                <div className="max-w-full md:max-w-full lg:max-w-full xl:max-w-[393px] h-[200px] md:h-[285px] mx-auto w-full rounded-[10px] mb-[24px] overflow-hidden">
                  <Image
                    src="/images/image-16q.png"
                    alt="An image of Charles igwe"
                    className="w-full h-full object-cover object-[50%_20%]"
                    width={500}
                    height={500}
                  />
                </div>

                {/* Text Section */}
                <div>
                  <h3 className="text-[20px] text-[#000000] font-medium leading-[100%] mb-[8px] text-start sm:text-center  md:text-center lg:text-center">
                    Want the backstory?
                  </h3>

                  <p className="text-[16px] md:text-[18px] leading-[24px] font-normal text-[#000000B2] mb-[12px] text-start sm:text-center md:text-center lg:text-center">
                    From tally clerk to PhD — a story of resilience, purpose,
                    and transformation.
                  </p>

                  <Link
                    href="/"
                    className="text-[#E28101] text-[16px] font-normal leading-[100%] text-start sm:text-center md:text-center lg:text-center block"
                  >
                    Download my CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer bgColor="bg-[#000000]" />
    </section>
  );
};

export default AboutHero;
