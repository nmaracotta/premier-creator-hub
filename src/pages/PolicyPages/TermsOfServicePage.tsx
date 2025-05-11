
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { Shield } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
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
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <h1 className="text-3xl font-bold">Terms of Service</h1>
              </div>
              
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <p className="text-muted-foreground">Last updated: May 11, 2025</p>
                
                <h2>1. Introduction</h2>
                <p>
                  Welcome to Premier Creator. These terms and conditions govern your use of our website and services. 
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any 
                  part of the terms, you may not access our services.
                </p>
                
                <h2>2. Definitions</h2>
                <ul>
                  <li>"Service" refers to the website operated by Premier Creator and all services provided.</li>
                  <li>"You" refers to the individual accessing or using the Service, or the company or organization on behalf of which such individual is accessing or using the Service.</li>
                  <li>"Content" refers to all materials found on the Service, including text, images, audio, and video.</li>
                </ul>
                
                <h2>3. Use of Our Services</h2>
                <p>Our services are provided for your personal and non-commercial use, subject to the following conditions:</p>
                <ul>
                  <li>You must not use our services for any illegal or unauthorized purpose.</li>
                  <li>You must not transmit any worms, viruses, or any code of a destructive nature.</li>
                  <li>A breach or violation of any of the Terms may result in immediate termination of your access to the services.</li>
                </ul>
                
                <h2>4. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Premier Creator. 
                  Our services are protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service 
                  without the prior written consent of Premier Creator.
                </p>
                
                <h2>5. User Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your 
                  account and password. Premier Creator will not be liable for any loss or damage from your failure to maintain the security of your account.
                </p>
                
                <h2>6. User Content</h2>
                <p>
                  You retain all rights to any content you submit, post, or display on or through the Service. By submitting, posting, or displaying content on or through 
                  the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, 
                  distribute, and display such content in any media.
                </p>
                
                <h2>7. Limitation of Liability</h2>
                <p>
                  In no event shall Premier Creator, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                  resulting from your access to or use of or inability to access or use the service.
                </p>
                
                <h2>8. Termination</h2>
                <p>
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, 
                  for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                
                <h2>9. Changes to These Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after any revisions 
                  become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </p>
                
                <h2>10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
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

export default TermsOfServicePage;
