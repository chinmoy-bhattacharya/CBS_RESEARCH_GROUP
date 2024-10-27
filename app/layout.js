import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/multiple-use/navigation-bar/PageHeader.js";
import Footer from "@/components/multiple-use/footer/Footer.js";
import { ThemeProvider } from "./NextThemesProvider.js";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "CBS Research Group",
  description:
    "CBS Research Group is an electrochemistry lab under (Indian Institute of Engineering Science and Technology) it is located in Shibpur P.O. - Botanic Garden, Howrah - 711 103 West Bengal, India Phone: +91 (033) 2668 4561 to 63 Fax: +91 (033) 2668 2916",
  keywords:
    "Dr. Chinmoy Bhattacharya, researcher, Photoelectrochemistry, Electrochemistry, Corrosion Electrochemistry Indian Institute of Engineering Science and Technology: Howrah, West Bengal, IN",
  author: "Dr. Chinmoy Bhattacharya",
  openGraph: {
    title: "CBS Research Group",
    description:
      "Botanic Garden, Dist: Howrah, West Bengal, India - 711103  +91 (033) 2668 4561 to 63  +91 (033) 2668 2916 (Fax)",
    type: "website",
    url: "https://www.chinmoybhattacharyaelectrochemistry.com",
    image: "/favicon_io/favicon.ico?v=4",
  },
  iiest: {
    card: "https://www.iiests.ac.in/IIEST/Faculty/chem-chinmoy",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Joined the Institute as Assistant Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology, Shibpur (formerly, BESUS) Howrah – 711 103, West Bengal on 23rd June 2006. Promoted to Associate Professor, Department of Chemistry, IIESTS on 22nd Feb. 2019.",
    image:
      "https://www.iiests.ac.in/assets/images/faculty/chem-faculty_chinmoy-bhattacharya.jpg",
  },
  googlescholar: {
    card: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology",
    image:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=7Be7e7IAAAAJ&citpid=2",
  },
  researchgate: {
    card: "https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Indian Institute of Engineering Science and Technology, Shibpur, Howrah, India · Chemistry",
  },
  orcid: {
    card: "https://orcid.org/0000-0003-2370-7108",
    title: "Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Photoelectrochemistry, Electrochemistry, Corrosion Electrochemistry",
    image: "https://orcid.org/0000-0003-2370-7108",
  },
  scopus: {
    card: "https://www.scopus.com/authid/detail.uri?authorId=7006023691",
    title: "Bhattacharya, Chinmoy",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology Photoelectrochemistry, Electrochemistry, Corrosion Electrochemistry",
  },
  vidyan: {
    card: "https://vidwan.inflibnet.ac.in/profile/93345",
    title: "Dr. Chinmoy Bhattacharya",
    description:
      "Associate Professor, Department of Chemistry, Indian Institute of Engineering Science and Technology",
    image: "https://irins.org/assets/profile_images/93345.jpg",
  },
  additional: {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    canonical: "https://www.chinmoybhattacharyaelectrochemistry.com",
    icon: "/favicon_io/favicon.ico?v=4",
  },
};

export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <PageHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
