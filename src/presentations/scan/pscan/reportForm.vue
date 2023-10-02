<template>
  <div>
    <div>
      <FormalButton @click="createPowerPoint"></FormalButton>
    </div>
  </div>
</template>

<script>
import FormalButton from '@/components/button/FormalButton.vue'
import final from '@/json/PowerPoint/final.json'
import firstPage from '@/json/PowerPoint/firstPage.json'
import header from '@/json/PowerPoint/header.json'
import table from '@/json/PowerPoint/table.json'
import textBlock from '@/json/PowerPoint/textblock.json'
import varFonts from '@/json/PowerPoint/varFonts.json'
import SheetText from '@/json/scan/pscan.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideP from '@/mixin/defaultSlideP'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportPscan',
  components: { FormalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideP, defaultSlideAll],
  data() {
    return {
      fontFirstPageHeader: firstPage.FontFirstPageHeader,
      placeFirstPageHeader: firstPage.PlaceFirstPageHeader,
      fontFirstPageSubHeader: firstPage.FontFirstPageSubHeader,
      placeFirstPageSubHeader: firstPage.PlaceFirstPageSubHeader,
      fontFirstPageThreeHeader: firstPage.FontFirstPageThreeHeader,
      placeFirstPageThreeHeader: firstPage.PlaceFirstPageThreeHeader,
      tableBlockLeftTwoCol: table.TableBlockLeftTwoCol,
      tableBlockLeftOneCol: table.TableBlockLeftOneCol,
      tableBlockLeftThreeCol: table.TableBlockLeftThreeCol,
      placeTableBlock: table.PlaceTableBlock,
      fontHeader: header.FontHeader,
      placeHeader: header.PlaceHeader,
      placeFinalText: final.PlaceFinalText,
      fontFinalText: final.FontFinalText,
      placeTextBlock: textBlock.PlaceTextBlock,
      placeTextBlockLeft: textBlock.PlaceTextBlockLeft,
      fontTextBlockBullet: varFonts.FontTextBlockBullet,
      fontTextBlock: varFonts.FontTextBlock,
      fontTextBlockNoNewLine: varFonts.FontTextBlockNoNewLine,
      fontTextBlockBold: varFonts.FontTextBlockBold,
      fontTextBlockHeader: varFonts.FontTextBlockHeader,
      disableSendBtn: false,
      viewSend: false,
      error: null,
      sheetText: SheetText
    }
  },
  methods: {
    printDate: function () {
      // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date().toLocaleDateString('nl-nl', options)
    },
    createPowerPoint() {
      // eslint-disable-next-line no-undef
      let pres = new pptxgen()
      toast.success('Je rapportage wordt samengesteld.')
      pres.defineSlideMaster(this.dataScanP)
      pres.defineSlideMaster(this.dataScanP_Photo)
      pres.defineSlideMaster(this.dataScanP_Matrix)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Update', options: this.fontFirstPageHeader }],
        this.placeFirstPageHeader
      )
      // slideStart.addText([{ text: this.date + ' ' + this.dataScan.team.place_team  + this.dataClient.last_name_client, options: this.fontFirstPageSubHeader }], this.placeFirstPageSubHeader);
      slideStart.addText(
        [
          {
            text:
              'Presentatie voor: ' +
              this.dataClient.first_name_client +
              ' ' +
              this.dataClient.last_name_client,
            options: this.fontFirstPageSubHeader
          }
        ],
        this.placeFirstPageSubHeader
      )
      slideStart.addText(
        [
          {
            text: this.dataScan.team.place_team + ', ' + this.date,
            options: this.fontFirstPageThreeHeader
          }
        ],
        this.placeFirstPageThreeHeader
      )

      let slideIntroA = pres.addSlide('P_SLIDE_Photo')
      slideIntroA.addText(
        [
          {
            text: this.sheetText['sheet-one'].header,
            options: this.fontHeader
          }
        ],
        this.placeHeader
      )
      slideIntroA.addImage({
        path: '../img/bScan/introA.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideIntroA.addText(
        [
          {
            text: this.sheetText['sheet-one'].text_a,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['sheet-one'].text_b,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['sheet-one'].text_c,
            options: this.fontTextBlockBullet
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['sheet-one'].text_d,
            options: this.fontTextBlock
          }
        ],
        this.placeTextBlockLeft
      )
      let slideIntroB = pres.addSlide('P_SLIDE')
      slideIntroB.addText(
        [
          {
            text: this.sheetText['sheet-two'].header,
            options: this.fontHeader
          }
        ],
        this.placeHeader
      )
      slideIntroB.addText(
        [
          {
            text: this.sheetText['sheet-two'].text_a,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['sheet-two'].text_b,
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['sheet-two'].text_c,
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['sheet-two'].text_d,
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['sheet-two'].text_e,
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['sheet-two'].text_f,
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['sheet-two'].text_g,
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['sheet-two'].text_h,
            options: this.fontTextBlock
          }
        ],
        this.placeTextBlock
      )
      slideIntroB.addImage({
        path: '../img/oScan/matrixA.png',
        x: 0.22,
        y: 1.8,
        w: 3.22,
        h: 1.6
      })

      let slideSamen = pres.addSlide('P_SLIDE')
      slideSamen.addText(
        [{ text: this.sheetText['samen'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowA = []
      rowA.push([
        { text: this.sheetText['samen'].text_a, options: { bold: true } },
        {
          text: this.sheetText['samen'].text_b,
          options: { bold: true }
        },
        {
          text: this.sheetText['samen'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])
      if (this.dataScan.sl_a > 50) {
        rowA.push([
          { text: this.sheetText['samen'].text_d },
          {
            text: this.sheetText['samen'].text_e
          },
          {
            text: this.dataScan.sl_a,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_a < -50) {
        rowA.push([
          { text: this.sheetText['samen'].text_d },
          {
            text: this.sheetText['samen'].text_e
          },
          {
            text: this.dataScan.sl_a,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_a === 0) {
        rowA.push([
          { text: this.sheetText['samen'].text_d },
          {
            text: this.sheetText['samen'].text_e
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowA.push([
          { text: this.sheetText['samen'].text_d },
          {
            text: this.sheetText['samen'].text_e
          },
          {
            text: this.dataScan.sl_a,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }

      if (this.dataScan.sl_b > 50) {
        rowA.push([
          { text: this.sheetText['samen'].text_f },
          {
            text: this.sheetText['samen'].text_g
          },
          {
            text: this.dataScan.sl_b,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_b < -50) {
        rowA.push([
          { text: this.sheetText['samen'].text_f },
          {
            text: this.sheetText['samen'].text_g
          },
          {
            text: this.dataScan.sl_b,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_b === 0) {
        rowA.push([
          { text: this.sheetText['samen'].text_f },
          {
            text: this.sheetText['samen'].text_g
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowA.push([
          { text: this.sheetText['samen'].text_f },
          {
            text: this.sheetText['samen'].text_g
          },
          {
            text: this.dataScan.sl_b,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }

      if (this.dataScan.sl_c > 50) {
        rowA.push([
          { text: this.sheetText['samen'].text_h },
          {
            text: this.sheetText['samen'].text_i
          },
          {
            text: this.dataScan.sl_c,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_c < -50) {
        rowA.push([
          { text: this.sheetText['samen'].text_h },
          {
            text: this.sheetText['samen'].text_i
          },
          {
            text: this.dataScan.sl_c,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_c === 0) {
        rowA.push([
          { text: this.sheetText['samen'].text_h },
          {
            text: this.sheetText['samen'].text_i
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowA.push([
          { text: this.sheetText['samen'].text_h },
          {
            text: this.sheetText['samen'].text_i
          },
          {
            text: this.dataScan.sl_c,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }
      if (this.dataScan.sl_d > 50) {
        rowA.push([
          { text: this.sheetText['samen'].text_j },
          {
            text: this.sheetText['samen'].text_k
          },
          {
            text: this.dataScan.sl_d,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_d < -50) {
        rowA.push([
          { text: this.sheetText['samen'].text_j },
          {
            text: this.sheetText['samen'].text_k
          },
          {
            text: this.dataScan.sl_d,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_d === 0) {
        rowA.push([
          { text: this.sheetText['samen'].text_j },
          {
            text: this.sheetText['samen'].text_k
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowA.push([
          { text: this.sheetText['samen'].text_j },
          {
            text: this.sheetText['samen'].text_k
          },
          {
            text: this.dataScan.sl_d,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }
      if (this.dataScan.sl_e > 50) {
        rowA.push([
          { text: this.sheetText['samen'].text_l },
          {
            text: this.sheetText['samen'].text_m
          },
          {
            text: this.dataScan.sl_e,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_e < -50) {
        rowA.push([
          { text: this.sheetText['samen'].text_l },
          {
            text: this.sheetText['samen'].text_m
          },
          {
            text: this.dataScan.sl_e,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_e === 0) {
        rowA.push([
          { text: this.sheetText['samen'].text_l },
          {
            text: this.sheetText['samen'].text_m
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowA.push([
          { text: this.sheetText['samen'].text_l },
          {
            text: this.sheetText['samen'].text_m
          },
          {
            text: this.dataScan.sl_e,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }

      slideSamen.addTable(rowA, this.tableBlockLeftThreeCol)
      slideSamen.addImage({
        path: '../img/oScan/matrixA.png',
        x: 0.3,
        y: 3.92,
        w: 2.06,
        h: 1.03
      })

      let slideSamenB = pres.addSlide('P_SLIDE')
      slideSamenB.addText(
        [{ text: this.sheetText['samen'].headerB, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([
        { text: this.sheetText['samen'].text_a, options: { bold: true } },
        {
          text: this.sheetText['samen'].text_b,
          options: { bold: true }
        },
        {
          text: this.sheetText['samen'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])
      if (this.dataScan.sl_f > 50) {
        rowB.push([
          { text: this.sheetText['samen'].text_n },
          {
            text: this.sheetText['samen'].text_o
          },
          {
            text: this.dataScan.sl_f,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_f < -50) {
        rowB.push([
          { text: this.sheetText['samen'].text_n },
          {
            text: this.sheetText['samen'].text_o
          },
          {
            text: this.dataScan.sl_f,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_f === 0) {
        rowB.push([
          { text: this.sheetText['samen'].text_n },
          {
            text: this.sheetText['samen'].text_o
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowB.push([
          { text: this.sheetText['samen'].text_n },
          {
            text: this.sheetText['samen'].text_o
          },
          {
            text: this.dataScan.sl_f,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }
      if (this.dataScan.sl_g > 50) {
        rowB.push([
          { text: this.sheetText['samen'].text_p },
          {
            text: this.sheetText['samen'].text_q
          },
          {
            text: this.dataScan.sl_g,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_g < -50) {
        rowB.push([
          { text: this.sheetText['samen'].text_p },
          {
            text: this.sheetText['samen'].text_q
          },
          {
            text: this.dataScan.sl_g,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_g === 0) {
        rowB.push([
          { text: this.sheetText['samen'].text_p },
          {
            text: this.sheetText['samen'].text_q
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowB.push([
          { text: this.sheetText['samen'].text_p },
          {
            text: this.sheetText['samen'].text_q
          },
          {
            text: this.dataScan.sl_g,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }

      if (this.dataScan.sl_h > 50) {
        rowB.push([
          { text: this.sheetText['samen'].text_r },
          {
            text: this.sheetText['samen'].text_s
          },
          {
            text: this.dataScan.sl_h,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_h < -50) {
        rowB.push([
          { text: this.sheetText['samen'].text_r },
          {
            text: this.sheetText['samen'].text_s
          },
          {
            text: this.dataScan.sl_h,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_h === 0) {
        rowB.push([
          { text: this.sheetText['samen'].text_r },
          {
            text: this.sheetText['samen'].text_s
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowB.push([
          { text: this.sheetText['samen'].text_r },
          {
            text: this.sheetText['samen'].text_s
          },
          {
            text: this.dataScan.sl_h,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }
      if (this.dataScan.sl_i > 50) {
        rowB.push([
          { text: this.sheetText['samen'].text_t },
          {
            text: this.sheetText['samen'].text_u
          },
          {
            text: this.dataScan.sl_i,
            options: { align: 'center', color: '00B050' }
          }
        ])
      } else if (this.dataScan.sl_i < -50) {
        rowB.push([
          { text: this.sheetText['samen'].text_t },
          {
            text: this.sheetText['samen'].text_u
          },
          {
            text: this.dataScan.sl_i,
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else if (this.dataScan.sl_i === 0) {
        rowB.push([
          { text: this.sheetText['samen'].text_t },
          {
            text: this.sheetText['samen'].text_u
          },
          {
            text: '0',
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      } else {
        rowB.push([
          { text: this.sheetText['samen'].text_t },
          {
            text: this.sheetText['samen'].text_u
          },
          {
            text: this.dataScan.sl_i,
            options: { align: 'center', color: 'FFC000' }
          }
        ])
      }

      slideSamenB.addTable(rowB, this.tableBlockLeftThreeCol)
      slideSamenB.addImage({
        path: '../img/oScan/matrixA.png',
        x: 0.3,
        y: 3.92,
        w: 2.06,
        h: 1.03
      })

      let slideSamenC = pres.addSlide('P_SLIDE')
      slideSamenC.addText(
        [{ text: this.sheetText['samen'].headerC, options: this.fontHeader }],
        this.placeHeader
      )
      let rowC = []
      rowC.push([
        { text: this.sheetText['samen'].text_a, options: { bold: true } },
        {
          text: this.sheetText['samen'].text_b,
          options: { bold: true }
        },
        {
          text: this.sheetText['samen'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])

      rowC.push([
        { text: this.sheetText['samen'].text_v },
        {
          text: this.sheetText['samen'].text_w
        },
        {
          text: '? ?',
          options: { align: 'center', color: 'FF0000' }
        }
      ])
      if (this.dataScan.text_a === null) {
        rowC.push([
          { text: this.sheetText['alg'].text_g },
          {
            text: this.sheetText['alg'].text_h
          },
          {
            text: '',
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      } else {
        rowC.push([
          { text: this.sheetText['alg'].text_g },
          {
            text: this.dataScan.text_a
          },
          {
            text: '',
            options: { align: 'center', color: 'FF0000' }
          }
        ])
      }

      slideSamenC.addTable(rowC, this.tableBlockLeftThreeCol)
      slideSamenC.addImage({
        path: '../img/oScan/matrixA.png',
        x: 0.3,
        y: 3.92,
        w: 2.06,
        h: 1.03
      })

      let slideStatA = pres.addSlide('P_SLIDE_Matrix')
      slideStatA.addText(
        [{ text: this.sheetText['samen'].text_d, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['samen'].text_e, options: { bold: true } }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_a }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['alg'].text_b }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['alg'].text_c }])
      rowD.push([{ text: this.sheetText['alg'].text_d }])
      rowD.push([{ text: this.sheetText['alg'].text_e }])
      rowD.push([{ text: this.sheetText['alg'].text_f }])
      slideStatA.addTable(rowD, this.placeTableBlock)
      if (this.dataScan.sl_a > 50) {
        slideStatA.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_a < -50) {
        slideStatA.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatA.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }

      let slideStatB = pres.addSlide('P_SLIDE_Matrix')
      slideStatB.addText(
        [{ text: this.sheetText['samen'].text_f, options: this.fontHeader }],
        this.placeHeader
      )
      let rowE = []
      rowE.push([{ text: this.sheetText['samen'].text_g, options: { bold: true } }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_b }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['alg'].text_b }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['alg'].text_c }])
      rowE.push([{ text: this.sheetText['alg'].text_d }])
      rowE.push([{ text: this.sheetText['alg'].text_e }])
      rowE.push([{ text: this.sheetText['alg'].text_f }])
      slideStatB.addTable(rowE, this.placeTableBlock)
      if (this.dataScan.sl_b > 50) {
        slideStatB.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_b < -50) {
        slideStatB.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatB.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }
      let slideStatC = pres.addSlide('P_SLIDE_Matrix')
      slideStatC.addText(
        [{ text: this.sheetText['samen'].text_h, options: this.fontHeader }],
        this.placeHeader
      )
      let rowF = []
      rowF.push([{ text: this.sheetText['samen'].text_i, options: { bold: true } }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_c }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['alg'].text_b }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['alg'].text_c }])
      rowF.push([{ text: this.sheetText['alg'].text_d }])
      rowF.push([{ text: this.sheetText['alg'].text_e }])
      rowF.push([{ text: this.sheetText['alg'].text_f }])
      slideStatC.addTable(rowF, this.placeTableBlock)
      if (this.dataScan.sl_c > 50) {
        slideStatC.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_c < -50) {
        slideStatC.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatC.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }
      let slideStatD = pres.addSlide('P_SLIDE_Matrix')
      slideStatD.addText(
        [{ text: this.sheetText['samen'].text_j, options: this.fontHeader }],
        this.placeHeader
      )
      let rowG = []
      rowG.push([{ text: this.sheetText['samen'].text_k, options: { bold: true } }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_d }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: this.sheetText['alg'].text_b }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: this.sheetText['alg'].text_c }])
      rowG.push([{ text: this.sheetText['alg'].text_d }])
      rowG.push([{ text: this.sheetText['alg'].text_e }])
      rowG.push([{ text: this.sheetText['alg'].text_f }])
      slideStatD.addTable(rowG, this.placeTableBlock)
      if (this.dataScan.sl_d > 50) {
        slideStatD.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_d < -50) {
        slideStatD.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatD.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }
      let slideStatE = pres.addSlide('P_SLIDE_Matrix')
      slideStatE.addText(
        [{ text: this.sheetText['samen'].text_l, options: this.fontHeader }],
        this.placeHeader
      )
      let rowH = []
      rowH.push([{ text: this.sheetText['samen'].text_m, options: { bold: true } }])
      rowH.push([{ text: '' }])
      rowH.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_e }])
      rowH.push([{ text: '' }])
      rowH.push([{ text: this.sheetText['alg'].text_b }])
      rowH.push([{ text: '' }])
      rowH.push([{ text: '' }])
      rowH.push([{ text: '' }])
      rowH.push([{ text: '' }])
      rowH.push([{ text: this.sheetText['alg'].text_c }])
      rowH.push([{ text: this.sheetText['alg'].text_d }])
      rowH.push([{ text: this.sheetText['alg'].text_e }])
      rowH.push([{ text: this.sheetText['alg'].text_f }])
      slideStatE.addTable(rowH, this.placeTableBlock)
      if (this.dataScan.sl_e > 50) {
        slideStatE.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_e < -50) {
        slideStatE.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatE.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }
      let slideStatF = pres.addSlide('P_SLIDE_Matrix')
      slideStatF.addText(
        [{ text: this.sheetText['samen'].text_n, options: this.fontHeader }],
        this.placeHeader
      )
      let rowI = []
      rowI.push([{ text: this.sheetText['samen'].text_o, options: { bold: true } }])
      rowI.push([{ text: '' }])
      rowI.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_f }])
      rowI.push([{ text: '' }])
      rowI.push([{ text: this.sheetText['alg'].text_b }])
      rowI.push([{ text: '' }])
      rowI.push([{ text: '' }])
      rowI.push([{ text: '' }])
      rowI.push([{ text: '' }])
      rowI.push([{ text: this.sheetText['alg'].text_c }])
      rowI.push([{ text: this.sheetText['alg'].text_d }])
      rowI.push([{ text: this.sheetText['alg'].text_e }])
      rowI.push([{ text: this.sheetText['alg'].text_f }])
      slideStatF.addTable(rowI, this.placeTableBlock)
      if (this.dataScan.sl_f > 50) {
        slideStatF.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_f < -50) {
        slideStatF.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatF.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }
      let slideStatG = pres.addSlide('P_SLIDE_Matrix')
      slideStatG.addText(
        [{ text: this.sheetText['samen'].text_p, options: this.fontHeader }],
        this.placeHeader
      )
      let rowJ = []
      rowJ.push([{ text: this.sheetText['samen'].text_q, options: { bold: true } }])
      rowJ.push([{ text: '' }])
      rowJ.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_g }])
      rowJ.push([{ text: '' }])
      rowJ.push([{ text: this.sheetText['alg'].text_b }])
      rowJ.push([{ text: '' }])
      rowJ.push([{ text: '' }])
      rowJ.push([{ text: '' }])
      rowJ.push([{ text: '' }])
      rowJ.push([{ text: this.sheetText['alg'].text_c }])
      rowJ.push([{ text: this.sheetText['alg'].text_d }])
      rowJ.push([{ text: this.sheetText['alg'].text_e }])
      rowJ.push([{ text: this.sheetText['alg'].text_f }])
      slideStatG.addTable(rowJ, this.placeTableBlock)
      if (this.dataScan.sl_g > 50) {
        slideStatG.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_g < -50) {
        slideStatG.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatG.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }
      let slideStatH = pres.addSlide('P_SLIDE_Matrix')
      slideStatH.addText(
        [{ text: this.sheetText['samen'].text_r, options: this.fontHeader }],
        this.placeHeader
      )
      let rowK = []
      rowK.push([{ text: this.sheetText['samen'].text_s, options: { bold: true } }])
      rowK.push([{ text: '' }])
      rowK.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_h }])
      rowK.push([{ text: '' }])
      rowK.push([{ text: this.sheetText['alg'].text_b }])
      rowK.push([{ text: '' }])
      rowK.push([{ text: '' }])
      rowK.push([{ text: '' }])
      rowK.push([{ text: '' }])
      rowK.push([{ text: this.sheetText['alg'].text_c }])
      rowK.push([{ text: this.sheetText['alg'].text_d }])
      rowK.push([{ text: this.sheetText['alg'].text_e }])
      rowK.push([{ text: this.sheetText['alg'].text_f }])
      slideStatH.addTable(rowK, this.placeTableBlock)
      if (this.dataScan.sl_h > 50) {
        slideStatH.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_h < -50) {
        slideStatH.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatH.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }
      let slideStatI = pres.addSlide('P_SLIDE_Matrix')
      slideStatI.addText(
        [{ text: this.sheetText['samen'].text_t, options: this.fontHeader }],
        this.placeHeader
      )
      let rowL = []
      rowL.push([{ text: this.sheetText['samen'].text_u, options: { bold: true } }])
      rowL.push([{ text: '' }])
      rowL.push([{ text: this.sheetText['alg'].text_a + this.dataScan.sl_i }])
      rowL.push([{ text: '' }])
      rowL.push([{ text: this.sheetText['alg'].text_b }])
      rowL.push([{ text: '' }])
      rowL.push([{ text: '' }])
      rowL.push([{ text: '' }])
      rowL.push([{ text: '' }])
      rowL.push([{ text: this.sheetText['alg'].text_c }])
      rowL.push([{ text: this.sheetText['alg'].text_d }])
      rowL.push([{ text: this.sheetText['alg'].text_e }])
      rowL.push([{ text: this.sheetText['alg'].text_f }])
      slideStatI.addTable(rowL, this.placeTableBlock)
      if (this.dataScan.sl_i > 50) {
        slideStatI.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else if (this.dataScan.sl_i < -50) {
        slideStatI.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatI.addImage({
          path: '../img/oScan/matrixMid.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }

      let slideStatOpen = pres.addSlide('P_SLIDE_Matrix')
      slideStatOpen.addText(
        [{ text: this.sheetText['samen'].text_v, options: this.fontHeader }],
        this.placeHeader
      )
      let rowX = []
      rowX.push([{ text: this.sheetText['samen'].text_w, options: { bold: true } }])
      rowX.push([{ text: '' }])
      if (this.dataScan.text_a === null) {
        rowX.push([
          {
            text: this.sheetText['alg'].text_g + ': ' + this.sheetText['alg'].text_h
          }
        ])
      } else {
        rowX.push([{ text: this.sheetText['alg'].text_g + ': ' + this.dataScan.text_a }])
      }
      rowX.push([{ text: '' }])
      rowX.push([{ text: this.sheetText['alg'].text_b }])
      rowX.push([{ text: '' }])
      rowX.push([{ text: '' }])
      rowX.push([{ text: '' }])
      rowX.push([{ text: '' }])
      rowX.push([{ text: this.sheetText['alg'].text_c }])
      rowX.push([{ text: this.sheetText['alg'].text_d }])
      rowX.push([{ text: this.sheetText['alg'].text_e }])
      rowX.push([{ text: this.sheetText['alg'].text_f }])
      slideStatOpen.addTable(rowX, this.placeTableBlock)

      if (this.dataScan.text_a === null) {
        slideStatOpen.addImage({
          path: '../img/oScan/matrixDone.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      } else {
        slideStatOpen.addImage({
          path: '../img/oScan/matrixUrgent.png',
          placeholder: 'Photo',
          w: 2.06,
          h: 1.03
        })
      }

      let slideFinal = pres.addSlide('FINAL')
      if (!this.dataScan.specialist) {
        slideFinal.addText(
          [
            {
              text: this.dataScan.team.company_name_team,
              options: this.fontFinalText
            },
            {
              text: this.dataScan.team.adress_team,
              options: this.fontFinalText
            },
            {
              text: this.dataScan.team.zip_code_team + ' ' + this.dataScan.team.place_team,
              options: this.fontFinalText
            },
            { text: '', options: this.fontFinalText },
            {
              text: this.dataScan.team.website_team,
              options: this.fontFinalText
            },
            { text: '', options: this.fontFinalText },
            {
              text: this.dataScan.user.first_name_user + ' ' + this.dataScan.user.last_name_user,
              options: this.fontFinalText
            },
            {
              text: 'e-mail: ' + this.dataScan.user.email,
              options: this.fontFinalText
            },
            {
              text: 'telefoon: ' + this.dataScan.user.telephone_user,
              options: this.fontFinalText
            }
          ],
          this.placeFinalText
        )
      }
      if (this.dataScan.specialist) {
        slideFinal.addText(
          [
            {
              text: this.dataScan.team.company_name_team,
              options: this.fontFinalText
            },
            {
              text: this.dataScan.team.adress_team,
              options: this.fontFinalText
            },
            {
              text: this.dataScan.team.zip_code_team + ' ' + this.dataScan.team.place_team,
              options: this.fontFinalText
            },
            { text: '', options: this.fontFinalText },
            {
              text: this.dataScan.team.website_team,
              options: this.fontFinalText
            },
            { text: '', options: this.fontFinalText },
            {
              text: this.dataSpec.first_name_user + ' ' + this.dataSpec.last_name_user,
              options: this.fontFinalText
            },
            {
              text: 'e-mail: ' + this.dataSpec.email,
              options: this.fontFinalText
            },
            {
              text: 'telefoon: ' + this.dataSpec.telephone_user,
              options: this.fontFinalText
            }
          ],
          this.placeFinalText
        )
      }
      this.disableSendBtn = false
      let filename =
        'Rapportage_' +
        this.dataClient.first_name_client +
        '_' +
        this.dataClient.last_name_client +
        '_' +
        this.date +
        '.pptx'
      // eslint-disable-next-line no-undef
      pres.writeFile({ fileName: filename })
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.date = this.printDate()
  }
}
</script>

<style scoped></style>
