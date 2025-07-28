'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Discover Konkan's Natural Beauty
              <br />
              Through Sustainable Adventures <br />
              Scroll to explore! 👇
            </h1>
          </section>
        </div>

        <section className='text-white   w-full bg-slate-950  '>
          <div className='grid grid-cols-12 gap-2'>
            <div className='grid gap-2 col-span-4'>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop'
                  alt='Mountain landscape'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop'
                  alt='Forest canopy'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className=' w-full'>
                <img
                  src='https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&auto=format&fit=crop'
                  alt='Beach sunset'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&auto=format&fit=crop'
                  alt='Waterfall'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop'
                  alt='Mountain trail'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3'>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop'
                  alt='Scenic mountain view'
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop'
                  alt='Adventure hiking'
                  className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full h-full '>
                <img
                  src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop'
                  alt='Nature exploration'
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
            <div className='grid gap-2 col-span-4'>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&auto=format&fit=crop'
                  alt='Coastal beauty'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&auto=format&fit=crop'
                  alt='Waterfall adventure'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop'
                  alt='Mountain vista'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop'
                  alt='Hiking trail'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
              <figure className='w-full'>
                <img
                  src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop'
                  alt='Forest adventure'
                  className='transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md '
                />
              </figure>
            </div>
          </div>
        </section>

        <footer className='group bg-slate-950 '>
          <h1 className='text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            konkan adventures
          </h1>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component; 