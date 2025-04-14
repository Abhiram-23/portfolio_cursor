import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webScrapping from "../assets/web_scrapping.png";
import chatWithPdf from "../assets/chat_with_pdf.png";
import videoStreaming from "../assets/react_video_streaming.png";
import companyDataEnrichment from "../assets/company_data_enrichment.png";
import drowsinessDetection from "../assets/drowsiness_detection.png";

const Projects = () => {
  const projectsData = [
    {
      title: "AI-Powered Company Data Enrichment using LLMs",
      description: [
        <>
          Developed an automated system to enrich{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            20,000+ company listings
          </span>{" "}
          with additional data using AI agents, significantly improving data
          quality and completeness.
        </>,
        <>
          Implemented{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            BrowserUse AI agent
          </span>{" "}
          for intelligent web scraping and data extraction, enabling automated
          navigation and information gathering from company websites.
        </>,
        <>
          Integrated{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            Google Gemini API
          </span>{" "}
          for natural language processing and data validation, ensuring high
          accuracy in extracted information and maintaining data consistency.
        </>,
        "Automated the process of extracting company descriptions, emails, and official URLs, reducing manual effort by 90% and improving data freshness.",
      ],
      technologies: [
        "BrowserUse AI",
        "Google Gemini API",
        "Python",
        "Excel",
        "LLMs",
      ],
      image: companyDataEnrichment,
      link: "https://github.com/Abhiram-23/bayouhub",
    },
    {
      title: "Automated Web Scraping and Data Integration using AWS",
      description: [
        <>
          Developed a Python script using{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            BeautifulSoup
          </span>{" "}
          for automated web scraping, capable of handling dynamic content and
          complex HTML structures.
        </>,
        <>
          Automated execution via{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            AWS Lambda & CloudWatch
          </span>{" "}
          cron jobs, ensuring reliable and scheduled data collection with
          minimal maintenance overhead.
        </>,
        <>
          Integrated{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            Google Sheets API
          </span>{" "}
          for real-time data reporting, enabling instant access to collected
          data and automated report generation.
        </>,
        "Implemented error handling and retry mechanisms to ensure robust data collection, achieving 99.9% reliability in data extraction.",
        "Created a scalable architecture that can handle multiple data sources and formats, with easy integration of new data points.",
      ],
      technologies: [
        "Python",
        "BeautifulSoup",
        "AWS Lambda",
        "CloudWatch",
        "Google Sheets API",
      ],
      image: webScrapping,
      link: "https://docs.google.com/document/d/1DDmJGRUCXHIueLA_cRxzmrlzQeI9MSgvpZxtkHFS7SI/edit?usp=sharing",
    },
    {
      title: "Chat with PDF using Google Gemini AI and LangChain",
      description: [
        "Built a web app to upload PDFs and generate answers based on content, providing an intuitive interface for document interaction.",
        <>
          Used{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            Google Gemini AI
          </span>{" "}
          with{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            LangChain
          </span>{" "}
          for conversational AI, enabling natural language understanding and
          context-aware responses.
        </>,
        <>
          Implemented{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            FAISS vector store
          </span>{" "}
          for efficient document searching, reducing response time and improving
          answer accuracy.
        </>,
        "Developed a robust document processing pipeline that handles various PDF formats and structures.",
        "Created a user-friendly interface with real-time response generation and conversation history tracking.",
      ],
      technologies: [
        "React",
        "Google Gemini AI",
        "LangChain",
        "FAISS",
        "Python",
        "PDF Processing",
      ],
      image: chatWithPdf,
      link: "https://github.com/Abhiram-23/genAI_Gemini",
    },
    {
      title: "React-Based Video Streaming Application",
      description: [
        <>
          Developed a video streaming app using{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            React
          </span>
          , featuring a modern and responsive design with seamless playback
          experience.
        </>,
        "Implemented responsive UI and smooth video playback features, including adaptive bitrate streaming and quality selection.",
        <>
          Optimized performance with{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            lazy loading
          </span>{" "}
          and React hooks, reducing initial load time and improving user
          experience.
        </>,
        "Added features like video progress tracking, playback speed control, and fullscreen mode for enhanced user interaction.",
        "Implemented efficient state management and caching strategies for smooth video transitions and reduced bandwidth usage.",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Video Streaming",
        "Web APIs",
      ],
      image: videoStreaming,
      link: "https://github.com/Abhiram-23/video_streaming",
    },
    {
      title: "Drowsiness Detection using OpenCV",
      description: [
        <>
          Built a real-time drowsiness detection system using{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            OpenCV
          </span>
          , capable of processing video feeds with high accuracy and low
          latency.
        </>,
        <>
          Tracked eye movements using{" "}
          <span className="text-light-highlight dark:text-dark-highlight font-medium">
            Eye Aspect Ratio (EAR)
          </span>
          , implementing advanced computer vision techniques for precise eye
          state detection.
        </>,
        "Integrated an alert system for real-time notifications, including visual and audio warnings for drowsy drivers.",
        "Developed a robust face detection system that works reliably across different lighting conditions and face angles.",
        "Implemented performance optimizations to ensure smooth operation on standard hardware without compromising accuracy.",
      ],
      technologies: [
        "Python",
        "OpenCV",
        "Computer Vision",
        "Machine Learning",
        "Real-time Processing",
      ],
      image: drowsinessDetection,
      link: "https://github.com/Abhiram-23/drowsiness_detection",
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-light-highlight/10 dark:bg-dark-highlight/10 hover:bg-light-highlight/20 dark:hover:bg-dark-highlight/20 text-light-highlight dark:text-dark-highlight p-3 rounded-full transition-all duration-300"
    >
      <FaChevronLeft className="w-5 h-5" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-light-highlight/10 dark:bg-dark-highlight/10 hover:bg-light-highlight/20 dark:hover:bg-dark-highlight/20 text-light-highlight dark:text-dark-highlight p-3 rounded-full transition-all duration-300"
    >
      <FaChevronRight className="w-5 h-5" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-10 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <h2 className="section-title">Projects</h2>
            </div>
            <p className="text-light-muted dark:text-dark-secondary max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in full-stack development.
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {projectsData.map((project, index) => (
              <div key={index} className="px-4">
                <div className="group relative bg-light-card dark:bg-dark-card rounded-lg p-4 transition-all duration-300 hover:shadow-xl h-[600px] md:h-[500px]">
                  {/* Gradient Border Effect */}
                  <div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-secondary to-light-highlight dark:from-dark-primary dark:to-dark-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ padding: "2px" }}
                  >
                    <div className="h-full w-full bg-light-card dark:bg-dark-card rounded-lg"></div>
                  </div>

                  <div className="relative h-full">
                    <div className="grid md:grid-cols-2 gap-4 h-full">
                      <div className="relative h-48 md:h-full overflow-hidden rounded-lg flex items-center justify-center bg-light-card/50 dark:bg-dark-card/50">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex flex-col h-full">
                        <h3 className="text-xl font-semibold mb-3 text-light-primary dark:text-dark-primary group-hover:text-light-highlight dark:group-hover:text-dark-highlight transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex-grow overflow-y-auto custom-scrollbar">
                          <ul className="space-y-2.5 mb-4">
                            {project.description.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-light-muted dark:text-dark-secondary text-sm"
                              >
                                <span className="mr-2 text-light-highlight dark:text-dark-highlight">
                                  •
                                </span>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mb-4">
                            <h4 className="text-xs font-semibold text-light-primary dark:text-dark-primary mb-2">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 text-xs bg-light-highlight/10 dark:bg-dark-highlight/10 text-light-highlight dark:text-dark-highlight rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-auto pt-3">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-light-highlight/10 dark:bg-dark-highlight/10 text-light-highlight dark:text-dark-highlight hover:bg-light-highlight/20 dark:hover:bg-dark-highlight/20 transition-colors duration-300 text-sm"
                          >
                            {project.link.includes("github.com") ? (
                              <FaGithub className="w-4 h-4" />
                            ) : (
                              <FaExternalLinkAlt className="w-4 h-4" />
                            )}
                            <span className="font-medium">View Project</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4f46e5;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4338ca;
        }
      `}</style>
    </section>
  );
};

export default Projects;
