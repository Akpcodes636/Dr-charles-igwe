"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

const Booking = () => {
  return (
    <section>
      {/* Desktop Header */}
      <div>
        <div className="hidden lg:block">
          <Header />
        </div>

        {/* Hero Background with Gradient */}
        <div
          className="
        relative
        h-[224px] sm:h-[320px] md:h-[330px] lg:h-0
        bg-[url('/images/AKP.png')]
        md:bg-[url('/images/Akp.png')] lg:bg-none
        bg-no-repeat bg-cover bg-center
      "
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

          {/* Mobile/Tablet Header */}
          <div className="relative block lg:hidden">
            <Header />
          </div>
        </div>
      </div>

      <div className="pt-[40px] md:pt-[55px] bg-white  pb-[120px]">
        <div className="">
          <h3 className="text-[20px] md:text-[24px] text-[#000000] leading-[100%] text-center mb-[24px] block md:block lg:hidden">
            Book Charles Igwe
          </h3>
          <div className="container-sm mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[31px]">
              <div className="max-w-[604px] h-[912px] bg-green-600 hidden md:hidden lg:block">
                <Image
                  src="/images/Booking.png"
                  width={500}
                  height={500}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-[20px]">
                <h1 className="hidden md:hidden lg:block text-center text-[24px] font-semibold leading-[100%] mb-[24px]">
                  Book Charles Igwe
                </h1>
                <form className="w-full max-w-[600px] mx-auto space-y-6 flex  flex-col">
                  {/* First + Last Name */}
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    {/* First Name */}
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="firstName"
                        className="text-[#00000099] mb-2 text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full h-[48px] border border-[#00000099] rounded px-3 focus:outline-none"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="lastName"
                        className="text-[#00000099] mb-2 text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full h-[48px] border border-[#00000099] rounded px-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email + Phone Number */}
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    {/* Email */}
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="email"
                        className="text-[#00000099] mb-2 text-sm font-medium"
                      >
                        Email <span className="text-red-500">(Required)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full h-[48px] border border-[#00000099] rounded px-3 focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="phone"
                        className="text-[#00000099] mb-2 text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full h-[48px] border border-[#00000099] rounded px-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Company + Country */}
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    {/* Company */}
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="company"
                        className="text-[#00000099] mb-2 text-sm font-medium"
                      >
                        Company
                      </label>
                      <select
                        id="company"
                        className="w-full h-[48px] border border-[#00000099] rounded px-3 focus:outline-none"
                      >
                        <option value="">Select Company</option>
                        <option value="company1">Company 1</option>
                        <option value="company2">Company 2</option>
                      </select>
                    </div>

                    {/* Country */}
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="country"
                        className="text-[#00000099] mb-2 text-sm font-medium"
                      >
                        Country
                      </label>
                      <input
                        id="country"
                        type="text"
                        className="w-full h-[48px] border border-[#00000099] rounded px-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Booking Options */}
                  <div className="flex flex-col w-full">
                    <label className="text-[#00000099] mb-3 text-sm font-medium">
                      Would you like to book Charles Igwe for the following?
                    </label>
                    <div className="flex flex-col space-y-3">
                      {[
                        "Public Speaking",
                        "Mentorship & Coaching",
                        "Leadership Development & Training Programs",
                        "Project & Program Management Advisory",
                      ].map((option, i) => (
                        <label
                          key={i}
                          className="flex items-center space-x-3 text-[#00000099]"
                        >
                          <input
                            type="checkbox"
                            className="w-[21px] h-[21px] border border-[#00000099] rounded focus:ring-0"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col w-full mb-[40px]">
                    <label
                      htmlFor="message"
                      className="text-[#00000099] mb-2 text-sm font-medium"
                    >
                      Your Message{" "}
                      <span className="text-red-500">(Required)</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      className="w-full h-[224px] border border-[#00000099] rounded p-3 resize-none focus:outline-none"
                    />
                  </div>
                  <div className="flex items-start justify-start w-full">
                    <Button
                      style="danger"
                      type="button"
                      css="w-[217px] h-[56px]"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer bgColor="bg-[#000000]" />
    </section>
  );
};

export default Booking;
