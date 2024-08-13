export const getTabValueFromUrl = (url: string) => {
  switch (url) {
    case "/":
      return "0";
    case "/create-preview":
      return "1";
    case "/login":
      return "2";
    case "/sign-up":
      return "3";
    default:
      return "0";
  }
};
