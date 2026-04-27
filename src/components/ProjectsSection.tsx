import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Layout, Code, Cpu, Terminal, Eye, Sparkles, Target, AlertCircle, Workflow, CheckCircle, Rocket, BookOpen, Layers, Users, Zap } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  shortSummary: string;
  objective: string;
  problemAddressed: string;
  features: string[];
  techStack: string[];
  workflow: string;
  contributions: string;
  outcome: string;
  color: string;
  icon: any;
}

const projects: Project[] = [
  // ROW 1
  {
    id: 'digital-notice-board',
    title: 'Digital Notice Board',
    category: 'Web Project',
    shortSummary: 'Centralized digital notice system for educational institutions.',
    objective: 'Replace traditional paper notices with a centralized, real-time digital notice system to ensure seamless communication.',
    problemAddressed: 'Physical notices often lead to communication delays, missed announcements, and paper wastage.',
    features: ['Admin Module (Notice Posting)', 'Real-time Dashboard', 'Search & Filter System', 'Instant Notifications'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    workflow: 'Developed using a cloud-based real-time database architecture for instant synchronization across all connected devices.',
    contributions: 'Lead Developer: Designed the UI/UX and implemented the real-time notification engine.',
    outcome: 'Significantly improved notice communication efficiency and eliminated paper consumption.',
    color: 'from-blue-100 to-indigo-200',
    icon: Layout
  },
  {
    id: 'symposium-website',
    title: 'Symposium and Events Website',
    category: 'Web Project',
    shortSummary: 'Comprehensive platform for managing college events and symposiums.',
    objective: 'Create a streamlined platform for event registration, management, and discovery.',
    problemAddressed: 'Manual event registration is tedious and prone to errors; students often miss out on event details.',
    features: ['Event Posting Portal', 'Student Registration System', 'Automated Confirmation', 'Admin Analytics'],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'EJS'],
    workflow: 'Built a full-stack MVC application with a relational database to handle complex student-event mappings.',
    contributions: 'Full-stack development: Optimized database queries for faster event listing and registration.',
    outcome: 'Automated the entire registration process, increasing student engagement by 40%.',
    color: 'from-purple-100 to-pink-200',
    icon: Code
  },
  {
    id: 'notes-accessibility',
    title: 'Notes Accessibility Project',
    category: 'AI / ML Project',
    shortSummary: 'AI-powered tool to make educational notes accessible to everyone.',
    objective: 'Bridge the gap for visually or hearing-impaired students by providing multi-modal note access.',
    problemAddressed: 'Standard digital notes are often inaccessible to students with certain disabilities.',
    features: ['Audio-to-Text Conversion', 'Visual Text Reader', 'Sign Language Support', 'Braille Export'],
    techStack: ['Python', 'Speech Processing', 'NLP', 'TensorFlow'],
    workflow: 'Integrated advanced speech-to-text models and visual analysis to transform content into multiple accessible formats.',
    contributions: 'AI Engineer: Developed the core NLP module for text summarization and simplification.',
    outcome: 'Enhanced content accessibility for students with diverse needs across campus.',
    color: 'from-emerald-100 to-teal-200',
    icon: Cpu
  },
  {
    id: 'human-voice-analysis',
    title: 'Human Voice Analysis',
    category: 'AI / ML Project',
    shortSummary: 'Voice feature analysis for demographic and emotional prediction.',
    objective: 'Develop a system to extract deep insights from human speech patterns.',
    problemAddressed: 'Difficulty in automating demographic data collection from audio and lack of emotional intelligence in AI.',
    features: ['Gender Detection', 'Age Prediction', 'Emotion Recognition', 'Acoustic Feature Extraction'],
    techStack: ['Python', 'Librosa', 'MFCC', 'Keras'],
    workflow: 'Extracted Mel-frequency cepstral coefficients (MFCCs) and trained multi-class neural networks.',
    contributions: 'Research & Development: Implemented the feature extraction pipeline and hyperparameter tuning.',
    outcome: 'Achieved 92% accuracy in Identifying demographic features and emotional states.',
    color: 'from-orange-100 to-yellow-200',
    icon: Terminal
  },
  {
    id: 'gender-prediction-voice',
    title: 'Voice-Based Gender Prediction',
    category: 'AI / ML Project',
    shortSummary: 'Comparative analysis of ML models for voice-based gender classification.',
    objective: 'Benchmark different machine learning algorithms for the specific task of gender identification.',
    problemAddressed: 'Identifying the most efficient model for low-latency voice classification.',
    features: ['Algorithm Benchmarking', 'Data Preprocessing', 'Feature Importance Analysis'],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'SVM'],
    workflow: 'Compared SVM, Random Forest, and Ensemble methods on a standardized voice dataset.',
    contributions: 'Data Scientist: Conducted thorough comparative analysis and model validation.',
    outcome: 'Identified the Ensemble approach as the most robust for this classification task.',
    color: 'from-rose-100 to-pink-200',
    icon: Cpu
  },
  {
    id: 'placement-analysis',
    title: 'Placement Analysis',
    category: 'Analytics Project',
    shortSummary: 'Insightful visualization of campus recruitment trends.',
    objective: 'Provide data-driven insights into placement trends for students and faculty.',
    problemAddressed: 'Lack of visibility into hiring patterns and core industry sectors.',
    features: ['Trend Dashboards', 'Salary Comparison', 'Skill-Gap Analysis', 'Company Insights'],
    techStack: ['Tableau', 'Python', 'Pandas', 'Excel'],
    workflow: 'Cleaned historical data using Python and created interactive storytelling dashboards in Tableau.',
    contributions: 'Analyst: Derived actionable insights for the placement cell regarding top hiring companies.',
    outcome: 'Delivered interactive dashboards identifying key hiring trends over the last 5 years.',
    color: 'from-cyan-100 to-blue-200',
    icon: Layers
  },
  // ROW 2
  {
    id: 'eye-disease-classification',
    title: 'Eye Disease Classification',
    category: 'Deep Learning Project',
    shortSummary: 'Deep learning system for automated detection of eye conditions.',
    objective: 'Assist ophthalmologists in early detection of eye diseases using retinal images.',
    problemAddressed: 'Diagnostic delays due to high patient volume and specialist shortage.',
    features: ['Image Preprocessing', 'CNN Classification', 'Diagnostic Heatmaps', 'Result Export'],
    techStack: ['PyTorch', 'Computer Vision', 'CNN', 'Streamlit'],
    workflow: 'Trained deep Convolutional Neural Networks on a diverse medical dataset with data augmentation.',
    contributions: 'Deep Learning Lead: Built the training pipeline and optimized model inference time.',
    outcome: 'Accurate classification of common eye diseases for preliminary medical screening.',
    color: 'from-emerald-100 to-green-200',
    icon: Eye
  },
  {
    id: 'eye-ulcer-rag',
    title: 'Eye Ulcer RAG System',
    category: 'GenAI Project',
    shortSummary: 'Visual QA and retrieval system for eye ulcer diagnosis and info.',
    objective: 'Provide instant, evidence-based answers to queries regarding eye ulcers.',
    problemAddressed: 'Patients often find medical information online confusing or inaccurate.',
    features: ['Vision-Language QA', 'Medical Doc Retrieval', 'Phi-3 Integration', 'Reference Grounding'],
    techStack: ['Microsoft Phi-3 Vision', 'RAG', 'Python', 'LangChain'],
    workflow: 'Combined retrieval-augmented generation with state-of-the-art vision models for grounded responses.',
    contributions: 'GenAI Developer: Architected the RAG pipeline and integrated the vision model.',
    outcome: 'A reliable QA system that grounds responses in verified medical documentation.',
    color: 'from-amber-100 to-orange-200',
    icon: Sparkles
  },
  {
    id: 'criminal-monitoring',
    title: 'Smart Criminal Monitoring System',
    category: 'Computer Vision Project',
    shortSummary: 'National Face Recognition Hackathon Project (SIH 2024 Finalist).',
    objective: 'Develop an AI-powered smart monitoring system for law enforcement.',
    problemAddressed: 'Manual suspect tracking is slow; real-time automated identification is needed for safety.',
    features: ['Face Detection & ID', 'Real-time Alerts', 'Multi-camera Sync', 'Suspect DB Management'],
    techStack: ['Roboflow', 'OpenCV', 'React', 'FastAPI'],
    workflow: 'Integrated high-performance face recognition algorithms with a web-based monitoring dashboard.',
    contributions: 'Full-stack & AI: Developed the backend API and integrated the facial recognition engine.',
    outcome: 'Selected as a National Finalist at Smart India Hackathon 2024.',
    color: 'from-red-100 to-rose-200',
    icon: Target
  },
  {
    id: 'genai-eye-diagnosis',
    title: 'GenAI Eye Diagnosis System',
    category: 'GenAI Project',
    shortSummary: '1st Prize Winner – GenAI Spark Hackathon.',
    objective: 'Create a generative AI healthcare prototype for eye disease diagnosis.',
    problemAddressed: 'Lack of accessible specialist advice in remote and underserved areas.',
    features: ['Advanced Diagnosis', 'Personalized Care Advice', 'Multi-lingual Support', 'Expert Bridge'],
    techStack: ['Deep Learning', 'RAG', 'Python', 'Vector DB'],
    workflow: 'Developed an end-to-end diagnosis pipeline using state-of-the-art vision and language models.',
    contributions: 'Team Lead: Orchestrated the model integration and pitched the final prototype.',
    outcome: 'Secured 1st Prize at GenAI Spark Hackathon (ShellKode).',
    color: 'from-blue-100 to-sky-200',
    icon: Rocket
  },
  {
    id: 'traffic-management',
    title: 'Smart Traffic Management',
    category: 'AI Project',
    shortSummary: 'Density-based traffic signal control system for urban optimization.',
    objective: 'Reduce urban congestion by dynamically adjusting traffic light timings.',
    problemAddressed: 'Fixed-time signals lead to unnecessary waiting times at empty intersections.',
    features: ['Vehicle Counting', 'Dynamic Signal Control', 'Congestion Heatmaps', 'Alert System'],
    techStack: ['Computer Vision', 'YOLOv8', 'Python', 'Arduino'],
    workflow: 'Used real-time camera feeds and YOLOv8 for vehicle counting to adjust signal timing algorithms.',
    contributions: 'AI Developer: Implemented the vehicle detection and timing logic.',
    outcome: 'Demonstrated 30% reduction in average wait times during peak hour simulations.',
    color: 'from-violet-100 to-purple-200',
    icon: Workflow
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Identification',
    category: 'Deep Learning Project',
    shortSummary: 'AI diagnostic tool for leaf diseases with crop recommendations.',
    objective: 'Empower farmers with instant crop disease diagnosis via leaf images.',
    problemAddressed: 'Crop loss due to late disease detection and lack of expert advice.',
    features: ['Leaf Image Scanner', 'Disease Prediction', 'Treatment Suggestion', 'Expert Connect'],
    techStack: ['Deep Learning', 'PyTorch', 'Flutter', 'Cloud DB'],
    workflow: 'Mobile-first application backed by a CNN model trained on over 50,000 leaf images.',
    contributions: 'Mobile Developer: Designed the Flutter interface and integrated the DL model.',
    outcome: 'Accurate diagnosis for 15+ crop types with actionable treatment recommendations.',
    color: 'from-lime-100 to-green-200',
    icon: BookOpen
  }
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative flex-shrink-0 w-80 h-48 mx-4 cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 blur-xl rounded-3xl group-hover:opacity-60 transition-opacity`} />
      <div className="relative h-full sakura-card backdrop-blur-xl bg-white/70 border border-white/50 p-6 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-pink-500 shadow-sm">
              <project.icon size={20} />
            </div>
            <span className="text-[10px] font-black text-pink-400 uppercase tracking-widest bg-pink-50/50 px-2 py-1 rounded-md">
              {project.category}
            </span>
          </div>
          <h3 className="text-lg font-black text-gray-900 leading-tight mb-1 line-clamp-2 break-words">{project.title}</h3>
          <p className="text-xs text-gray-500 line-clamp-2">{project.shortSummary}</p>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2 py-0.5 bg-white/50 rounded-md text-[9px] font-bold text-gray-400 uppercase border border-white/20">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-0.5 bg-white/50 rounded-md text-[9px] font-bold text-gray-400 uppercase border border-white/20">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const row1 = projects.slice(0, 6);
  const row2 = projects.slice(6, 12);

  return (
    <section id="projects" className="py-32 px-6 bg-[#fffafa] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-100 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-rose mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a collection of projects spanning Web Development, Artificial Intelligence, and Data Analytics.
          </p>
        </div>
      </div>

      {/* Floating Ribbons Container */}
      <div className="relative py-10">
        {/* Row 1 - Moves Right */}
        <div className="flex mb-12 relative">
          <div className="flex animate-marquee-right whitespace-nowrap">
            {[...row1, ...row1].map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="animate-float-slow" style={{ animationDelay: `${idx * 0.5}s` }}>
                <ProjectCard 
                  project={project} 
                  onClick={() => {
                    setSelectedProject(project);
                    document.body.style.overflow = 'hidden';
                  }} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Left */}
        <div className="flex relative">
          <div className="flex animate-marquee-left whitespace-nowrap">
            {[...row2, ...row2].map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="animate-float-slow" style={{ animationDelay: `${idx * 0.7}s` }}>
                <ProjectCard 
                  project={project} 
                  onClick={() => {
                    setSelectedProject(project);
                    document.body.style.overflow = 'hidden';
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-white/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col"
            >
              <button 
                onClick={closeModal}
                className="absolute top-8 right-8 z-50 p-3 bg-gray-50 hover:bg-pink-100 text-gray-400 hover:text-pink-600 rounded-full transition-all"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto custom-scrollbar flex-grow">
                <div className="p-8 md:p-16">
                  {/* Header */}
                  <div className="mb-12">
                    <span className="px-4 py-1.5 bg-pink-50 text-pink-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-3xl italic">
                      "{selectedProject.shortSummary}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-12">
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
                            <Target size={20} />
                          </div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Objective</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          {selectedProject.objective}
                        </p>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                            <AlertCircle size={20} />
                          </div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Problem Addressed</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          {selectedProject.problemAddressed}
                        </p>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
                            <Layout size={20} />
                          </div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Features & Modules</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {selectedProject.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                              <div className="w-2 h-2 rounded-full bg-pink-400" />
                              <span className="font-bold text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-12">
                      <section>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                            <Zap size={20} />
                          </div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Technologies Used</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-500 shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                            <Workflow size={20} />
                          </div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Workflow</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          {selectedProject.workflow}
                        </p>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                            <Users size={20} />
                          </div>
                          <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest">Contributions</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          {selectedProject.contributions}
                        </p>
                      </section>

                      <section className="p-8 bg-emerald-50 rounded-[32px] border border-emerald-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-500 shadow-sm">
                            <CheckCircle size={20} />
                          </div>
                          <h4 className="text-sm font-black text-emerald-900 uppercase tracking-widest">Outcome</h4>
                        </div>
                        <p className="text-emerald-800 leading-relaxed font-bold">
                          {selectedProject.outcome}
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;


