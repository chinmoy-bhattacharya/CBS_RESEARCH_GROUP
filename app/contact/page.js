import Image from "next/image";
import React from "react";
import Contact_Image from "@/public/images/background/Contact_Grid.webp";
import CommonHeading from "@/utils/common-headings/CommonHeading.js";
import ContactForm from "@/components/single-use/contact-form/ContactForm.js";

export const metadata = {
  title: "Contact | CBS Research Group",
  description:
    "Get in touch with the CBS Research Group for inquiries related to publications, research collaboration, and more.",
  keywords:
    "contact, CBS Research Group, IIEST Shibpur, inquiries, publications, research collaboration",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "Contact | CBS Research Group",
    description:
      "Reach out to the CBS Research Group for any questions regarding publications and research activities.",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com/contact",
    image: "/favicon_io/favicon.ico?v=4",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com/contact",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};
export const viewport = "width=device-width, initial-scale=1.0";
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
          <Image src={Contact_Image} alt="Hero" width={500} height={500} />
        </div>
      </section>
    </main>
  );
};

export default Contact;
