export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bhanu Pratap Singh
        </h1>
        <p className="text-xl text-gray-400 mb-2">He/Him</p>
        <p className="text-lg text-indigo-400 font-medium">
          Software Engineer | PHP, Laravel & Golang Specialist | Fintech & Payment Gateway Integrations
        </p>
        <p className="mt-6 text-gray-300 leading-relaxed">
          I am a passionate Software Engineer with 4+ years of experience in building scalable
          fintech platforms, SaaS products, and cloud-native applications. I specialize in
          Laravel, Go, PHP, AWS, microservices, Docker, CI/CD pipelines, and secure API architecture.
        </p>
      </section>

      {/* ABOUT */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I thrive on solving complex engineering problems, optimizing performance, and
          delivering secure, cloud-driven solutions. My experience spans fintech, e-commerce,
          and enterprise systems with hands-on expertise in containerized deployments,
          cloud infrastructure, and DevOps best practices.
        </p>
        <p className="mt-4 text-gray-300">
          🚀 Always eager to learn and innovate, I’m open to opportunities in backend
          development and cloud-native systems.
        </p>
      </section>

      {/* SERVICES */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          <li>Custom Software Development</li>
          <li>Web Application Development</li>
          <li>Mobile Application Development</li>
          <li>SaaS & Microservices Development</li>
          <li>Cloud Application & AWS Management</li>
          <li>Database & API Development</li>
          <li>Information Security & Management</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">Top Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Laravel", "Golang", "gRPC", "APIs", "DevOps", "Docker", "AWS"].map(skill => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 pt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Bhanu Pratap Singh. All rights reserved.
      </footer>
    </main>
  );
}