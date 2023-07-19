export default {
  data() {
    return {
      finalSlide: {
        title: "FINAL",
        bkgd: "FFFFFF",
        objects: [
          {
            rect: { x: 5.5, y: 0, w: 4.5, h: 5.63, fill: { color: "003895" } },
          },
          {
            text: {
              text: "CONTACT",
              options: {
                x: 0.3,
                y: 2.2,
                w: 2,
                h: 0.35,
                fontFace: "Calibri",
                fontSize: 14,
                color: "003895",
                valign: "top",
                bold: true,
              },
            },
          },
          {
            image: {
              x: 6.78,
              y: 4.35,
              w: 1.94,
              h: 0.86,
              path: "../img/logo.png",
            },
          },
        ],
      },
      dataStart: {
        title: "FIRST_SLIDE",
        bkgd: "FFFFFF",
        objects: [
          {
            image: { x: 7.35, y: 0.35, w: 2.25, h: 1, path: "../img/logo.png" },
          },
          { image: { x: 0, y: 5.2, w: 3.5, h: 0.17, path: "../img/line.png" } },
        ],
      },
    };
  },
};
