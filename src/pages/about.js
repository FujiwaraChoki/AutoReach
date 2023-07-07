import React from 'react';

const AboutUs = () => {
    return (
        <div className="p-44 overflow-y-hidden">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4">About autoreach</h1>
                <p className="text-lg mb-6">
                    Welcome to autoreach, the innovative app developed by Sami Hindi. With autoreach, we offer a range of services to help you automate and streamline your business processes.
                </p>

                <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                <p className="text-lg mb-6">
                    At autoreach, we are passionate about leveraging technology to simplify tasks and enhance productivity. Our goal is to provide cutting-edge solutions that save you time and effort, allowing you to focus on what truly matters - growing your business.
                </p>

                <h2 className="text-2xl font-bold mb-4">Services We Offer</h2>
                <p className="text-lg mb-6">
                    autoreach offers a diverse range of services tailored to meet your specific needs:
                </p>
                <ul className="list-disc pl-8 mb-6">
                    <li className="text-lg mb-2"><strong>Scrapers:</strong> Our powerful scraping tools can gather data from various sources, helping you extract valuable insights and make informed decisions.</li>
                    <li className="text-lg mb-2"><strong>AI Chatbots:</strong> We develop intelligent chatbots that can automate customer support, answer frequently asked questions, and provide personalized assistance 24/7.</li>
                    <li className="text-lg mb-2"><strong>Custom Software:</strong> Need a unique software solution? Our experienced team can build customized applications to address your business challenges and streamline your operations.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <p className="text-lg">
                    At autoreach, we are committed to delivering high-quality solutions that exceed your expectations. We strive for excellence in every aspect of our work, from the initial development stage to ongoing support and maintenance.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
