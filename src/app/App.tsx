import { Form, Header, PDF, Search } from "@/components";

export default function App() {
  return (
    <div className="h-screen w-screen bg-dark-default">
      <Header />

      <section>
        <Form />
      </section>

      <main>
        <PDF />
        <Search />
      </main>
    </div>
  );
}
