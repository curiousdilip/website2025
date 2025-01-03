import "./work.css";
import Projects from "../components/Projects";
export const metadata = {
  title: "Projects | Dilip Kumar Maurya",
  description:
    "Below you can find a selection of personal projects I've been working on recently. Here you can find some excerpts from my day-to-day professional work.",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in",
    },
  ],
  openGraph: {
    title: "Projects | Dilip Kumar Maurya",
    description:
      "Below you can find a selection of personal projects I've been working on recently. Here you can find some excerpts from my day-to-day professional work.",
    url: "https://www.dilipmaurya.in/projects",
    siteName: "Projects | Dilip Kumar Maurya",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "Projects | Dilip Kumar Maurya",
    description:
      "Below you can find a selection of personal projects I've been working on recently. Here you can find some excerpts from my day-to-day professional work.",
  },
  robots: "index, follow",
};
export default function Project() {
  return (
    <section id="work">
      <div className="container">
        <h1 className="work-heading">Projects</h1>
        <p>
          Below you can find a selection of personal projects I've been working
          on recently. Here you can find some excerpts from my day-to-day
          professional work.
        </p>
        <Projects />
      </div>
    </section>
  );
}