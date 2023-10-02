export default {
  data() {
    return {
      finalSlide: {
        title: "FINAL",
        background: "FFFFFF",
        objects: [
          {
            rect: { x: 5.5, y: 0, w: 4.5, h: 5.63, fill: { color: "595959" } },
          },
          {
            text: {
              text: "CONTACT",
              options: {
                x: 0.3,
                y: 2.2,
                w: 2,
                h: 0.35,
                fontFace: "Trebuchet MS",
                fontSize: 14,
                color: "C00000",
                valign: "top",
                bold: true,
              },
            },
          },
          {
            image: {
              x: 6.16,
              y: 4.54,
              w: 3.18,
              h: 0.57,
              path: "../img/logo_stol2.png",
            },
          },
        ],
      },
      dataStart: {
        title: "FIRST_SLIDE",
        background: { path: "../img/stol_back.jpg" },
        objects: [
          {
            rect: {
              x: 0,
              y: 5.53,
              w: 10,
              h: 0.19,
              fill: { color: "C00000" },
            },
          },
          {
            rect: {
              x: 5,
              y: 0.5,
              w: 5,
              h: 0.8,
              fill: { color: "C00000" },
            },
          },
          {
            image: {
              x: 6.82,
              y: 4.99,
              w: 3.18,
              h: 0.57,
              path: "../img/logo_stol2.png",
            },
          },
        ],
      },
    };
  },
};
