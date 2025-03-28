import { InputField } from './components/InputField'
import './styles/global.css'

function App() {

  return (
    <div className='p-2 bg-grey m-2 rounded-2xl mx-7'> 
      <InputField id='test' label='test' type='text' defaultValue={2}/>
      <InputField id='test1' label='test1' type='number' defaultValue={2}/>
      <InputField id='test2' label='test2' type='select' defaultValue={2} options={[1,2,3,4,5]}/>
    </div>
  )
}

export default App
