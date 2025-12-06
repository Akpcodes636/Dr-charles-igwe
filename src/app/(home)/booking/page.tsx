"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Button from "@/app/components/ui/Button";
import CheckButton from "@/app/components/ui/checkbox";
import InputField from "@/app/components/ui/InputField";
import { useRouter } from "next/navigation"; // import the route
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const Booking = () => {
  const router = useRouter(); // initialize router
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    proposedDate: "",
    eventTheme: "",
    message: "",
    otherOption: "",
    bookingOptions: [] as string[],
  });

  // Input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormValues((prev) => {
        const options = prev.bookingOptions.includes(value)
          ? prev.bookingOptions.filter((v) => v !== value)
          : [...prev.bookingOptions, value];
        return { ...prev, bookingOptions: options };
      });
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formValues.fullName) {
      toast.warning("Please provide your name.");
      return;
    }
    if (!formValues.email) {
      toast.warning("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      toast.warning("Please enter a valid email address.");
      return;
    }
    if (formValues.bookingOptions.length === 0) {
      toast.warning("Please select at least one booking option.");
      return;
    }
    if (!formValues.message) {
      toast.warning("Please include a message.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "9e76435a-6ff4-4026-9335-fafc81148a96");
      formData.append("fullName", formValues.fullName);
      // formData.append("lastName", formValues.lastName);
      formData.append("email", formValues.email);
      formData.append("phone", formValues.phone);
      formData.append("organization", formValues.organization);
      formValues.bookingOptions.forEach((opt) =>
        formData.append("booking_options", opt)
      );
      if (formValues.otherOption) {
        formData.append("other_option", formValues.otherOption);
      }
      formData.append("proposedDate", formValues.proposedDate);
      formData.append("eventTheme", formValues.eventTheme);
      formData.append("message", formValues.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your booking request has been sent successfully!");
        setFormValues({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          proposedDate: "",
          eventTheme: "",
          message: "",
          otherOption: "",
          bookingOptions: [],
        });

        // Redirect to your Google Calendar link
        router.push("https://calendar.app.google/hRezLqXgUea8joJFA");
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* Header */}
      <div className="hidden lg:block">
        <Header />
      </div>

      {/* Hero Background */}
      <div className="relative h-[224px] sm:h-[320px] md:h-[330px] lg:h-0 bg-[url('/images/igwe-15.png')] bg-no-repeat bg-cover bg-[position:center_20%]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
        <div className="relative block lg:hidden">
          <Header />
        </div>
      </div>

      {/* Form Section */}
      <div className="pt-[40px] md:pt-[55px] bg-white pb-[120px]">
        <div className="container-sm mx-auto">
          <h3 className="text-[20px] md:text-[24px] lg:text-[38px] font-semibold text-center mb-[2px]">
            Book Charles Igwe
          </h3>
          <p className="text-[18px] md:text-[24px] mb-[24px] text-center font-medium">
            Thank you for your interest in working with Charles!
          </p>
          <p className="w-full max-w-[995px] mx-auto text-[16px] md:text-[18px] text-[#00000080] text-center mb-[64px]">
            Please fill out the form below to tell us about your needs. Once
            submitted, you&apos;ll be directed to book a meeting with Charles.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[31px]">
            <div className="max-w-[604px] lg:h-[912px] hidden lg:block">
              <Image
                src="/images/igwe-15.png"
                width={500}
                height={500}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gp-y-[32px]">
              {/* Name and Email */}
              <div className="flex flex-col md:flex-col lg:flex-row gap-x-[32px] gap-y-[32px] mb-[32px]">
                <InputField
                  name="fullName"
                  label="Full Name"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                />
                <InputField
                  name="email"
                  label="Email Address"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Phone and Company */}
              <div className="flex flex-col lg:flex-row gap-x-[32px] gap-y-[32px]">
                <InputField
                  name="phone"
                  label="Phone Number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
                <InputField
                  name="organization"
                  label="Organization / Company Name"
                  value={formValues.organization}
                  onChange={handleInputChange}
                />
              </div>

              {/* Booking Options */}
              <p className="text-[16px] text-[#000000B2] mb-[8px]">
                What type of Service are you Interested In?
              </p>
              <div className="mb-[32px] flex flex-col gap-y-2">
                <CheckButton
                  name="bookingOptions"
                  title="Public Speaking & Keynote Engagements"
                  value="Public Speaking"
                  checked={formValues.bookingOptions.includes(
                    "Public Speaking"
                  )}
                  onChange={handleInputChange}
                />
                <CheckButton
                  name="bookingOptions"
                  title="Business Consultation"
                  value="Business Consultation"
                  checked={formValues.bookingOptions.includes(
                    "Business Consultation"
                  )}
                  onChange={handleInputChange}
                />
                <CheckButton
                  name="bookingOptions"
                  title="Leadership Development & Training Programs"
                  value="Leadership Development"
                  checked={formValues.bookingOptions.includes(
                    "Leadership Development"
                  )}
                  onChange={handleInputChange}
                />
                <CheckButton
                  name="bookingOptions"
                  title="Project & Program Management Advisory"
                  value="Project Management"
                  checked={formValues.bookingOptions.includes(
                    "Project Management"
                  )}
                  onChange={handleInputChange}
                />
                <CheckButton
                  name="bookingOptions"
                  title="Mentorship & Coaching"
                  value="Mentorship & Coaching"
                  checked={formValues.bookingOptions.includes(
                    "Mentorship & Coaching"
                  )}
                  onChange={handleInputChange}
                />
                <div className="flex items-center gap-x-2">
                  <CheckButton
                    name="bookingOptions"
                    title="Other (Please Specify)"
                    value="Other"
                    checked={formValues.bookingOptions.includes("Other")}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="otherOption"
                    value={formValues.otherOption}
                    onChange={handleInputChange}
                    className="w-[290px] h-[35px] rounded-[5px] border border-[#00000033]"
                  />
                </div>
              </div>

              {/* Proposed Date & Event Theme */}
              <div className="flex flex-col xl:flex-row items-center gap-x-[31px] gap-y-4">
                <InputField
                  name="proposedDate"
                  label="Proposed Date"
                  type="date"
                  value={formValues.proposedDate}
                  onChange={handleInputChange}
                />
                <InputField
                  name="eventTheme"
                  label="Event Theme (optional)"
                  type="text"
                  value={formValues.eventTheme}
                  onChange={handleInputChange}
                />
              </div>

              {/* Message */}
              <div className="mb-[40px]">
                <p className="text-[#00000099] text-[14px] mb-[4px]">
                  Share any other thing you would like Charles to know
                </p>
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  className="border border-[#00000033] w-full h-[160px] resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                style="danger"
                type="submit"
                css="w-[217px] h-[56px]"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer bgColor="bg-[#000000]" />
    </section>
  );
};

export default Booking;
