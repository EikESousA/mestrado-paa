import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormInput, Header, PDF, Search, Upload } from "@/components";
import { IFileDTO } from "@/dtos/IFileDTO";
import { useApp } from "@/hooks";
import { formSchema, IFormSchema } from "@/validators";

export default function App() {
  const { files, handleFiles } = useApp();

  const { control, handleSubmit } = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filter: "",
    },
  });

  function formSubmit(data: IFormSchema) {
    console.log(data);
  }

  return (
    <div className="h-screen w-screen bg-dark-default">
      <Header />

      <section>
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

      <main>
        <PDF />
        <Search />
      </main>
    </div>
  );
}
