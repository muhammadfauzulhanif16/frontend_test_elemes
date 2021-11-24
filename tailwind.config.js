module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        3.875: "3.875rem",
      },
      borderRadius: {
        1.25: "1.25rem",
      },
      width: {
        2.25: "2.25rem",
      },
      height: {
        1.1875: "1.1875rem",
      },
      backgroundColor: {
        "lime-8bac3e": "#8bac3e",
        "white-f2f2f2": "#f2f2f2",
        "red-e7462d": "#e7462d",
        "aqua-40a2b1": "#40a2b1",
        "blue-405eb6": "#405eb6",
        "pink-b23f74": "#b23f74",
        "lime-a4b441": "#a4b441",
        "gray-757575": "#757575",
        "indigo-353656": "#353656",
        "orange-ff8412": "#ff8412",
        "light-gray-c4c4c4": "#c4c4c4",
        "light-gray-c9c9c9": "#c9c9c9",
        "white-f0feeb": "#f0feeb",
        "aqua-e6f3f5": "#e6f3f5",
        "white-eaeefa": "#eaeefa",
        "white-f9eef3": "#f9eef3",
        "lime-f3f7d9": "#f3f7d9",
        "white-f9fff6": "#f9fff6",
      },
      textColor: {
        "lime-8bac3e": "#8bac3e",
        "white-f2f2f2": "#f2f2f2",
        "red-e7462d": "#e7462d",
        "aqua-40a2b1": "#40a2b1",
        "blue-405eb6": "#405eb6",
        "pink-b23f74": "#b23f74",
        "lime-a4b441": "#a4b441",
        "gray-757575": "#757575",
        "indigo-353656": "#353656",
        "orange-ff8412": "#ff8412",
        "light-gray-c4c4c4": "#c4c4c4",
        "light-gray-c9c9c9": "#c9c9c9",
        "white-f0feeb": "#f0feeb",
        "aqua-e6f3f5": "#e6f3f5",
        "white-eaeefa": "#eaeefa",
        "white-f9eef3": "#f9eef3",
        "lime-f3f7d9": "#f3f7d9",
        "white-f9fff6": "#f9fff6",
      },
    },
  },
  variants: {
    extend: {
      height: ["hover"],
    },
  },
  plugins: [],
};
