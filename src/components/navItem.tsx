
type NavItemProp = {
    text: string ,
    key: number | string
}

const NavItem = ({text, key}:NavItemProp ) => {
  return (
    <li key={key} className="cursor-pointer font-semibold ">{text}</li>
  )
}

export default NavItem