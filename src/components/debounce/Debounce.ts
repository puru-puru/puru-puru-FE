export const debounce = (callback, duration) => {
    let timer; 
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), duration)
    };
  };