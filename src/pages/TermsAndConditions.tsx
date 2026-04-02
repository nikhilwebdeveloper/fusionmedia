import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
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
              <FileText size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p className="text-lg mb-4">
                Fusion Media is an influencer marketing agency that provides services such as influencer collaborations, UGC content creation, campaign management, and digital marketing support.
              </p>
              <p className="font-medium text-white">By working with Fusion Media, you agree to the following terms:</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Services</h2>
              <p>We provide influencer marketing services including creator sourcing, campaign management, UGC content, and content strategy.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A minimum of 50% advance payment is required before starting any project.</li>
                <li>The remaining payment must be completed before or immediately after campaign execution.</li>
                <li>Delay in payment may result in pause or cancellation of services.</li>
                <li>Fusion Media charges a service fee of 15%–20% of the total campaign budget, depending on the scope and requirements of the project.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Deliverables & Timeline</h2>
              <p>All deliverables (reels, stories, posts, etc.) will be finalized before the campaign starts. Campaign kickoff will begin within 7 working days of receiving the advance payment. Timelines may vary based on campaign scope and creator availability.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Revisions</h2>
              <p>Limited revisions may be allowed. Any major changes after approval may require additional charges.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Creator Responsibility</h2>
              <p>Creators working with Fusion Media are independent contractors, not employees of Fusion Media. Fusion Media acts as a bridge between brands and creators. Creators are solely responsible for delivering content on time and maintaining agreed quality standards. They must follow brand guidelines provided before the campaign.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Confidentiality</h2>
              <p>Both parties (brand and Fusion Media) agree to keep all campaign details, pricing, and business information strictly confidential. This includes budget details, creator rates, and campaign strategies. This confidentiality obligation remains even after the campaign ends.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Content Usage & Intellectual Property</h2>
              <p>Content usage rights will be decided and agreed upon before the campaign begins. Upon full and final payment, the brand receives a license to use the content for agreed platforms and duration. Any usage beyond the agreed scope (such as paid ads, billboards, or extended duration) will require a separate agreement and may involve additional charges. Creators retain ownership of their content unless a full buyout is agreed upon in writing.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. No Guarantee</h2>
              <p>Fusion Media does not guarantee specific results such as views, engagement, or sales. Performance depends on multiple external factors beyond our control.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">9. Cancellation</h2>
              <p>Advance payments are non-refundable once the project is confirmed. If work has already started, additional charges may apply.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">10. Liability</h2>
              <p>Fusion Media is not responsible for delays caused by creators, platform issues, or any indirect losses. Since creators are independent contractors, Fusion Media is not liable for any content created by them that violates any law or third-party rights.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">11. Governing Law</h2>
              <p>This agreement is governed by the laws of India. Any disputes arising out of this agreement will be subject to the jurisdiction of courts in Jaipur.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">12. Agreement</h2>
              <p>By working with Fusion Media, you agree to all the above terms.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
