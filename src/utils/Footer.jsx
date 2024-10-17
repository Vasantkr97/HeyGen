import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          {/* Logo and CTA */}
          <div className="relative w-full md:w-[263px] h-[321px] bg-white rounded-xl overflow-hidden mb-8 md:mb-0 shadow-lg">
            <img
              src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e4920729c590c4e43a4a1e_footer-avatars.gif"
              alt="Person Avatar"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col items-start justify-between h-full p-4">
              <img
                src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a3528054f620c6ba541a_heygen-logotype-alt.svg"
                width={86}
                height={23}
                alt="HeyGen Logo"
              />
              <button className="bg-black text-white py-2 px-6 rounded-full text-sm mt-auto hover:bg-purple-600 mx-auto">
                Get started for free
              </button>
            </div>
          </div>

          {/* Information Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Use Cases */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Use Cases</h4>
              <ul className="space-y-2 text-gray-600 text-base">
                <li>Agencies</li>
                <li>Marketing</li>
                <li>Sales</li>
                <li>Learning & Development</li>
                <li>Product Overviews</li>
                <li>
                  <a href="#" className="hover:underline hover:text-purple-500">
                    Scaled Outreach
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600 text-base">
                <li>AI Avatars</li>
                <li>AI Voices</li>
                <li>Video Translate</li>
                <li>
                  <a href="#" className="hover:underline hover:text-purple-500">
                    Personalized Video
                  </a>
                </li>
                <li>Interactive Avatar</li>
                <li>Zapier</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600 text-base">
                <li>API Documentation</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Tutorial</li>
                <li>Weekly Webinar</li>
                <li>Case Studies</li>
                <li>Help Center</li>
                <li>Alternative</li>
                <li>Affiliate Program</li>
                <li>Status</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-base">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security Portal</li>
                <li>Ethics</li>
                <li>Moderation Policy</li>
                <li>Cookie Preference</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <img
                  className="lazy-loaded"
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbc45f6dde35184e07314_651f5a63262ba8e6968d9a45_SOC_2_Compliance_Blog_OG%201.avif"
                  alt="Content Authenticity Initiative"
                  style={{ width: "93.76px", height: "31.99px" }}
                />
                <img
                  className="lazy-loaded"
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbc4551fee2df87e70b26_65647d339c017f844ae8fe20_c2pa%201.avif"
                  alt="C2 PA"
                  style={{ width: "43px", height: "35px" }}
                />
              </div>
              <div className="flex flex-col items-start space-y-1 text-sm text-gray-600">
                <span>&copy; Copyright HeyGen</span>
                <span>
                  12130 Millennium Drive Suite 300, Los Angeles, CA 90094
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" aria-label="Facebook">
                <img
                  src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd699b20eb258418695e_facebook.avif"
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img
                  src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd9051fee2df87e82563_linkedin.avif"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#" aria-label="YouTube">
                <img
                  src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd826ef9246156379c4f_youtube.avif"
                  alt="YouTube"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#" aria-label="X (formerly Twitter)">
                <img
                  src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd8219d2cec985edaef9_x.avif"
                  alt="X"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
              <a href="#" aria-label="Discord">
                <img
                  src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66acbd69184b4ec374b11ff2_Discord.avif"
                  alt="Discord"
                  className="w-6 h-6 hover:opacity-75"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;