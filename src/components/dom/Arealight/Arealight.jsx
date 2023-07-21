import cls from './Arealight.module.scss'

export default function Arealight() {
  return (
    <section>
      <div className='mx-auto grid mt-20'>
        <h2 className='text-3xl text-center text-white'>Мое портфолио</h2>
        {/* <span className='text-white text-center mt-20 text-xl'>Ниже приведены проекты, которые я создавал с нуля вместе с командой. </span> */}
      </div>
      <div className={`${cls['arealight']} drop-shadow-[0_0_50px_rgb(0,114,255)] mt-12`}></div>
    </section>
  )
}
