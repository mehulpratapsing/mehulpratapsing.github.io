"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { ArrowLeft, Rocket, BrainCircuit, DatabaseZap } from "lucide-react"
import { SocialIcons } from "@/components/social-icons"

const ParticleBackground = dynamic(() => import("@/components/particle-background"), { ssr: false })

export default function PlaygroundPage() {
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  // Fetch Medium posts
  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mehulpratapsingh",
        )
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        setPosts(data.items.slice(0, 3)) // Fetch latest 3 posts
      } catch (error) {
        console.error("Error fetching Medium posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-white overflow-hidden">
      <ParticleBackground />

      <main className="relative z-10 p-8 container mx-auto">
        <Link href="/" className="inline-block mb-8">
          <Button className="flex items-center bg-primary hover:bg-primary/90 text-primary-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <section className="mb-16 group relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500 -z-10" />

          <div className="flex flex-col lg:flex-row gap-12 p-8 bg-black/30 backdrop-blur-xl rounded-3xl border border-primary/10 shadow-2xl">
            <div className="lg:w-2/3 space-y-8">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-text-shine">
                Architecting Intelligent Systems
              </h2>

              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-gray-300">
                  I'm <span className="text-primary font-semibold">Mehul Pratap Singh</span>, an AI Engineer
                  specializing in building production-ready
                  <span className="bg-gradient-to-r from-primary/80 to-secondary/80 bg-clip-text text-transparent">
                    {" "}
                    Retrieval-Augmented Generation systems
                  </span>
                  . Over the past 3 years, I've architected
                  <strong className="text-secondary"> 15+ AI prototypes</strong> that leverage cutting-edge combinations
                  of LLMs, vector databases, and neural search.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FeatureCard icon={Rocket} text="15+ Production POCs Delivered" />
                  <FeatureCard icon={BrainCircuit} text="RAG Systems Specialist" />
                  <FeatureCard icon={DatabaseZap} text="Vector DB Optimization" />
                </div>

                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-300">Current research focus areas:</p>
                  <div className="flex flex-wrap gap-3">
                    {["Multi-modal RAG", "LLM Quantization", "Hybrid Search", "AI Orchestration"].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 holographic-effect">
                <Image
                  src="/avaatar.png"
                  alt="Mehul Pratap Singh"
                  // layout="fill"
                  // objectFit="cover"
                  width={300} // Adjust width as needed
                  height={200}
                  className="rounded-2xl"
                />
              </div>

              <div className="space-y-6">
                <a
                  href="https://drive.google.com/file/d/1fEI1LiqRRkxY5gjTKdLZDM_KtTLGkrBM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-primary/50 transition-all duration-300">
                    <DatabaseZap className="h-5 w-5" />
                    Download Technical Resume
                  </Button>
                </a>

                <SocialIcons />
              </div>
            </div>
          </div>
        </section>

        <SkillsSection />

        <ProjectsSection />

        <BlogPostsSection posts={posts} loading={loading} />
      </main>
    </div>
  )
}

function FeatureCard({ icon: Icon, text }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-all duration-300">
      <Icon className="w-6 h-6 text-primary" />
      <span className="text-sm md:text-base">{text}</span>
    </div>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        "Python (Expert)",
        "Java",
        "JavaScript",
        "SQL",
        "RESTful APIs",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Flask",
        "Django",
        "React.js",
        "Node.js",
        "FastAPI",
      ],
    },
    {
      title: "AI/ML & Deep Learning",
      skills: [
        "LangChain",
        "Hugging Face Transformers",
        "OpenAI API",
        "Large Language Models",
        "Retrieval Augmented Generation (RAG)",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "Model Fine-tuning",
        "Prompt Engineering",
        "Vector Databases",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS Lambda",
        "EC2",
        "S3",
        "SageMaker",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "MLflow",
        "Weights & Biases",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Apache Spark",
        "Git",
        "JIRA",
        "Agile/Scrum",
        "Microservices Architecture",
      ],
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Technical Expertise
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-xl rounded-xl border border-primary/10 p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            <h3 className="font-bold text-xl text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: "RAG Pipeline Optimizer",
      description: "Next-gen retrieval system with hybrid search capabilities",
      technologies: ["LangChain", "Pinecone", "Llama 2"],
    },
    {
      title: "AI-Powered Code Reviewer",
      description: "Automated code review system using advanced NLP techniques",
      technologies: ["OpenAI Codex", "GitHub API", "Python"],
    },
    {
      title: "Multimodal AI Assistant",
      description: "Conversational AI with image and text understanding capabilities",
      technologies: ["CLIP", "GPT-4", "PyTorch"],
    },
  ]

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, description, technologies }) {
  return (
    <div className="group bg-black/30 backdrop-blur-xl rounded-xl border border-primary/10 overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <Rocket className="w-16 h-16 text-primary group-hover:animate-bounce" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-primary group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 group-hover:bg-primary/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function BlogPostsSection({ posts, loading }) {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Latest Articles
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.guid}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 backdrop-blur-xl rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3">{post.description.replace(/<[^>]+>/g, "")}</p>
                <span className="inline-block mt-4 text-primary group-hover:text-secondary transition-colors duration-300">
                  Read more →
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}

