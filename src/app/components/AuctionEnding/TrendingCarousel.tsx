// import React, { useRef, useState, useEffect } from 'react';
// import { mySwiperData } from './AuctionEndingData';
// import './auctionEnding.css'
// interface CarouselItem {
//   img: string;
//   name: string;
//   role: string;
// }

// interface InfiniteCarouselProps {
//   mySwiperData: CarouselItem[];
// }

// const InfiniteCarousel: React.FC<InfiniteCarouselProps> = () => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const carouselRef = useRef<HTMLUListElement>(null);
//   const arrowBtns = useRef<HTMLButtonElement[]>([]);
//   const carouselChildren = useRef<HTMLLIElement[]>([]);

//   const [isDragging, setIsDragging] = useState(false);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);
//   const [startX, setStartX] = useState(0);
//   const [startScrollLeft, setStartScrollLeft] = useState(0);
//   const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
//   const [cardPerView, setCardPerView] = useState(0);
//   const [firstCardWidth, setFirstCardWidth] = useState(0);

//   useEffect(() => {
//     // Initialize the refs and state values
//     const carousel = carouselRef.current!;
//     const arrowButtons = arrowBtns.current;
//     const carouselChildNodes = carouselChildren.current;
//     setCardPerView(Math.round(carousel.offsetWidth / firstCardWidth));

//     // Event listener for arrow buttons
//     const handleArrowButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//       const direction = e.currentTarget.id;
//       const increment = direction === 'left' ? -firstCardWidth : firstCardWidth;
//       carousel.scrollLeft += increment;
//     };

//     // Add event listeners for arrow buttons
//     arrowButtons?.forEach((btn) => {
//       btn.addEventListener('click', handleArrowButtonClick);
//     });

//     // Event handler for dragging
//     const dragStart = (e: React.MouseEvent) => {
//       setIsDragging(true);
//       carousel.classList.add('dragging');
//       setStartX(e.pageX);
//       setStartScrollLeft(carousel.scrollLeft);
//     };

//     const dragging = (e: React.MouseEvent) => {
//       if (!isDragging) return;
//       carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
//     };

//     const dragStop = () => {
//       setIsDragging(false);
//       carousel.classList.remove('dragging');
//     };

//     // Event handler for infinite scrolling
//     const infiniteScroll = () => {
//       if (carousel.scrollLeft === 0) {
//         carousel.classList.add('no-transition');
//         carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
//         carousel.classList.remove('no-transition');
//       } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add('no-transition');
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove('no-transition');
//       }
//       clearTimeout(timeoutId!);
//       if (wrapperRef.current && !wrapperRef.current.matches(':hover')) {
//         autoPlay();
//       }
//     };

//     const autoPlay = () => {
//       if (window.innerWidth < 800 || !isAutoPlay) return;
//       setTimeoutId(setTimeout(() => {
//         carousel.scrollLeft += firstCardWidth;
//       }, 2500));
//     };

    
//     autoPlay();

//     // Event listeners for dragging and infinite scrolling
//     carousel.addEventListener('mousedown', dragStart);
//     carousel.addEventListener('mousemove', dragging);
//     document.addEventListener('mouseup', dragStop);
//     carousel.addEventListener('scroll', infiniteScroll);
//     wrapperRef.current?.addEventListener('mouseenter', () => clearTimeout(timeoutId!));
//     wrapperRef.current?.addEventListener('mouseleave', autoPlay);

//     return () => {
//       // Cleanup: remove event listeners
//       arrowButtons?.forEach((btn) => {
//         btn.removeEventListener('click', handleArrowButtonClick);
//       });
//       carousel.removeEventListener('mousedown', dragStart);
//       carousel.removeEventListener('mousemove', dragging);
//       document.removeEventListener('mouseup', dragStop);
//       carousel.removeEventListener('scroll', infiniteScroll);
//       wrapperRef.current?.removeEventListener('mouseenter', () => clearTimeout(timeoutId!));
//       wrapperRef.current?.removeEventListener('mouseleave', autoPlay);
//     };
//   }, [isAutoPlay, firstCardWidth, timeoutId]);

//   useEffect(() => {
//     const firstCard = carouselRef.current?.querySelector('.card');
//     if (firstCard) {
//       setFirstCardWidth(firstCard.offsetWidth ?? null);
//     } else {
//       setFirstCardWidth(null);
//     }
//   }, []);

//   return (
//     <div ref={wrapperRef} className="wrapper">
//       <button id="left" className="fa-solid fa-angle-left" />
//       <ul ref={carouselRef} className="carousel">
//         {mySwiperData.map((item, index) => (
//           <li key={index} className="card">
//             <div className="img">
//               <img src={item.img} alt="img" draggable={false} />
//             </div>
//             <h2>{item.name}</h2>
//             {/* <span>{item.role}</span> */}
//           </li>
//         ))}
//       </ul>
//       <button id="right" className="fa-solid fa-angle-right" />
//     </div>
//   );
// };

// export default InfiniteCarousel;
import React from 'react'

function TrendingCarousel() {
  return (
    <div>TrendingCarousel</div>
  )
}

export default TrendingCarousel