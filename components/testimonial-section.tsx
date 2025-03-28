"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  videoThumbnail: string;
  companyLogo: string;
}

interface CustomerStory {
  id: number;
  title: string;
  description: string;
  company: string;
  date: string;
  image: string;
}

interface CaseStudy {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  industry: string;
  results: string;
  image: string;
}

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<"testimonials" | "customerStories" | "caseStudies">("testimonials");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alan Holliday",
      title: "System Administrator",
      company: "Blackburn Rovers Football Club",
      quote: '"Part of the vision for the company is always security. We want to ensure that not only do our data and devices remain secure, but we can also help our users stay secure. Hexnode with the solution they offered, helps with that drastically."',
      videoThumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
      companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Blackburn_Rovers.svg/1200px-Blackburn_Rovers.svg.png",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "IT Director",
      company: "Manchester United FC",
      quote: '"The implementation was seamless and our operations have improved dramatically. The system is intuitive and our staff adapted quickly."',
      videoThumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
      companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
    },
    {
      id: 3,
      name: "Michael Brown",
      title: "Operations Manager",
      company: "Liverpool FC",
      quote: '"We\'ve seen a significant reduction in operational costs and improved fan satisfaction scores since implementing this solution."',
      videoThumbnail: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
      companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
    },
  ];

  const customerStories: CustomerStory[] = [
    {
      id: 1,
      title: "Digital Transformation at Blackburn Rovers",
      description: "How Blackburn Rovers transformed their stadium operations through digital innovation.",
      company: "Blackburn Rovers FC",
      date: "March 2025",
      image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    },
    {
      id: 2,
      title: "Enhancing Fan Experience",
      description: "A case study on improving fan engagement through technology.",
      company: "Premier League Club",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Stadium Management Revolution",
      challenge: "Outdated systems causing operational inefficiencies and poor fan experience.",
      solution: "Implemented a comprehensive digital stadium management system.",
      industry: "Sports & Entertainment",
      results: "40% increase in operational efficiency and 30% improvement in fan satisfaction.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    },
  ];

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFF" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', 
            backgroundSize: '30px 30px' 
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-inter mb-6">Success Stories</h1>
          <p className="text-xl text-blue-100 font-inter max-w-2xl">
            Discover how our stadium management system is transforming the sports industry through digital innovation.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`py-6 px-3 font-medium text-sm border-b-2 transition-all duration-300 ${
                activeTab === "testimonials"
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setActiveTab("customerStories")}
              className={`py-6 px-3 font-medium text-sm border-b-2 transition-all duration-300 ${
                activeTab === "customerStories"
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Customer Stories
            </button>
            <button
              onClick={() => setActiveTab("caseStudies")}
              className={`py-6 px-3 font-medium text-sm border-b-2 transition-all duration-300 ${
                activeTab === "caseStudies"
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Case Studies
            </button>
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="transition-opacity duration-300 ease-in-out  testimonial">
            {/* Testimonials Tab */}
            {activeTab === "testimonials" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src={testimonials[currentTestimonial].videoThumbnail}
                    alt="Video thumbnail"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center hover:bg-black/90 transition-all">
                      <Play size={24} className="text-white ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
                    <div className="relative w-12 h-12">
                      <Image
                        src={testimonials[currentTestimonial].companyLogo}
                        alt={testimonials[currentTestimonial].company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">
                      Transforming {testimonials[currentTestimonial].company.split(' Football Club')[0]}'s Operations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                      {testimonials[currentTestimonial].quote}
                    </p>
                  </div>

                  <div>
                    <div className="mb-6">
                      <p className="font-bold text-lg dark:text-white">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].title}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].company}</p>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full border flex items-center justify-center dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Customer Stories Tab */}
            {activeTab === "customerStories" && (
              <div className="space-y-8">
                {customerStories.map((story) => (
                  <div key={story.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gray-100 dark:bg-gray-600 relative aspect-video">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{story.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{story.description}</p>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <span className="font-medium">{story.company}</span>
                          <span className="mx-3">•</span>
                          <span>{story.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Case Studies Tab */}
            {activeTab === "caseStudies" && (
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                {caseStudies.map((study) => (
                  <div key={study.id} className="md:flex">
                    <div className="md:w-2/5 bg-gray-100 dark:bg-gray-600 relative aspect-video">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-8">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{study.title}</h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Industry</h4>
                          <p className="text-gray-600 dark:text-gray-300">{study.industry}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Results</h4>
                          <p className="text-gray-600 dark:text-gray-300">{study.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}