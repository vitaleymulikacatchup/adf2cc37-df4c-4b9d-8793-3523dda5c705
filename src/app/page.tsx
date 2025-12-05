"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { Code, Target, Users, Zap, Rocket } from "lucide-react";

export default function HomePage() {
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
            { name: "Courses", id: "/courses" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Learn to Code. Build Your Future."
          description="Master programming through hands-on learning. Join Happy-Coder and start your tech career today."
          tag="Web Development"
          tagIcon={Code}
          buttons={[
            { text: "Explore Courses", href: "/courses" },
            { text: "Learn More", href: "/about" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934345464-40htgmrz.jpg",
              imageAlt: "Young programmer coding on laptop"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934346428-fw7i3v05.png",
              imageAlt: "Web development code editor"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934347596-r00hjzs5.jpg",
              imageAlt: "Software developer working on code"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Happy-Coder"
          description="We are dedicated to providing comprehensive programming education that combines theory with practical experience. Our mission is to empower aspiring developers with the skills needed to thrive in the tech industry."
          tag="Our Mission"
          tagIcon={Target}
          imagePosition="right"
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934348706-yku3grvq.jpg"
          imageAlt="Students learning programming together"
          bulletPoints={[
            {
              title: "Expert Instructors",
              description: "Learn from industry professionals with real-world experience",
              icon: Users
            },
            {
              title: "Hands-on Projects",
              description: "Build real applications and add them to your portfolio",
              icon: Zap
            },
            {
              title: "Career Support",
              description: "Get guidance and resources to land your dream tech job",
              icon: Rocket
            }
          ]}
          buttons={[
            { text: "View Curriculum", href: "/courses" }
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