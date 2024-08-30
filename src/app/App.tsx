import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormInput, Header, PDF, Search, Upload } from "@/components";
import { IFileDTO } from "@/dtos/IFileDTO";
import { useApp } from "@/hooks";
import { formSchema, IFormSchema } from "@/validators";

export default function App() {
  const { files, handleFiles, handleMark } = useApp();

  const { control, handleSubmit } = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filter: "",
    },
  });

  function formSubmit(data: IFormSchema) {
    handleMark(data.filter);
  }

  return (
    <div className="flex h-screen w-screen flex-col items-start justify-start bg-dark-default">
      <Header />

      <section className="flex w-full items-center justify-between border-y-1 border-gray-4/20 bg-dark-default px-8 py-4">
        <Form onSubmit={handleSubmit(formSubmit)}>
          <Upload
            name="file"
            files={files}
            onChangeFiles={(value: IFileDTO[]) => handleFiles(value)}
          />
          <FormInput name="filter" iconRight="search" control={control} />
          <button type="submit" className="hidden" />
        </Form>
      </section>

      <main className="flex h-[calc(100vh-12.5rem)] w-full flex-row items-center justify-center bg-dark-default p-8">
        <PDF />
        <Search />
      </main>
    </div>
  );
}
