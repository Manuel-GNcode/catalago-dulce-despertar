interface ButtonProps {
  children: React.ReactNode,
  handleClick: ()=>void,
  classActive?: string;
}

export const Button = ({children, handleClick, classActive}: ButtonProps)=>{
  return (
    <button className={`category-button ${classActive}`} onClick={handleClick}>{children}</button>
  )
}