
import Button from '../components/Button';
import Hero from '../assets/images/illustration-devices.svg';
import Navbar from '../nav/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <main  className='overflow-x-hidden relative lg:top-14 nt:top-17  dt:top-45 xl:top-30 z-1'>
        <section className='flex flex-col xl:flex-row-reverse items-center justify-between p-2.5 md:px-12
         m-2:p-4  lg:p-2 lg:mb-15 xl:mb-0 ' >
            <figure className=' w-100 xl:w-250 xl:w-min-200 mb-22 xl:mb-0 relative
             right-[-5em] lg:right-0  xl:right-[-15.8em]'>
                <img src={Hero} alt='' />
            </figure>
            <div className='relative lg:left-15 xl:left-[5em] self-start'>
                <h1 className='tracking-[2px] lg:tracking-[4px] text-gray-500 font-normal uppercase mb-2 font-barlow  '>
                   <span className='mr-2 font-bold text-white tracking-[1px]  text-[.7em] bg-black rounded-2xl p-2'>
                    New</span>
  Monograph Dashboard</h1>
                <h2 className='text-[#242942ff] w-100 nt:w-150 font-barlow  text-[2em] xl:text-[2.9em] mb-2.5 font-bold dt:my-4 uppercase my-2'>
                  Powerful insights <br className='hidden lg:flex' /> into your team</h2>
                <p className='  xl:w-[77%] text-gray-400 xl:text-[1.2em] mb-2.5 font-barlow-int'> Project planning and time tracking <br className='hidden lg:flex' /> for agile teams</p>
                 <div className='flex flex-row gap-2 mt-6 xl:mt-10'>
                     <Button text='Schedule a demo' style='btn font-bold font-barlow-int bg-[#ff5c5cff] border-none 
                     text-[#eef3f6ff]' />
                <Button text='to see a live preview' style='btn font-normal font-barlow-int
                uppercase font-normal bg-transparent shadow-none border-none text-gray-500' />
                 </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Home