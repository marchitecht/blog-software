import Link from 'next-intl/link'

const ProjectPreview = ({
  name = 'The Project',
  description = 'This is a description of this project.',
  imageUrl,
  bgColor,
  children,
  link,
}) => {
  return (
    <Link href={link}>
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
    </Link>
  )
}

export default ProjectPreview
