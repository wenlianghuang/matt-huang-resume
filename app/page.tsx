//import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-900">黃文亮(Matt Huang)</h1>
        <p className="text-center text-gray-600">前端開發工程師</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">關於我</h2>
          <p className="text-gray-700">這裡可以放一段簡短的自我介紹。</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">技能</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">聯絡方式</h2>
          <p className="text-gray-700">Email: your.email@example.com</p>
          <p className="text-gray-700">
            GitHub: <a href="https://github.com/yourusername" className="text-blue-600">yourusername</a>
          </p>
        </section>
      </div>
    </main>
  );
}
