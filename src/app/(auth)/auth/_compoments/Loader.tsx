import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export const Loader = () => {
  return (
    <DotLottieReact
      src="/loading.json"
      loop
      autoplay
      style={{ width: 400, height: 400 }}
    ></DotLottieReact>
  );
};
