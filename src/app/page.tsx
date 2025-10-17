"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-10"
    >
      <section>
        <h1 className="text-3xl font-semibold text-white">Sai Karthik Patri</h1>
        <p className="text-gray-400 mt-2">
          🚀 Building Scalable Systems | Cloud ☁️ | AI-Driven Engineer 🤖 | 🐍 Python · Go · Java | Linux 
        </p>
        <p className="text-gray-400 mt-2">  
          | DevOps | AWS · GCP · Docker· Terraform | 👨‍💻Ex-Morgan Stanley | 🎓 MS CS @ UMKC 
        </p>
      </section>

<section>
  <h2 className="text-xl font-semibold text-white">🌐 About Me</h2>
  <p className="text-gray-400 mt-3">
    I’m a tech builder and problem solver who loves turning ideas into reliable,
    scalable, and intelligent systems. From engineering backend architectures to
    automating data pipelines, strengthening reliability, and experimenting with
    AI-powered development tools — I thrive on creating solutions that make
    technology smarter, faster, and more human-centered.
  </p>

  <h3 className="text-lg font-semibold text-white mt-6">⚙️ Core Expertise</h3>
  <ul className="text-gray-400 mt-2 space-y-1 list-disc ml-6">
    <li><b>Languages & Frameworks:</b> Python · Go · Java · SQL · React / Next.js · Django / Flask · GraphQL / REST APIs</li>
    <li><b>Cloud & Infrastructure:</b> AWS · GCP · Azure · Docker / Kubernetes · Terraform · CI/CD Automation</li>
    <li><b>Data & Streaming Systems:</b> Airflow · dbt · Snowflake · Kafka · Real-time Analytics</li>
    <li><b>Reliability & Observability:</b> Prometheus · Grafana · AppDynamics · Logging & Metrics Pipelines</li>
    <li><b>AI-Augmented Development:</b> GitHub Copilot · Claude · Cursor — using AI to accelerate design, code, and delivery</li>
  </ul>

  <h3 className="text-lg font-semibold text-wh  ite mt-6">🏆 Highlights & Achievements</h3>
  <ul className="text-gray-400 mt-2 space-y-1 list-disc ml-6">
    <li>Delivered mission-critical backend systems and observability tools at Morgan Stanley</li>
    <li>Built cloud-native research platforms at UMKC, combining data, APIs, and scalable frontends</li>
    <li>Earned Google SRE Fundamentals & Google Cloud Ready certifications</li>
    <li>Won 2nd Place at Research-A-Thon for a quantum-enhanced transformer innovation</li>
    <li>Completed M.S. in Computer Science with a 3.97 / 4.0 GPA</li>
  </ul>

  <h3 className="text-lg font-semibold text-white mt-6">🚀 What Drives Me</h3>
  <p className="text-gray-400 mt-3">
    I’m inspired by technology that empowers people — systems that scale effortlessly,
    data that tells a story, and automation that fuels creativity. I don’t limit myself
    to a title or stack — I bring energy, adaptability, and relentless curiosity to
    every project I join.
  </p>
  <p className="text-gray-400 mt-3">
    If you’re building something ambitious — from AI-powered platforms to reliable
    distributed systems — let’s connect and create what’s next.
  </p>
</section>

    </motion.div>
  );
}
