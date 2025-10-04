"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";

const Page = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <Header />
      <div className="container-sm mx-auto">
        <div className="py-[32px] md:py-[90px]">
          <div className="w-full max-w-[358px] md:max-w-full mx-auto h-[160px] md:h-[240px] rounded-[10px] mb-[24px] md:mb-[30px] lg:mb-[44px]">
            <Image
              src="/images/Blog-12.png"
              width={500}
              height={500}
              alt="picture of scramble"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>

          <div className="flex items-center justify-center gap-[20px] md:gap-[40px] ">
            <div className="flex items-center gap-2">
              <div className="w-[32px] h-[32px]">
                <Image
                  src="/images/avatar.png"
                  width={500}
                  height={500}
                  alt="images of avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[14px] text-[#00000066] md:text-[16px]">
                  Dr. Charles Igwe
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-[6px]">
              <IoCalendarClearOutline color="#00000066" />
              <p className="text-[14px] text-[#00000066] md:text-[16px]">
                10 Sept 2025
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] md:text-[26px] text-[#000000] leading-[100%] text-center mt-[24px] md:mt-[32px] mb-[24px]">
              The Power of Accountability in Leadership
            </h3>

            <p className="mb-[36px] md:mb-[40px] text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] font-normal tracking-[0.5%]">
              Lorem ipsum dolor sit amet consectetur. Semper vestibulum metus
              consectetur velit sapien. Mattis odio et sed ornare ut ornare mi.
              Neque pellentesque et orci tincidunt consequat natoque vitae nec.
              A faucibus gravida quis tempor ornare lectus amet. Ut diam dictum
              erat purus porttitor enim a. Volutpat mauris tincidunt massa
              habitasse odio vitae odio tempor malesuada. Ipsum risus non neque
              et velit integer diam. Faucibus porttitor egestas ridiculus
              suscipit consectetur accumsan ut. Venenatis a pharetra sodales
              odio placerat non amet. Facilisis sodales amet amet etiam quam
              amet in risus. Facilisis sit sed faucibus vitae volutpat sed
              eleifend vitae commodo. Feugiat semper sit turpis volutpat rhoncus
              eu vitae. Velit nibh pulvinar magna lacus viverra nisi.
            </p>
            <p className="mb-[36px] md:mb-[40px] text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] font-normal tracking-[0.5%]">
              Lorem ipsum dolor sit amet consectetur. Semper vestibulum metus
              consectetur velit sapien. Mattis odio et sed ornare ut ornare mi.
              Neque pellentesque et orci tincidunt consequat natoque vitae nec.
              A faucibus gravida quis tempor ornare lectus amet. Ut diam dictum
              erat purus porttitor enim a. Volutpat mauris tincidunt massa
              habitasse odio vitae odio tempor malesuada. Ipsum risus non neque
              et velit integer diam. Faucibus porttitor egestas ridiculus
              suscipit consectetur accumsan ut. Venenatis a pharetra sodales
              odio placerat non amet. Facilisis sodales amet amet etiam quam
              amet in risus. Facilisis sit sed faucibus vitae volutpat sed
              eleifend vitae commodo. Feugiat semper sit turpis volutpat rhoncus
              eu vitae. Velit nibh pulvinar magna lacus viverra nisi.
            </p>
            <p className="mb-[36px] md:mb-[40px] text-[16px] md:text-[18px] leading-[24px] md:leading-[30px] font-normal tracking-[0.5%]">
              Lorem ipsum dolor sit amet consectetur. Semper vestibulum metus
              consectetur velit sapien. Mattis odio et sed ornare ut ornare mi.
              Neque pellentesque et orci tincidunt consequat natoque vitae nec.
              A faucibus gravida quis tempor ornare lectus amet. Ut diam dictum
              erat purus porttitor enim a. Volutpat mauris tincidunt massa
              habitasse odio vitae odio tempor malesuada. Ipsum risus non neque
              et velit integer diam. Faucibus porttitor egestas ridiculus
              suscipit consectetur accumsan ut. Venenatis a pharetra sodales
              odio placerat non amet. Facilisis sodales amet amet etiam quam
              amet in risus. Facilisis sit sed faucibus vitae volutpat sed
              eleifend vitae commodo. Feugiat semper sit turpis volutpat rhoncus
              eu vitae. Velit nibh pulvinar magna lacus viverra nisi.
            </p>
          </div>
          {/* Related Blog */}

          <div className="mt-[56px] md:mt-[90px] lg:mt-[120px]">
            <h2 className="text-center text-[20px] md:text-[26px] text-[#000000] font-medium mb-[24px] md:mb-[32px]">
              Related Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Card 1 */}
              <div className="flex flex-col">
                {/* Blog image */}
                <div className="w-full h-[160px] md:h-[250px] lg:h-[216px] rounded-[10px] overflow-hidden">
                  <Image
                    src="/images/Blog-6.png"
                    width={600}
                    height={400}
                    alt="Why Continuous Improvement Matters in Today’s Workplace"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog details */}
                <div className="mt-[16px]">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#000] mb-[8px]">
                    Why Continuous Improvement Matters in Today’s Workplace
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#000000B2] mb-[12px] line-clamp-2">
                    From Lean to Agile, continuous improvement keeps
                    organizations...
                  </p>

                  <div className="flex items-center gap-4 mb-[12px]">
                    <div className="flex items-center gap-2">
                      <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                        <Image
                          src="/images/avatar.png"
                          width={32}
                          height={32}
                          alt="Dr. Charles Igwe"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-[#00000066] text-[14px] md:text-[16px]">
                        Dr. Charles Igwe
                      </p>
                    </div>
                    <p className="text-[#00000066] text-[14px] font-normal md:text-[16px]">
                      10 Sept 2025
                    </p>
                  </div>

                  {/* Read more link */}
                  <Link
                    href="#"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <p className="text-[16px] text-[#E28101]">Read more</p>
                    <FaArrowRight color="#E28101" />
                  </Link>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="flex flex-col">
                <div className="w-full h-[160px] md:h-[250px] lg:h-[216px]  rounded-[10px] overflow-hidden">
                  <Image
                    src="/images/Blog-5.png"
                    width={600}
                    height={400}
                    alt="Top 5 Skills Every Emerging Leader Needs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-[16px]">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#000] mb-[8px]">
                    Top 5 Skills Every Emerging Leader Needs
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#000000B2] mb-[12px] line-clamp-2">
                    Communication, resilience, and strategic thinking are just
                    the beginning...
                  </p>
                  <div className="flex items-center gap-4 mb-[12px]">
                    <div className="flex items-center gap-2">
                      <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                        <Image
                          src="/images/avatar.png"
                          width={32}
                          height={32}
                          alt="Dr. Charles Igwe"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-[#00000066] text-[14px] md:text-[16px]">
                        Dr. Charles Igwe
                      </p>
                    </div>
                    <p className="text-[#00000066] text-[14px] font-normal md:text-[16px]">
                      10 Sept 2025
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <p className="text-[16px] text-[#E28101]">Read more</p>
                    <FaArrowRight color="#E28101" />
                  </Link>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="flex flex-col">
                <div className="w-full h-[160px] md:h-[250px] lg:h-[216px] rounded-[10px] overflow-hidden">
                  <Image
                    src="/images/blog-4.png"
                    width={600}
                    height={400}
                    alt="Mentorship vs. Coaching: What’s the Difference?"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-[16px]">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#000] mb-[8px]">
                    Mentorship vs. Coaching: What’s the Difference?
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#000000B2] mb-[12px] line-clamp-2">
                    Both empower growth, but they serve different purposes.
                    Learn how to choose the right path...
                  </p>
                  <div className="flex items-center gap-4 mb-[12px]">
                    <div className="flex items-center gap-2">
                      <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                        <Image
                          src="/images/avatar.png"
                          width={32}
                          height={32}
                          alt="Dr. Charles Igwe"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-[#00000066] text-[14px] md:text-[16px]">
                        Dr. Charles Igwe
                      </p>
                    </div>
                    <p className="text-[#00000066] text-[14px] font-normal md:text-[16px]">
                      10 Sept 2025
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <p className="text-[16px] text-[#E28101]">Read more</p>
                    <FaArrowRight color="#E28101" />
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

export default Page;
