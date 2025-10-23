import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      {/* Header */}
      <header className="w-full max-w-4xl text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to NexusBot
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          A full-stack Retrieval Augmented Generation chatbot built with
        </p>
        <p>
          <span className="font-semibold"> Next.js</span>,
          <span className="font-semibold"> AI SDK</span>,
          <span className="font-semibold"> Drizzle ORM</span>, and
          <span className="font-semibold"> Neon Postgres</span>.
        </p>
      </header>

      {/* Features Section */}
      <section className="mt-16 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">⚡ Real-time Chat</h2>
          <p>
            Stream AI-powered responses in real-time with a responsive chat
            interface built with React and AI Elements.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">📚 Knowledge Base</h2>
          <p>
            Add custom resources and retrieve information from your own dataset
            using embeddings stored in Neon Postgres.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">
            🔍 Intelligent Retrieval
          </h2>
          <p>
            Retrieve the most relevant information for any query using vector
            search powered by embeddings.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">🔐 Authentication</h2>
          <p>
            User login and session management with Clerk, ensuring secure access
            to your knowledge base.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <Link
          href="/chat"
          className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-lg shadow-md transition"
        >
          Try NexusBot
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-20 w-full text-center text-gray-500 text-sm">
        &copy; 2025 Nikita Poyrekar. Built with Next.js, AI SDK, and Tailwind
        CSS.
      </footer>
    </main>
  );
};

export default Home;
