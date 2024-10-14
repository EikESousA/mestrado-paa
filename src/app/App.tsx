import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";

import { logoImage } from "@/assets";
import { Form, FormInput, Icon, Loading, Modal, Upload } from "@/components";
import { IFileDTO } from "@/dtos";
import { members } from "@/helpers";
import { useApp } from "@/hooks";
import { numberWithCommas } from "@/utils";
import { formSchema, IFormSchema } from "@/validators";

export default function App() {
  const {
    files,
    handleFiles,
    handleMark,
    loadingFile,
    textMark,
    text,
    loadingSearch,
    algoritms,
    modal,
    toogleModal,
  } = useApp();

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
      <header className="flex w-full flex-row items-center justify-between px-8 py-4">
        <img src={logoImage} alt="Logo da UFS" className="h-20" />

        <div className="flex h-full flex-col items-center justify-center">
          <p className="font-default text-6 font-bold text-gray-1">PAA</p>
          <p className="font-default text-6 font-bold text-gray-1">
            Processamento de cadeias
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/EikESousA/mestrado-paa"
            target="_blank"
            className="group flex items-center justify-center rounded-md border-1 border-gray-4/60 p-2 transition-colors hover:border-gray-1 hover:bg-gray-1/10"
          >
            <Icon
              icon="github"
              className="size-8 fill-gray-1/60 transition-colors group-hover:fill-gray-1"
            />
          </a>

          <button
            type="button"
            onClick={() => toogleModal()}
            className="group flex items-center justify-center rounded-md border-1 border-gray-4/60 p-2 transition-colors hover:border-gray-1 hover:bg-gray-1/10"
          >
            <Icon
              icon="help"
              className="size-8 fill-gray-1/60 transition-colors group-hover:fill-gray-1"
            />
          </button>
        </div>
      </header>

      <section className="flex w-full items-center justify-between border-y-1 border-gray-4/20 bg-dark-default px-8 py-4">
        <Form onSubmit={handleSubmit(formSubmit)}>
          <Upload
            name="file"
            files={files}
            onChangeFiles={(value: IFileDTO[]) => handleFiles(value)}
          />
          <FormInput
            name="filter"
            iconRight="search"
            control={control}
            autoComplete="off"
            disabled={text.length === 0}
          />
          <button type="submit" className="hidden" />
        </Form>
      </section>

      <main className="flex h-[calc(100vh-12rem)] w-full flex-row items-center justify-center bg-dark-default p-4">
        {loadingFile ? (
          <div className="flex size-full items-center justify-center overflow-y-auto overflow-x-hidden rounded-l-md bg-dark-1 px-8 py-4 text-justify text-white">
            <Loading />
          </div>
        ) : (
          <div
            className="size-full overflow-y-auto overflow-x-hidden rounded-l-md bg-dark-1 px-8 py-4 text-justify text-white"
            dangerouslySetInnerHTML={{ __html: textMark }}
          />
        )}

        {files.length > 0 && text.length > 0 ? (
          <div className="flex h-full w-[22rem] flex-col items-start justify-start gap-4 overflow-y-auto rounded-r-md bg-dark-2 p-4 text-4 text-white">
            <div>
              <p>
                <strong>Nome do Arquivo:</strong>
              </p>
              <p>{files[0].name}</p>
            </div>

            <div>
              <p>
                <strong>Quantidade de caracteres:</strong>
              </p>
              <p>{numberWithCommas(String(text.length))}</p>
            </div>

            {algoritms.length > 0 ? (
              <>
                {algoritms.map((algoritm) => (
                  <div
                    key={algoritm.id}
                    className="flex w-full flex-col gap-4 border-t-1 border-gray-1 py-4"
                  >
                    <p className="w-full text-center text-4">
                      <strong>{algoritm.name}</strong>
                    </p>

                    {loadingSearch ? (
                      <Loading />
                    ) : (
                      <>
                        <div className="flex w-full items-center justify-between gap-4">
                          <div
                            data-tooltip-id="algoritm-mark"
                            data-tooltip-content="Padrões encontrados!"
                            data-tooltip-place="left"
                            className="flex flex-1 flex-row items-center justify-start gap-4"
                          >
                            <Icon icon="mark" className="size-6 fill-gray-1" />
                            <p>
                              {numberWithCommas(
                                String(algoritm.indexes.length),
                              )}
                            </p>
                          </div>

                          <div
                            data-tooltip-id="algoritm-count"
                            data-tooltip-content="Contagem de operações!"
                            data-tooltip-place="left"
                            className="flex flex-1 flex-row items-center justify-start gap-4"
                          >
                            <Icon icon="count" className="size-6 fill-gray-1" />
                            <p>{numberWithCommas(String(algoritm.count))}</p>
                          </div>
                        </div>

                        <div className="flex w-full items-center justify-between gap-4">
                          <div
                            data-tooltip-id="algoritm-clock"
                            data-tooltip-content="Tempo de execução!"
                            data-tooltip-place="left"
                            className="flex flex-1 flex-row items-center justify-start gap-4"
                          >
                            <Icon icon="clock" className="size-6 fill-gray-1" />
                            <p>{algoritm.time}ms</p>
                          </div>

                          <div
                            data-tooltip-id="algoritm-memory"
                            data-tooltip-content="Espaço armazenado!"
                            data-tooltip-place="left"
                            className="flex flex-1 flex-row items-center justify-start gap-4"
                          >
                            <Icon
                              icon="memory"
                              className="size-6 fill-gray-1"
                            />
                            <p>{algoritm.memory}</p>
                          </div>
                        </div>
                      </>
                    )}
                    <Tooltip
                      id="algoritm-mark"
                      opacity={1}
                      style={{
                        backgroundColor: "#3A2A58",
                        color: "#f1f3f5",
                      }}
                    />
                    <Tooltip
                      id="algoritm-count"
                      opacity={1}
                      style={{
                        backgroundColor: "#3A2A58",
                        color: "#f1f3f5",
                      }}
                    />
                    <Tooltip
                      id="algoritm-clock"
                      opacity={1}
                      style={{
                        backgroundColor: "#3A2A58",
                        color: "#f1f3f5",
                      }}
                    />
                    <Tooltip
                      id="algoritm-memory"
                      opacity={1}
                      style={{
                        backgroundColor: "#3A2A58",
                        color: "#f1f3f5",
                      }}
                    />
                  </div>
                ))}
              </>
            ) : null}
          </div>
        ) : null}
      </main>

      <Modal open={modal} onClose={() => toogleModal()}>
        <header className="z-modal flex w-full items-center justify-center">
          <p className="text-8 font-bold text-gray-1">Integrantes</p>
        </header>

        <main className="mt-4 flex h-full flex-1 flex-col items-center justify-center gap-4 overflow-y-auto p-8">
          {members.map((member) => (
            <div
              className="flex w-full items-center justify-start gap-8 rounded-md border-1 border-gray-1 p-4 shadow-xl phone:flex-col"
              key={member.id}
            >
              <img
                src={member.image}
                alt={`Imagem de ${member.name}`}
                className="size-32 rounded-circle"
              />

              <div className="flex flex-col items-start justify-between gap-2">
                <p className="p-2 text-5 font-bold text-gray-1">
                  {member.name}
                </p>

                <button className="flex flex-row items-center justify-center gap-4 rounded-md p-2 transition-colors hover:bg-gray-4/20">
                  <Icon icon="email" className="size-4 fill-gray-1" />
                  <p className="text-5 font-light text-gray-1">
                    {member.email}
                  </p>
                </button>

                <a
                  href={member.githubUrl}
                  target="_blank"
                  className="flex w-full flex-row items-center justify-start gap-4 rounded-md p-2 transition-colors hover:bg-gray-4/20"
                >
                  <Icon icon="github" className="size-4 fill-gray-1" />
                  <p className="text-5 font-light text-gray-1">
                    {member.github}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </main>
      </Modal>
    </div>
  );
}
