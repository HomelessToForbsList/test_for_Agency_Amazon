
import { Button, Image} from 'react-bootstrap';

type ThButtonProps = {
  name: string;
  active: boolean;
  onClick: () => void
}

const ThButton = ({name, active,onClick}: ThButtonProps) => {
  return (
    <Button variant={active ? 'secondary' :'dark'} className='py-2 fw-bold' onClick={onClick} >
      {name}
      <Image src='/icon-sort.png' className='ms-2' height={18} width={18}/>
    </Button>
  )
}

export default ThButton