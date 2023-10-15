'use client'
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
      <DotLottiePlayer 
        src="/animation_ln1u9eax.lottie" 
        autoplay 
        loop
      >
      </DotLottiePlayer>
  );
};

export default LottieAnimation