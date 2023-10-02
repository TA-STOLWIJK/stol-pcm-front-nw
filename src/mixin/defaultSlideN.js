export default {
  data() {
    return {
      dataScanN: {
        title: "N_SLIDE",
        bkgd: "FFFFFF",
        objects: [
          {
            text: {
              text: "PERSONAL HOLDING",
              options: {
                x: 0.6,
                y: 5.23,
                w: 6.5,
                h: 0.33,
                fontFace: "Trebuchet MS",
                fontSize: 6.8,
                charSpacing: 10,
                color: "9D968D",
                valign: "top",
              },
            },
          },
          {
            rect: {
              x: 5.84,
              y: 0.49,
              w: 4.16,
              h: 0.67,
              fill: { color: "C00000" },
            },
          },
          {
            rect: {
              x: 0,
              y: 5.53,
              w: 10,
              h: 0.11,
              fill: { color: "C00000" },
            },
          },
          {
            image: {
              x: 6.82,
              y: 4.87,
              w: 3.18,
              h: 0.57,
              path: "../img/logo_stol2.png",
            },
          },
        ],
        slideNumber: {
          x: 0.42,
          y: 5.23,
          fontFace: "Trebuchet MS",
          fontSize: 6.8,
          color: "9D968D",
        },
      },
      dataScanN_Photo: {
        title: "N_SLIDE_Photo",
        bkgd: "FFFFFF",
        objects: [
          {
            text: {
              text: "PERSONAL HOLDING",
              options: {
                x: 0.6,
                y: 5.23,
                w: 6.5,
                h: 0.33,
                fontFace: "Trebuchet MS",
                fontSize: 6.8,
                charSpacing: 10,
                color: "9D968D",
                valign: "top",
              },
            },
          },
          {
            rect: {
              x: 5.84,
              y: 0.49,
              w: 4.16,
              h: 0.67,
              fill: { color: "C00000" },
            },
          },
          {
            rect: {
              x: 0,
              y: 5.53,
              w: 10,
              h: 0.11,
              fill: { color: "C00000" },
            },
          },
          {
            image: {
              x: 6.82,
              y: 4.87,
              w: 3.18,
              h: 0.57,
              path: "../img/logo_stol2.png",
            },
          },
          {
            placeholder: {
              options: {
                name: "Photo",
                type: "image",
                x: 6.7,
                y: 1.23,
                w: 2.86,
                h: 3.57,
              },
            },
          },
        ],
        slideNumber: {
          x: 0.42,
          y: 5.23,
          fontFace: "Trebuchet MS",
          fontSize: 6.8,
          color: "9D968D",
        },
      },
    };
  },
};
