export const convertString = (url) => {
  // youtube link
  if (url.startsWith("https://www.youtube.com/watch")) {
    return url.replace("/watch?v=", "/embed/");
  }
  // instagram link
  if (url.startsWith("https://www.instagram.com")) {
    return url + "embed";
  }
  // tik-tok link
  const start = url.indexOf("@");
  const end = url.indexOf("/video/") + "/video/".length;
  return url.replace(url.substring(start, end), "embed/");
};
