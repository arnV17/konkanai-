'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
  useMemo,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        setShowContent(newProgress >= 1);
        if (newProgress >= 1) setMediaFullyExpanded(true);
        else if (newProgress < 0.75) setShowContent(false);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        setShowContent(newProgress >= 1);
        if (newProgress >= 1) setMediaFullyExpanded(true);
        else if (newProgress < 0.75) setShowContent(false);
        setTouchStartY(e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);
    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const mediaWidth = useMemo(() => {
    return mediaFullyExpanded ? window.innerWidth : 300 + scrollProgress * (isMobile ? 650 : 1250);
  }, [scrollProgress, isMobile, mediaFullyExpanded]);

  const mediaHeight = useMemo(() => {
    return mediaFullyExpanded ? window.innerHeight : 400 + scrollProgress * (isMobile ? 200 : 400);
  }, [scrollProgress, isMobile, mediaFullyExpanded]);

  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="fixed inset-0 -z-10">
          <img
            src={bgImageSrc}
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
          <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
            {/* MEDIA */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                mediaFullyExpanded ? 'rounded-none' : 'rounded-2xl'
              }`}
              style={{
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
                maxWidth: mediaFullyExpanded ? '100vw' : '95vw',
                maxHeight: mediaFullyExpanded ? '100vh' : '85vh',
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
              }}
            >
              {mediaType === 'video' ? (
                mediaSrc.includes('youtube.com') ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={
                      mediaSrc.includes('embed')
                        ? mediaSrc +
                          (mediaSrc.includes('?') ? '&' : '?') +
                          'autoplay=1&mute=1&loop=1&controls=0&rel=0&playlist=' +
                          mediaSrc.split('v=')[1]
                        : mediaSrc.replace('watch?v=', 'embed/') +
                          '?autoplay=1&mute=1&loop=1&controls=0&rel=0&playlist=' +
                          mediaSrc.split('v=')[1]
                    }
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover rounded-xl"
                  />
                )
              ) : (
                <img
                  src={mediaSrc}
                  alt={title || 'Media'}
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>

            {/* TEXT */}
            <div className="flex flex-col items-center text-center relative z-10 mt-4">
              {date && (
                <p
                  className="text-2xl text-blue-200"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {date}
                </p>
              )}
              {scrollToExpand && (
                <p
                  className="text-blue-200 font-medium text-center"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {scrollToExpand}
                </p>
              )}
            </div>

            <div
              className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col ${
                textBlend ? 'mix-blend-difference' : ''
              }`}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200"
                style={{ transform: `translateX(-${textTranslateX}vw)` }}
              >
                {firstWord}
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-200"
                style={{ transform: `translateX(${textTranslateX}vw)` }}
              >
                {restOfTitle}
              </motion.h2>
            </div>
          </div>

          {/* CHILDREN CONTENT */}
          {showContent && <div className="mt-12">{children}</div>}
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
