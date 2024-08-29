import Input from "./Input";
import Upload from "./Upload";

export default function Form() {
  return (
    <section className="flex w-full flex-row items-center justify-between border-y-1 border-gray-4/20 bg-dark-default px-8 py-4">
      <Upload name="file" />
      <Input name="filter" iconRight="search" />
    </section>
  );
}
