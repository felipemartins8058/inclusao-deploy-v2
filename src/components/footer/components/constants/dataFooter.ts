import LogoSide from '../../../../assets/images/logoside.svg'


type DataProps = {
  id: string;
  ariaLabel?: string;
  img: string;
  alt: string;

}

export const dataFooter: DataProps[] = [
  {
    id: 'logo1',
    img: LogoSide.src,
    alt: 'Logo image',
  },
  {
    id: 'logo2',
    img: LogoSide.src,
    alt: 'Logo image',
  },
  {
    id: 'logo3',
    img: LogoSide.src,
    alt: 'Logo image',
  },
  {
    id: 'logo4',
    img: LogoSide.src,
    alt: 'Logo image',
  },
]