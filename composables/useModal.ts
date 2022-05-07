
export default function () {

  const modal = useState('modal', () => false)
  
  const modalAction = () => modal.value = !modal.value

  return { modal, modalAction }
}
