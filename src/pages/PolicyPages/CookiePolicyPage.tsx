
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import { Cookie } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
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
                  <Cookie className="h-5 w-5 text-accent" />
                </div>
                <h1 className="text-3xl font-bold">Cookie Policy</h1>
              </div>
              
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <p className="text-muted-foreground">Last updated: May 11, 2025</p>
                
                <h2>Introduction</h2>
                <p>
                  This Cookie Policy explains how Premier Creator ("we", "us", or "our") uses cookies and similar technologies to recognize 
                  you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
                
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                  Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
                  as well as to provide reporting information.
                </p>
                <p>
                  Cookies set by the website owner (in this case, Premier Creator) are called "first-party cookies". 
                  Cookies set by parties other than the website owner are called "third-party cookies". 
                  Third-party cookies enable third-party features or functionality to be provided on or through the website 
                  (e.g., advertising, interactive content and analytics).
                </p>
                
                <h2>Why Do We Use Cookies?</h2>
                <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.</p>
                
                <h2>Types of Cookies We Use</h2>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
                  </li>
                  <li>
                    <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                  </li>
                  <li>
                    <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                  </li>
                </ul>
                
                <h2>How Can You Control Cookies?</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through your browser settings.
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
                </p>
                
                <h2>Changes to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiePolicyPage;
