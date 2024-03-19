import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-700">
      <header className="max-w-4xl mx-auto p-6">
        <section className="flex justify-between items-center">
          <p>HOME</p>
          <div className="flex space-x-7">
            <p>Login</p>
            <p>Logout</p>
          </div>
        </section>
      </header>
    </main>
  );
}
