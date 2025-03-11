import { Title } from "@/components/Title"
import { NavLink } from "@/components/NavLink"
import { ButtonComponent } from "@/components/Button"
import { Loader } from "@/components/Loader"
import { SearchInput } from "@/components/SearchInput"
const CreateEmployee: React.FC = () => {
  return (
    <>
      <Title text='HRNet' level={1} className='text-amber-500' />
      <NavLink to='/current-employees' label='Current Employees' />
      <Title text='Create Employee' level={2} className='text-pink-500' />
      <ButtonComponent text='Clique ici' type='dashed' />
      <div className='flex justify-center  '>
        <Loader />
      </div>
      <div>
        <SearchInput />
      </div>
    </>
  )
}
export default CreateEmployee
