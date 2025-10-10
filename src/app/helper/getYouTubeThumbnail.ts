export const getYouTubeThumbnail = (url: string): string => {
    if (!url) return "/images/placeholder.png";
  
    try {
      const videoId =
        url.split("v=")[1]?.split("&")[0] ||
        url.split("youtu.be/")[1]?.split("?")[0];
      return videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : "/images/placeholder.png";
    } catch (error) {
      console.error("Error extracting YouTube thumbnail:", error);
      return "/images/placeholder.png";
    }
  };
  