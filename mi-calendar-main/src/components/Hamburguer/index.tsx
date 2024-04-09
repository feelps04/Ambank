import { useStateContext } from '@/context/StateContext'


export const Hamburguer = () => {
  const { menu, setMenu } = useStateContext()

  return (
    <button onClick={() => setMenu(!menu)}>
      <Burguer />
    </button>
  )
}
