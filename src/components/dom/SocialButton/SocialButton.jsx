import { ReactNode } from 'react'

const SocialButton = ({ children, bgColor }) => {
  let bgHoverColorClass
  switch (bgColor) {
    case 'linkedin':
      bgHoverColorClass = 'hover:bg-linkedin'

      break
    case 'instagram':
      bgHoverColorClass = 'hover:bg-instagram'

      break
    case 'twitter':
      bgHoverColorClass = 'hover:bg-twitter'

      break

    default:
      bgHoverColorClass = 'hover:bg-black'

      break
  }

  return (
    <a
      href='https://www.linkedin.com/in/marat-musin-528552221/'
      className={`h-9 w-9 bg-green-800 ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center `}
    >
      <div className='fill-white group-hover:fill-white transition-colors duration-200 ease-in-out '>
        {/* 0_35px_35px_rgba(0,0,0,0.25) */}
        {children}
      </div>
    </a>
  )
}

export default SocialButton
