import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section className="px-6 md:px-24 md:py-24 py-16 space-y-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* Contact Info */}
        <AnimatedSection className="space-y-12 order-1">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">Let's connect.</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Whether you have a groundbreaking idea or just want to discuss the future of design over a 
              <span className="text-gray-900 font-bold"> Belgian beer </span> or a coffee, my door is always open in my beautiful city.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Location</h3>
              <p className="text-2xl font-bold text-gray-900">Namur, 5000 — Belgium</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Email</h3>
                <a href="mailto:kevin.sovet@gmail.com" className="text-xl md:text-2xl font-medium text-gray-900 premium-link">
                  kevin.sovet@gmail.com
                </a>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Call</h3>
                <a href="tel:+32472814262" className="text-xl md:text-2xl font-medium text-gray-900 premium-link">
                  +32 (0)472 81 42 62
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              I truly believe the best collaborations start with a simple conversation. 
              Let's meet now to explore how we can build something exceptional together.
            </p>
          </div>
        </AnimatedSection>

        {/* Real Google Map Integration */}
        <AnimatedSection className="order-2 lg:order-2" delay={200}>
          <div className="relative group">
            {/* Elegant Map Card */}
            <div className="relative h-[min(100vw,500px)] lg:h-auto lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl bg-white border border-gray-100/50 p-2 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20300.32424367375!2d4.821361718507817!3d50.46512398453472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c19962a9b34365%3A0xc07a8264d144e54e!2sNamur%2C%20Belgium!5e0!3m2!1sen!2sus!4v1708892123456!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '2.25rem' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kevin Sovet - Location Namur"
                className="grayscale contrast-[1.1] brightness-[1.05] hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Overlay Label - Moved to right corner */}
              <div className="absolute top-10 right-10 bg-gray-900/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl text-white pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Namur, BE</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Shadow Elements */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-100/40 rounded-full blur-[80px] -z-10 group-hover:scale-150 transition-transform duration-1000"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;