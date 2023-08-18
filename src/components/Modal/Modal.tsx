import React, { useState, ChangeEvent } from "react";
import Modal from "react-modal";
import Caneta from "../../assets/ModeEdit.svg";
import CanetaWhite from "../../assets/CanetaEdit.svg";
import Close from "../../assets/CloseBlack.svg";
import SimboloImg from "../../assets/SimboloImg.svg";
import Lixeira from "../../assets/Lixeira.svg";
import Vzinho from "../../assets/Vzinho.svg";
import {
    FormModal,
    Container,
    ContainerImage,
    ContainerImage2,
    Button,
    ButtonCancel,
    Button3,
    ModalContent,
    SectionContent,
    SectionContent2,
    SectionContent3,
    SectionContent4,
    TitleInput,
    H4,
    H6,
    TextModal,
    DivImagem,
    DivImg,
    DivButton,
    ImageUploadInput,
    ImageUploadLabel,
    UploadedImage,
    RemoveImageButton,
    TextButton,
    TextDivImg,
    ImagemEnfeite,
    ButtonSave,
    TextButtonSave,
    TextError,
} from "./ModalStyles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type } from "os";

const createCardFormSchema = z.object({
    titulo: z
        .string()
        .nonempty("o Título é obrigatório")
        .transform((titulo) => {
            const words = titulo.trim().split(" ");
            const firstWord = words.length > 0 ? words[0] : "";
            const firstWordFormatted =
                firstWord[0].toLocaleUpperCase() + firstWord.substring(1);
            const otherWords = words.length > 1 ? words.slice(1).join(" ") : "";
            return firstWordFormatted + (otherWords ? " " + otherWords : "");
        }),
    imagem: z.instanceof(FileList),
    //.transform(list => list.item(0))
    //refine(file => file?.size <= 5 * 1024 * 1024, 'O arquivo precisa no máximo ter 5megabytes')
    altImage: z.string().nonempty("o Alt da imagem é obrigatório"),
    resumo: z.string().min(20, "o Resumo precisar ter no mínimo 16 caracteres"),
    corpoTexto: z
        .string()
        .min(30, "o texto precisar ter no mínimo 30 caracteres"),
});

type CreateCardFormData = z.infer<typeof createCardFormSchema>;

interface ModalCardProps {
    modalIsOpen: boolean;
    closeModal: any;
}

// Estilos do modal
const customStyles: Modal.Styles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
    },
    content: {
        inset: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "44rem",
        width: "100%",
        padding: "1.25rem",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        height: "70vh",
    },
};

// Componente do modal
export function ModalCard({ modalIsOpen, closeModal }: ModalCardProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isImageSelected, setImageSelected] = useState(false);
    const [imageName, setImageName] = useState("");

    const [titulo, setTitulo] = useState("");
    const [image, setImage] = useState([]);
    const [altImg, setAltImg] = useState("");
    const [resumeText, setResumeText] = useState("");
    const [fullText, setFullText] = useState("");

    function submitForm(e: { preventDefault: () => void }) {
        e.preventDefault();

        const request = {
            titulo: titulo,
            resumo_texto: resumeText,
            corpo_texto: fullText,
            imagem: [
                {
                    path: "http://localhost:8080/assets/images/image6.png",
                    alt: altImg,
                },
            ],
            botao: { tipo: "", texto: "" },
            secao: "",
            layout: "CARD",
            pin: "true",
        };

        console.log(request)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateCardFormData>({
        resolver: zodResolver(createCardFormSchema),
    });

    //console.log(errors);

    function createCard(data: any) {
        console.log(data);
    }

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target && e.target.result) {
                setSelectedImage(e.target.result as string);
                setImageSelected(true);
                setImageName(file.name);
            }
        };

        reader.readAsDataURL(file);
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setImageSelected(false); // Image is removed, set the state to false
    };

    return (
        <FormModal onSubmit={handleSubmit(createCard)}>
            <Container>
                {/* <Button onClick={openModal}>
          <ContainerImage src={CanetaWhite.src} alt="Caneta Desenhada" />
        </Button> */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Edit Image"
                >
                    <ModalContent>
                        <SectionContent>
                            <SectionContent2>
                                <ContainerImage
                                    src={Caneta.src}
                                    alt="Caneta Desenhada"
                                />
                                <H4>Editar Card</H4>
                            </SectionContent2>
                            <Button3 onClick={closeModal}>
                                <ContainerImage2
                                    src={Close.src}
                                    alt="Botão Fechar"
                                />
                            </Button3>
                        </SectionContent>
                        <TextModal>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam pulvinar felis id hendrerit congue.
                            Morbi sollicitudin pulvinar enim id condimentum.{" "}
                        </TextModal>
                        <SectionContent3>
                            <H6>TÍTULO: </H6>
                            <TitleInput
                                type="text"
                                required
                                {...register("titulo")}
                                onChange={(event) =>
                                    setTitulo(event.target.value)
                                }
                                value={titulo}
                                placeholder="Digite o título aqui"
                            />
                            {errors.titulo && (
                                <TextError>{errors.titulo.message}</TextError>
                            )}
                        </SectionContent3>
                        <SectionContent3>
                            <H6>IMAGEM: </H6>
                            <DivImagem>
                                <DivImg>
                                    {selectedImage && (
                                        <>
                                            <UploadedImage
                                                src={selectedImage}
                                                alt="Imagem Carregada"
                                            />
                                        </>
                                    )}
                                    {!selectedImage && (
                                        <TextDivImg>
                                            Nenhuma imagem selecionada
                                        </TextDivImg>
                                    )}
                                </DivImg>
                                <DivButton>
                                    <ImageUploadInput
                                        type="file"
                                        required
                                        {...register("imagem")}
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                    {selectedImage && (
                                        <>
                                            <ImagemEnfeite
                                                src={SimboloImg.src}
                                            />
                                            <TextDivImg>{imageName}</TextDivImg>
                                            <RemoveImageButton
                                                onClick={handleRemoveImage}
                                            >
                                                <TextButton className="negrito">
                                                    Remover arquivo
                                                </TextButton>
                                                <ImagemEnfeite
                                                    src={Lixeira.src}
                                                />
                                            </RemoveImageButton>
                                        </>
                                    )}
                                    {!selectedImage && (
                                        <>
                                            <ImagemEnfeite
                                                src={SimboloImg.src}
                                            />
                                            <ImageUploadLabel htmlFor="image">
                                                Adicionar nova imagem
                                            </ImageUploadLabel>
                                        </>
                                    )}
                                </DivButton>
                            </DivImagem>
                        </SectionContent3>
                        <SectionContent3>
                            <H6>ALT DA IMAGEM: </H6>
                            <TitleInput
                                type="text"
                                {...register("altImage")}
                                required
                                onChange={(event) =>
                                    setAltImg(event.target.value)
                                }
                                value={altImg}
                                placeholder="Digite o alt da imagem"
                            />
                            {errors.altImage && (
                                <TextError>{errors.altImage.message}</TextError>
                            )}
                        </SectionContent3>
                        <SectionContent3>
                            <H6>RESUMO DO TEXTO: </H6>
                            <TitleInput
                                type="text"
                                {...register("resumo")}
                                required
                                onChange={(event) =>
                                    setResumeText(event.target.value)
                                }
                                value={resumeText}
                                placeholder="Digite o resumo do texto da publicação"
                            />
                            {errors.resumo && (
                                <TextError>{errors.resumo.message}</TextError>
                            )}
                        </SectionContent3>
                        <SectionContent3>
                            <H6>CORPO DO TEXTO: </H6>
                            <TitleInput
                                type="text"
                                {...register("corpoTexto")}
                                required
                                onChange={(event) =>
                                    setFullText(event.target.value)
                                }
                                value={fullText}
                                placeholder="Digite aqui o texto da publicação"
                            />
                            {errors.corpoTexto && (
                                <TextError>
                                    {errors.corpoTexto.message}
                                </TextError>
                            )}
                        </SectionContent3>
                        <SectionContent4>
                            <ButtonCancel onClick={closeModal}>
                                <TextButton>Cancelar</TextButton>
                            </ButtonCancel>
                            <ButtonSave
                                type="submit"
                                className={`saveClosed ${
                                    selectedImage ? "saveOpen" : ""
                                }`}
                                onClick={submitForm}
                            >
                                <TextButtonSave>
                                    Salvar alterações
                                </TextButtonSave>{" "}
                                <ImagemEnfeite src={Vzinho.src} />{" "}
                            </ButtonSave>
                        </SectionContent4>
                    </ModalContent>
                </Modal>
            </Container>
        </FormModal>
    );
}
