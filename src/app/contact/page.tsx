"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Rocket } from "lucide-react";

export default function ContactPage() {
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
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Begin Your Coding Journey?"
          description="Join Happy-Coder today and take the first step toward a rewarding tech career. Sign up for our newsletter to get updates on new courses and special offers."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="We respect your privacy. Unsubscribe at any time."
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