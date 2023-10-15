'use client'
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src="/animation_lns1srbh.lottie"
      autoplay
      loop></DotLottiePlayer>
  );
};

export default LottieAnimation