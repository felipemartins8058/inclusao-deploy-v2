'use client'
import {
  DivExp,
  DivInsideExperience,
  DivInsideExperienceUsers,
  UserImg,
  UserSection,
} from './experienceStyles'
import Title from '../Title'
import { EditButton } from '../Button'
import Theme from '@/utils/useThemeProvider'
import * as F from '../../styles/Fonts'
import { dataExperience } from './components/constants/dataExperience'
import React from 'react'

export function Experience() {

  // const UsersData = React.useCallback(() => {
  //   return dataExperience.map(field => {
  //     return (
  //       <UserSection aria-label={field.ariaLabel}>
  //           <UserImg src={field.img} alt={field.alt} />
  //           <F.H6>{field.name}</F.H6>
  //       </UserSection>
  //     )
  //   })
  // })


  return (
    <DivExp aria-label='seção: quem já aplicou o selo da inclusão'>
      <DivInsideExperience>
        {/* <EditButton handleOnClick={() => {}} label='Editar' /> */}
        <Title title='Quem já aplicou?' color={Theme().color_background_purple} />
        <F.Text className="experience" >
        Desafie o status quo da educação: Use nossa ferramenta e transforme sua escola em um farol de inclusão e equidade.
        </F.Text>
        <DivInsideExperienceUsers aria-label='grade de logotipos'>
          {/* {UsersData()} */}
        </DivInsideExperienceUsers>
      </DivInsideExperience>
    </DivExp>
  )
}
