import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import contactBanner from "../../images/contactus.png";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[160px] bg-gray-900 mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" />
          <img
            src={contactBanner}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-raleway mb-4"
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Rahman Lab Info */}
            <AnimatedSection>
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 h-full flex flex-col border border-gray-100 shadow-sm">
                <h4 className="font-raleway font-bold text-lg">
                  Inquiries should be directed to Prof. Maksud Rahman
                </h4>
                
                <div className="space-y-6 mt-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4 text-sm sm:text-base">
                      <h4 className="text-lg font-medium mb-1">Address</h4>
                      <a
                        href={
                          "https://www.google.com/maps/search/?api=1&query=" +
                          encodeURIComponent(
                            "Engineering Building 1, Room N213, 4226 Martin Luther King Boulevard, Houston, TX 77204-4006"
                          )
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 leading-relaxed hover:text-primary-600 transition-colors inline-block"
                        title="Open in Google Maps"
                      >
                        <p>
                          University of Houston <br />
                          Cullen College of Engineering <br />
                          Department of Mechanical and Aerospace Engineering <br />
                          Engineering Building 1, Room N213 <br />
                          4226 Martin Luther King Boulevard <br />
                          Houston, TX 77204-4006
                        </p>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4 text-sm sm:text-base">
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <a
                        href="mailto:maksud@uh.edu"
                        className="text-gray-700 hover:text-primary-600 transition-colors"
                        title="Send Email"
                      >
                        maksud@uh.edu
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div className="ml-4 text-sm sm:text-base">
                      <h4 className="text-lg font-medium mb-1">Phone</h4>
                      <a
                        href="tel:+17137434500"
                        className="text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        (713)-743-4500
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Google Map Embed */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 h-full flex items-center justify-center border border-gray-100 shadow-sm">
                <div
                  id="uh-map"
                  className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7507.268344293069!2d-95.34396182415117!3d29.722856175087074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be59ddbfffff%3A0xf65ddb544650f173!2sEngineering%20Building%201-Cullen%20College%20of%20Engineering!5e1!3m2!1sen!2sus!4v1749091331104!5m2!1sen!2sus"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="border-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Contact;
