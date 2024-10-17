import {Hourglass} from 'lucide-react'

function Loader(){
  return (
    <div className="flex justify-center items-center">
      <Hourglass 
        visible = "true"
        size = "200"
        color = "#2563EB"
        aria-label='infinity-spin-loading'
      />
    </div>
  )
}

export default Loader;