'use client'
import styled from 'styled-components'

export const FormModal = styled.form`
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 1.5rem;
  margin-left: 4.5rem;
`

export const ContainerImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`

export const ContainerImage2 = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`

export const Button = styled.button`
  font-size: 1rem;
  background-color: #212529;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
`

export const Button3 = styled.button`
  font-size: 1rem;
  background-color: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
`

export const ModalContent = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.5rem;
`

export const SectionContent = styled.section`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`

export const SectionContent2 = styled.section`
  display: flex;
  gap: 0.75rem;
`

export const SectionContent3 = styled.section`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
`

export const SectionContent4 = styled.section`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1rem;
  justify-content: flex-end;
  border-color: #6c757d;
`

export const ButtonCancel = styled.button`
  font-size: 1rem;
  background-color: transparent;
  border: solid 1px;
  width: 7rem;
  height: 2.5rem;
  color: black;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export const ButtonSave = styled.button`
    font-size: 1rem;
    border: none;
    width: 13rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: white;
 
    &:hover {
      opacity: 0.8;
    }
    
    &.saveClosed {
        background-color: #ADB5BD;
        cursor: not-allowed;
    }

    &.saveOpen{
        background-color: #24A148;
        cursor: pointer;
    }

`

export const TitleInput = styled.input`
  width: 36rem;
  padding: 0.6rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const H4 = styled.h4`
  font-size: 1.5rem;
`

export const H6 = styled.h6`
  font-size: 1rem;
`

export const TextModal = styled.p`
  font-size: 1rem;
  color: #6c757d;
`

export const DivImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 12rem;
  border: 1px;
  border-style: ridge;
`

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25rem;
  height: 12rem;
  border: 1px;
  border-style: dashed;
  gap: 1rem;
`

export const ImageUploadInput = styled.input`
  display: none;
`

export const ImageUploadLabel = styled.label`
  background-color: #212529;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`

export const UploadedImage = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  margin-left: 10px;
`

export const RemoveImageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 13.25rem;
  height: 2.5rem;
  object-fit: cover;
  color: #DA1E28;
  background-color: transparent;
  border: 2px;
  border-style: solid;
  border-color: #DA1E28;
  border-radius: 5px;
`

export const TextDivImg = styled.p`
  font-size: 1rem;
  text-align: center;
`

export const TextButton = styled.p`
  font-size: 1rem;
  text-align: center;

  &.negrito{
    font-weight: bold;
  }
`

export const TextButtonSave = styled.p`
    font-size: 1.125rem;
`

export const ImagemEnfeite = styled.img`

`

export const TextError = styled.span`
  font-size: 1.125rem;
  color: #DA1E28;
`