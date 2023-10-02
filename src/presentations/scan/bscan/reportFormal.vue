<template>
  <div>
    <FormalButton @click="createPowerPoint"></FormalButton>
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
import SheetText from '@/json/scan/bscan.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideB from '@/mixin/defaultSlideB'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportBscan',
  components: { FormalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideB, defaultSlideAll],
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
      pres.defineSlideMaster(this.dataScanB)
      pres.defineSlideMaster(this.dataScanB_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Familiestatuut', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('B_SLIDE_Photo')
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
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['sheet-one'].text_b,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['sheet-one'].text_c,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['sheet-one'].text_d,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['sheet-one'].text_e,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['sheet-one'].text_f,
            options: this.fontTextBlockBullet
          }
        ],
        this.placeTextBlockLeft
      )

      let slideIntroB = pres.addSlide('B_SLIDE_Photo')
      slideIntroB.addText(
        [
          {
            text: this.sheetText['sheet-two'].header,
            options: this.fontHeader
          }
        ],
        this.placeHeader
      )
      slideIntroB.addImage({
        path: '../img/bScan/introB2.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideIntroB.addText(
        [
          {
            text: this.sheetText['sheet-two'].text_a,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['sheet-two'].text_b,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['sheet-two'].text_c,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['sheet-two'].text_d,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['sheet-two'].text_e,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['sheet-two'].text_f,
            options: this.fontTextBlockHeader
          }
        ],
        this.placeTextBlockLeft
      )

      let slideQuesA = pres.addSlide('B_SLIDE')
      slideQuesA.addText(
        [{ text: this.sheetText['ques-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowA = []
      rowA.push([{ text: this.sheetText['ques-a'].text_m }])
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-a'].text_a }])
      rowA.push([{ text: this.sheetText['ques-a'].text_b }])
      rowA.push([{ text: this.sheetText['ques-a'].text_c + this.dataScan.sl_a }])
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-a'].text_d }])
      if (this.dataScan.sl_a <= -25) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_a > -25 && this.dataScan.sl_a <= 25) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_a > 25) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_k,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_l,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      slideQuesA.addTable(rowA, this.placeTableBlock)

      let slideQuesB = pres.addSlide('B_SLIDE')
      slideQuesB.addText(
        [{ text: this.sheetText['ques-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-b'].text_n }])
      rowB.push([{ text: '' }])
      rowB.push([{ text: this.sheetText['ques-b'].text_a }])
      rowB.push([{ text: this.sheetText['ques-b'].text_b }])
      if (this.dataScan.question_a === 'ke1') {
        rowB.push([{ text: this.sheetText['ques-b'].text_c + 'Ja' }])
        rowB.push([{ text: '' }])
        rowB.push([{ text: this.sheetText['ques-b'].text_d }])

        rowB.push([
          {
            text: this.sheetText['ques-b'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowB.push([{ text: this.sheetText['ques-b'].text_c + 'Nee' }])
        rowB.push([{ text: '' }])
        rowB.push([{ text: this.sheetText['ques-b'].text_d }])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_i,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_j,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_k,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_l,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_m,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.question_a === 'ke3') {
        rowB.push([{ text: this.sheetText['ques-b'].text_c + 'Nee' }])
        rowB.push([{ text: '' }])
        rowB.push([{ text: this.sheetText['ques-b'].text_d }])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_i,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_j,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_k,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_l,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_m,
            options: { bullet: { indent: 12 } }
          }
        ])
      }

      slideQuesB.addTable(rowB, this.placeTableBlock)

      let slideQuesC = pres.addSlide('B_SLIDE')
      slideQuesC.addText(
        [{ text: this.sheetText['ques-c'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-c'].text_n }])
      rowC.push([{ text: '' }])
      rowC.push([{ text: this.sheetText['ques-c'].text_a }])
      rowC.push([{ text: this.sheetText['ques-c'].text_b }])
      rowC.push([{ text: this.sheetText['ques-c'].text_c + this.dataScan.sl_b }])
      rowC.push([{ text: '' }])
      rowC.push([{ text: this.sheetText['ques-c'].text_d }])
      if (this.dataScan.sl_b <= -25) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_b > -25 && this.dataScan.sl_b <= 25) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_j,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_b > 25) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_i,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_k,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      slideQuesC.addTable(rowC, this.placeTableBlock)

      let slideQuesD = pres.addSlide('B_SLIDE')
      slideQuesD.addText(
        [{ text: this.sheetText['ques-d'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-d'].text_n }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_a }])
      rowD.push([{ text: this.sheetText['ques-d'].text_b }])
      if (this.dataScan.question_b === 'ke1') {
        rowD.push([{ text: this.sheetText['ques-d'].text_c + 'Ja' }])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-d'].text_d }])

        rowD.push([
          {
            text: this.sheetText['ques-d'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowD.push([{ text: this.sheetText['ques-d'].text_c + 'Nee' }])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-d'].text_d }])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_i,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_j,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_k,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_l,
            options: { bullet: { indent: 12 } }
          }
        ])
      }

      slideQuesD.addTable(rowD, this.placeTableBlock)

      let slideQuesE = pres.addSlide('B_SLIDE')
      slideQuesE.addText(
        [{ text: this.sheetText['ques-e'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowE = []
      rowE.push([{ text: this.sheetText['ques-e'].text_n }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_a }])
      rowE.push([{ text: this.sheetText['ques-e'].text_b }])
      rowE.push([{ text: this.sheetText['ques-e'].text_c + this.dataScan.sl_c }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_d }])
      if (this.dataScan.sl_c <= -25) {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_c > -25 && this.dataScan.sl_c <= 25) {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_c > 25) {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      slideQuesE.addTable(rowE, this.placeTableBlock)

      let slideQuesF = pres.addSlide('B_SLIDE')
      slideQuesF.addText(
        [{ text: this.sheetText['ques-f'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowF = []
      rowF.push([{ text: this.sheetText['ques-f'].text_n }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['ques-f'].text_a }])
      rowF.push([{ text: this.sheetText['ques-f'].text_b }])
      rowF.push([{ text: this.sheetText['ques-f'].text_c + this.dataScan.sl_d }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['ques-f'].text_d }])
      if (this.dataScan.sl_d < -1) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_d === 0) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_i,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_j,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_k,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.sl_d > 1) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_l,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_m,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_o,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      slideQuesF.addTable(rowF, this.placeTableBlock)

      let slideQuesG = pres.addSlide('B_SLIDE')
      slideQuesG.addText(
        [{ text: this.sheetText['ques-g'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowG = []
      rowG.push([{ text: this.sheetText['ques-g'].text_n }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: this.sheetText['ques-g'].text_a }])
      rowG.push([{ text: this.sheetText['ques-g'].text_b }])
      if (this.dataScan.question_c === 'ke1') {
        rowG.push([{ text: this.sheetText['ques-g'].text_c + 'Ja' }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-g'].text_d }])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_e,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_f,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_g,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_h,
            options: { bullet: { indent: 12 } }
          }
        ])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowG.push([{ text: this.sheetText['ques-g'].text_c + 'Nee' }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-g'].text_d }])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_i,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_j,
            options: { bullet: { indent: 12 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_k,
            options: { bullet: { indent: 12 } }
          }
        ])
      }

      slideQuesG.addTable(rowG, this.placeTableBlock)

      let slidePropA = pres.addSlide('B_SLIDE_Photo')
      slidePropA.addText(
        [{ text: this.sheetText['prop-1'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slidePropA.addImage({
        path: '../img/bScan/propA.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slidePropA.addText(
        [
          {
            text: this.sheetText['prop-1'].text_a,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-1'].text_b,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-1'].text_c,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-1'].text_d,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-1'].text_e,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-1'].text_f,
            options: this.fontTextBlockHeader
          }
        ],
        this.placeTextBlockLeft
      )

      let slidePropB = pres.addSlide('B_SLIDE_Photo')
      slidePropB.addText(
        [{ text: this.sheetText['prop-2'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slidePropB.addImage({
        path: '../img/bScan/propB.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slidePropB.addText(
        [
          {
            text: this.sheetText['prop-2'].text_a,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-2'].text_g,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-2'].text_b,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-2'].text_c,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-2'].text_d,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-2'].text_e,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-2'].text_f,
            options: this.fontTextBlockBullet
          }
        ],
        this.placeTextBlockLeft
      )

      let slidePropC = pres.addSlide('B_SLIDE_Photo')
      slidePropC.addText(
        [{ text: this.sheetText['prop-3'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slidePropC.addImage({
        path: '../img/bScan/propC.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slidePropC.addText(
        [
          {
            text: this.sheetText['prop-3'].text_f,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text:
              this.sheetText['prop-3'].text_a +
              this.dataScan.int_question_a +
              this.sheetText['prop-3'].text_b,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['prop-3'].text_c,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          {
            text:
              this.sheetText['prop-3'].text_d +
              this.dataScan.int_question_b +
              this.sheetText['prop-3'].text_b,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-3'].text_e,
            options: this.fontTextBlockBold
          }
        ],
        this.placeTextBlockLeft
      )

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
