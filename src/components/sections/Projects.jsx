// import { RevealOnScroll } from "../RevealOnScroll";


// export const Projects = () => {
//     return (
//         <section 
//             id="projects" 
//             className="min-h-screen flex items-center justify-center py-20"
//         >
//             <RevealOnScroll>
//                 <div className="max-w-5xl mx-auto px-4">
//                     <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//                         {" "}
//                         Featured Projects
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
//                             <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
//                             <p className="text-gray-400 mb-4">
//                                 Scalable cloud infrastructure management with real-time monitoring 
//                                 and automated scaling.
//                             </p>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                             {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
//                                 <span
//                                         key={key}
//                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
//                                     >
//                                         {tech}                                    
//                                 </span>
//                             ))}
//                             </div>

//                             <div className="flex justify-between items-center">
//                                 <a 
//                                     href="#"
//                                     className="text-blue-400 hover:text-blue-300 transition-colors my-4 scroll-smooth"
//                                 > 
//                                     {" "}
//                                     View Project ⇝{" "}
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
//                             <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
//                             <p className="text-gray-400 mb-4">
//                                 Scalable cloud infrastructure management with real-time monitoring 
//                                 and automated scaling.
//                             </p>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                             {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
//                                 <span
//                                         key={key}
//                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
//                                     >
//                                         {tech}                                    
//                                 </span>
//                             ))}
//                             </div>

//                             <div className="flex justify-between items-center">
//                                 <a 
//                                     href="#"
//                                     className="text-blue-400 hover:text-blue-300 transition-colors my-4 scroll-smooth"
//                                 > 
//                                     {" "}
//                                     View Project ⇝{" "}
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
//                             <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
//                             <p className="text-gray-400 mb-4">
//                                 Scalable cloud infrastructure management with real-time monitoring 
//                                 and automated scaling.
//                             </p>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                             {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
//                                 <span
//                                         key={key}
//                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
//                                     >
//                                         {tech}                                    
//                                 </span>
//                             ))}
//                             </div>

//                             <div className="flex justify-between items-center">
//                                 <a 
//                                     href="#"
//                                     className="text-blue-400 hover:text-blue-300 transition-colors my-4 scroll-smooth"
//                                 > 
//                                     {" "}
//                                     View Project ⇝{" "}
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
//                             <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
//                             <p className="text-gray-400 mb-4">
//                                 Scalable cloud infrastructure management with real-time monitoring 
//                                 and automated scaling.
//                             </p>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                             {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
//                                 <span
//                                         key={key}
//                                         className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
//                                     >
//                                         {tech}                                    
//                                 </span>
//                             ))}
//                             </div>

//                             <div className="flex justify-between items-center">
//                                 <a 
//                                     href="#"
//                                     className="text-blue-400 hover:text-blue-300 transition-colors my-4 scroll-smooth"
//                                 > 
//                                     {" "}
//                                     View Project ⇝{" "}
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </RevealOnScroll>
//         </section>
//     )
// };

import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Real Estate Property Management",
            description: "Full-stack Node.js/Express.js application with Google Maps API integration for interactive property listing and management. Features RESTful API architecture, email automation, and geolocation-based property visualization.",
            tech: ["Node.js", "Express.js", "MongoDB", "Google Maps API", "Mongoose"],
            link: "#", // Replace with actual link or GitHub repo
            date: "July 2025 – Present"
        },
        {
            title: "Interactive Web-Based RPG",
            description: "Comprehensive game mechanics with character progression, combat systems, and state management. Built with vanilla JavaScript, featuring dynamic DOM manipulation, real-time UI updates, and custom CSS animations.",
            tech: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
            link: "#", // Replace with actual link or GitHub repo
            date: "April 2025 – May 2025"
        },
        {
            title: "Email Reminder System - PeakMojo",
            description: "Built email reminder system reducing incomplete interviews by 22% for 277+ candidates. Engineered reusable React/TypeScript components with drag-and-drop, video playback, and Chart.js visualizations.",
            tech: ["React", "TypeScript", "FastAPI", "Python", "Chart.js"],
            link: "#",
            date: "October 2025 – November 2025"
        },
        {
            title: "PowerShell Automation Scripts",
            description: "Engineered PowerShell automation script to streamline new employee provisioning in Active Directory. Architected IT department's internal SharePoint site for centralized resource access.",
            tech: ["PowerShell", "Active Directory", "SharePoint", "Azure"],
            link: "#",
            date: "June 2024 – Aug. 2025"
        }
    ];

    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>
                                <p className="text-gray-500 text-sm mb-3">{project.date}</p>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a 
                                        href={project.link}
                                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                                    > 
                                        View Project ⇝
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};