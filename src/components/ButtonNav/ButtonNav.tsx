

const ButtonNav = ({ClassButton,TitleButton}:{ClassButton:string,TitleButton:string}) => {
  return (
    <button className={ClassButton}>{TitleButton}</button>
  )
}

export default ButtonNav
