const PRIMARY = {
    lighter: "#C8FACD",
    light: "#5BE584",
    main: "#02AA55",
    dark: "#058744",
    darker: "#046d37",
    contrastText: "#fff",
  };
  const SECONDARY = {
    lighter: "#D6E4FF",
    light: "#84A9FF",
    main: "#3366FF",
    dark: "#1939B7",
    darker: "#091A7A",
    contrastText: "#fff",
  };
  const INFO = {
    lighter: "#D0F2FF",
    light: "#74CAFF",
    main: "#1890FF",
    dark: "#0C53B7",
    darker: "#04297A",
    contrastText: "#fff",
  };
  const SUCCESS = {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#54D62C",
    dark: "#229A16",
    darker: "#08660D",
  };
  const WARNING = {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FFC107",
    dark: "#B78103",
    darker: "#7A4F01",
  };
  const ERROR = {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E",
    contrastText: "#fff",
  };
  
  const colors = {
    common: { black: "#000", white: "#fff", light: "#707070" },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
  };
  
  export default colors;
  