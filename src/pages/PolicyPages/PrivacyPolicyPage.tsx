
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { FileText } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <MotionWrapper animation="fade-in-up">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
              </div>
              
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <p className="text-muted-foreground">Last updated: May 11, 2025</p>
                
                <h2>Introduction</h2>
                <p>
                  Premier Creator ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our website and 
                  tell you about your privacy rights and how the law protects you.
                </p>
                
                <h2>Information We Collect</h2>
                <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
                <ul>
                  <li>Identity Data: first name, last name, username</li>
                  <li>Contact Data: email address, telephone number, address</li>
                  <li>Technical Data: IP address, browser type and version, location, operating system</li>
                  <li>Usage Data: information about how you use our website and services</li>
                </ul>
                
                <h2>How We Collect Your Personal Data</h2>
                <p>We use different methods to collect data from and about you including:</p>
                <ul>
                  <li>Direct interactions: You may provide your Identity and Contact Data by filling in forms or corresponding with us.</li>
                  <li>Automated technologies: As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
                  <li>Third parties: We may receive data about you from various third-party service providers.</li>
                </ul>
                
                <h2>How We Use Your Personal Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                  <li>To register you as a new customer</li>
                  <li>To provide and manage our services to you</li>
                  <li>To manage our relationship with you</li>
                  <li>To improve our website, products/services, marketing, or customer relationships</li>
                  <li>To recommend products or services that may be of interest to you</li>
                </ul>
                
                <h2>Data Security</h2>
                <p>
                  We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
                  used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, 
                  contractors, and other third parties who have a business need to know.
                </p>
                
                <h2>Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                  including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
                
                <h2>Your Legal Rights</h2>
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                <ul>
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
                
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy 
                  on this page and updating the "Last Updated" date at the top of this policy.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  <br />
                  Email: support@premiercreator.com
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
