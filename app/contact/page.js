import ContactForm from "@/components/single-use/contact-form/ContactForm";
import CommonHeading from "@/utils/common-headings/CommonHeading";
import Image from "next/image";
import React from "react";
import Contact_Image from "@/public/images/background/Contact_Grid.png";
const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-800 pt-12 pb-28">
      <div className="px-0 lg:px-28 xl:px-36">
        <CommonHeading
          Heading="Get in Touch with Our Lab"
          subHeading="Whether you have questions about our research or admission, need assistance with experiments, or want to collaborate, we’re here to help! Please fill out the form below, and our team will get back to you as soon as possible"
          customColorHeadig={null}
        />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center mx-auto place-content-center">
        <ContactForm />

        <div className="flex justify-center items-center order-first lg:order-none pb-12 lg:pb-0">
          <Image src={Contact_Image} alt="Hero" />
        </div>
      </section>
    </main>
  );
};

export default Contact;
