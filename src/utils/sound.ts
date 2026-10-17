import clickSound from "../assets/sounds/click.mp3";

const createSound = (src: string, volume = 1) => {
  const audio = new Audio(src);
  audio.volume = volume;

  return () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };
};

export const sounds = {
  click: createSound(clickSound, 0.2),
};
