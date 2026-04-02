import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-primary hover:underline mb-8">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
              <ShieldCheck size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p className="text-lg">
                Fusion Media values your privacy and is committed to protecting your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>We may collect basic information such as your name, email address, phone number, Instagram handle, and audience insights (for creators).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>The information collected is used for communication, matching creators with brands, managing campaigns, and improving our services. We will never use your data for any purpose beyond what is mentioned here without your consent.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Data Protection</h2>
              <p>We keep your information secure and confidential. We do not sell, rent, or share your personal data with third parties without your consent.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Data Sharing</h2>
              <p>Your information may be shared with relevant brands or partners only for collaboration and campaign purposes. Any such sharing is done on a need-to-know basis only.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. User Rights</h2>
              <p>You have the right to request access, update, or delete your personal data at any time by contacting us at the details mentioned below.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Data Retention</h2>
              <p>We may retain your information for as long as necessary to provide our services or comply with legal requirements.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Data Breach</h2>
              <p>In the unlikely event of a data breach, we will notify all affected users within 72 hours of becoming aware of the incident.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p>Our services may include links to third-party platforms (such as Instagram). We are not responsible for their privacy practices.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">9. Updates to Policy</h2>
              <p>Fusion Media may update this Privacy Policy from time to time. Any changes will be communicated via email or website notification.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">10. Contact Us</h2>
              <p>For any questions or concerns regarding this Privacy Policy, you can contact us at:</p>
              <p className="mt-2 font-bold text-brand-primary">Email: Connect@fusionmediaofficial.co.in</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
