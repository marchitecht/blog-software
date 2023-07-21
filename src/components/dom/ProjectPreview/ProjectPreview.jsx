import { DPLogo } from '../icons/DPLogo'

const ProjectPreview = ({
  name = 'The Project',
  description = 'This is a description of this project.',
  imageUrl = '/svg/DpLogo.svg',
  bgColor = 'bg-gradient-to-r from-green-900 from-10% via-indigo-900 via-80%',
}) => {
  return (
    <div className={`h-[20rem] rounded-3xl overflow-hidden ${bgColor}`}>
      <div
        className='h-full w-full px-10 py-12  bg-center bg-no-repeat duration-[600ms] transition-all ease-in-out hover:scale-95 '
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className='flex justify-between '>
          <div className=''>
            <h2 className='font-medium text-lg text-white mb-40'>{name}</h2>
            <p className='text-white text-sm '>{description}</p>
          </div>
          {/* <div className='h-7 w-9 bg-white rounded-full flex justify-center items-center cursor-pointer'>
            <div className='rounded-full h-2 w-2 bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-50%' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview
