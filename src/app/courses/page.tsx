"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { BookOpen, HelpCircle } from "lucide-react";

export default function CoursesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="radialGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Happy-Coder"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934344167-32bisck0.png"
          logoAlt="Happy-Coder IT School Logo"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Courses", id: "courses" },
            { name: "Team", id: "/team" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>
      
      <div id="courses" data-section="courses">
        <FeatureCardThree
          title="Our Courses"
          description="Choose from our carefully designed courses that will accelerate your programming journey"
          tag="Learning Paths"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          carouselMode="buttons"
          features={[
            {
              id: "01",
              title: "Web Development",
              description: "Master HTML, CSS, JavaScript and modern frameworks like React to build stunning websites",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934349597-noqzt82v.png",
              imageAlt: "Web development course"
            },
            {
              id: "02",
              title: "Python Programming",
              description: "Learn Python from basics to advanced concepts for data science and backend development",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934350973-7uwjt8nn.png",
              imageAlt: "Python programming course"
            },
            {
              id: "03",
              title: "Mobile App Development",
              description: "Create iOS and Android applications using cross-platform technologies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934352181-ykkei21s.jpg",
              imageAlt: "Mobile app development course"
            },
            {
              id: "04",
              title: "UI/UX Design",
              description: "Design beautiful and functional user interfaces with industry-standard tools",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934353308-66h2kv1d.jpg",
              imageAlt: "UI/UX design course"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our courses and programs"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "Do I need prior programming experience?",
              content: "No! All our courses are designed for beginners. We start from the fundamentals and progress at a comfortable pace."
            },
            {
              id: "2",
              title: "How long are the courses?",
              content: "Most of our courses range from 8-12 weeks for full-time students and 12-16 weeks for part-time learners. The exact duration depends on the course."
            },
            {
              id: "3",
              title: "Will I receive a certificate?",
              content: "Yes, upon successful completion of any course, you'll receive a certificate that you can add to your resume and LinkedIn profile."
            },
            {
              id: "4",
              title: "What is the job placement rate?",
              content: "Our graduates have an 85% job placement rate within 6 months of graduation in tech-related positions."
            },
            {
              id: "5",
              title: "Do you offer flexible schedules?",
              content: "Yes, we offer both full-time and part-time courses. Evening and weekend classes are available for working professionals."
            },
            {
              id: "6",
              title: "What payment options do you accept?",
              content: "We accept multiple payment methods including credit cards, bank transfers, and installment plans to make education accessible."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Happy-Coder"
          copyrightText="© 2025 Happy-Coder. All rights reserved."
          columns={[
            {
              title: "Courses",
              items: [
                { label: "Web Development", href: "/courses" },
                { label: "Python Programming", href: "/courses" },
                { label: "Mobile Apps", href: "/courses" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "https://blog.example.com" },
                { label: "Terms of Service", href: "https://example.com/terms" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}