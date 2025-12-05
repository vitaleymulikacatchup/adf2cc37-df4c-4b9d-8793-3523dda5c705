"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from "next/link";
import { Award, Star, Linkedin, Github, Twitter, Globe, Dribbble } from "lucide-react";

export default function AboutPage() {
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
            { name: "About", id: "about" },
            { name: "Courses", id: "/courses" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Instructors"
          description="Learn from experienced professionals dedicated to your success"
          tag="Expert Faculty"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          members={[
            {
              id: "1",
              name: "Alex Johnson",
              role: "Web Development Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934354484-vtz5r50l.jpg",
              imageAlt: "Alex Johnson",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Python & Data Science",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934355422-im52fad9.jpg",
              imageAlt: "Sarah Chen",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "3",
              name: "Michael Rodriguez",
              role: "Mobile Development",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934356595-y1h487hh.jpg",
              imageAlt: "Michael Rodriguez",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "4",
              name: "Emma Williams",
              role: "UI/UX Design",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934357690-4xkjmkd6.jpg",
              imageAlt: "Emma Williams",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Dribbble, url: "https://dribbble.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Students Say"
          description="Real feedback from graduates who transformed their careers"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "James Park",
              handle: "@jamespark_dev",
              testimonial: "Happy-Coder completely changed my career. The instructors are passionate and the curriculum is practical. I landed a job as a web developer within 3 months!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934358540-ajjai0at.jpg",
              imageAlt: "James Park"
            },
            {
              id: "2",
              name: "Maria Garcia",
              handle: "@mariagarcia_code",
              testimonial: "The hands-on projects were invaluable. I was able to build a strong portfolio that impressed employers. Highly recommend Happy-Coder!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934359659-u6i0x2e5.jpg",
              imageAlt: "Maria Garcia"
            },
            {
              id: "3",
              name: "David Lee",
              handle: "@davidlee_tech",
              testimonial: "Best decision I made was enrolling in Happy-Coder. The support and mentorship throughout the program was exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934361017-nd6a0i7f.jpg",
              imageAlt: "David Lee"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              handle: "@lisaanderson_dev",
              testimonial: "The courses are well-structured and the community is incredibly supportive. I went from zero coding knowledge to landing my first tech job!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1764934362105-20vef2df.jpg",
              imageAlt: "Lisa Anderson"
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