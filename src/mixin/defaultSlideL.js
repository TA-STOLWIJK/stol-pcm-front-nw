export default {
  data() {
    return {
      dataScanL: {
        title: "L_SLIDE",
        bkgd: "FFFFFF",
        objects: [
          {
            text: {
              text: "Familiestatuut AGRO",
              options: {
                x: 0.6,
                y: 5.23,
                w: 6.5,
                h: 0.33,
                fontFace: "Calibri",
                fontSize: 6.8,
                charSpacing: 10,
                color: "9D968D",
                valign: "top",
              },
            },
          },
          { image: { x: 0, y: 5.1, w: 3.5, h: 0.17, path: "../img/line.png" } },
          {
            image: {
              x: 8.9,
              y: 5.1,
              w: 0.88,
              h: 0.39,
              path: "../img/logo.png",
            },
          },
        ],
        slideNumber: {
          x: 0.42,
          y: 5.23,
          fontFace: "Calibri",
          fontSize: 6.8,
          color: "9D968D",
        },
      },
      dataScanL_Photo: {
        title: "L_SLIDE_Photo",
        bkgd: "FFFFFF",
        objects: [
          {
            text: {
              text: "Familiestatuut AGRO",
              options: {
                x: 0.6,
                y: 5.23,
                w: 6.5,
                h: 0.33,
                fontFace: "Calibri",
                fontSize: 6.8,
                charSpacing: 10,
                color: "9D968D",
                valign: "top",
              },
            },
          },
          { image: { x: 0, y: 5.1, w: 3.5, h: 0.17, path: "../img/line.png" } },
          {
            image: {
              x: 8.9,
              y: 5.1,
              w: 0.88,
              h: 0.39,
              path: "../img/logo.png",
            },
          },
          {
            placeholder: {
              options: {
                name: "Photo",
                type: "image",
                x: 6.47,
                y: 0.46,
                w: 3.53,
                h: 4.41,
              },
            },
          },
        ],
        slideNumber: {
          x: 0.42,
          y: 5.23,
          fontFace: "Calibri",
          fontSize: 6.8,
          color: "9D968D",
        },
      },
    };
  },
};
