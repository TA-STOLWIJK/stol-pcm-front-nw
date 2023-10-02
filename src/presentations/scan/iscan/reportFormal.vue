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
import SheetText from '@/json/scan/iscan.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideI from '@/mixin/defaultSlideI'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportIscan',
  components: { FormalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideI, defaultSlideAll],
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
      pres.defineSlideMaster(this.dataScanI)
      pres.defineSlideMaster(this.dataScanI_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Cyber Security', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('I_SLIDE_Photo')
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
        path: '../img/aScan/introA.png',
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
          }
        ],
        this.placeTextBlockLeft
      )

      let slideIntroB = pres.addSlide('I_SLIDE_Photo')
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
        path: '../img/aScan/introB.png',
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

      let slideQuesA = pres.addSlide('I_SLIDE')
      slideQuesA.addText(
        [{ text: this.sheetText['ques-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowA = []
      rowA.push([{ text: this.sheetText['ques-a'].intro, options: this.fontTextBlock }])
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-a'].text_a, options: this.fontTextBlock }])
      rowA.push([{ text: '' }])
      rowA.push([
        {
          text: this.sheetText['ques-a'].text_c + '' + this.dataScan.sl_a,
          options: this.fontTextBlock
        }
      ])
      if (this.dataScan.sl_a < -75) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: '' }])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: this.sheetText['ques-a'].opt_a, options: this.fontTextBlock }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_b, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_a < 0 && this.dataScan.sl_a > -76) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: '' }])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: this.sheetText['ques-a'].opt_c, options: this.fontTextBlock }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_d, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_a === 0) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_f,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: '' }])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: this.sheetText['ques-a'].opt_e, options: this.fontTextBlock }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_f, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_a > 0 && this.dataScan.sl_a < 75) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_g,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: '' }])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: this.sheetText['ques-a'].opt_g, options: this.fontTextBlock }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_h, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_a > 74) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_h,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: '' }])
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowA.push([{ text: this.sheetText['ques-a'].opt_i, options: this.fontTextBlock }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_j, options: this.fontTextBlock }])
      }

      slideQuesA.addTable(rowA, this.placeTableBlock)

      let slideQuesB = pres.addSlide('I_SLIDE')
      slideQuesB.addText(
        [{ text: this.sheetText['ques-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-b'].intro, options: this.fontTextBlock }])
      rowB.push([{ text: '' }])
      rowB.push([{ text: this.sheetText['ques-b'].text_a, options: this.fontTextBlock }])
      rowB.push([{ text: '' }])
      rowB.push([
        {
          text: this.sheetText['ques-b'].text_c + '' + this.dataScan.sl_b,
          options: this.fontTextBlock
        }
      ])
      if (this.dataScan.sl_b < -75) {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: '' }])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: this.sheetText['ques-b'].opt_a, options: this.fontTextBlock }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_b, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_b < 0 && this.dataScan.sl_b > -76) {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: '' }])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: this.sheetText['ques-b'].opt_c, options: this.fontTextBlock }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_d, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_b === 0) {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_f,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: '' }])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: this.sheetText['ques-b'].opt_e, options: this.fontTextBlock }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_f, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_b > 0 && this.dataScan.sl_b < 75) {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_g,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: '' }])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: this.sheetText['ques-b'].opt_g, options: this.fontTextBlock }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_h, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_b > 74) {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_h,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: '' }])
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: this.sheetText['ques-b'].opt_i, options: this.fontTextBlock }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_j, options: this.fontTextBlock }])
      }
      slideQuesB.addTable(rowB, this.placeTableBlock)

      let slideQuesC = pres.addSlide('I_SLIDE')
      slideQuesC.addText(
        [{ text: this.sheetText['ques-c'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-c'].intro, options: this.fontTextBlock }])
      rowC.push([{ text: '' }])
      rowC.push([{ text: this.sheetText['ques-c'].text_a, options: this.fontTextBlock }])
      rowC.push([{ text: '' }])
      rowC.push([
        {
          text: this.sheetText['ques-c'].text_c + '' + this.dataScan.sl_c,
          options: this.fontTextBlock
        }
      ])
      if (this.dataScan.sl_c < -75) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: this.sheetText['ques-c'].opt_a, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_b, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_c < 0 && this.dataScan.sl_c > -76) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: this.sheetText['ques-c'].opt_c, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_d, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_c === 0) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_f,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: this.sheetText['ques-c'].opt_e, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_f, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_c > 0 && this.dataScan.sl_c < 75) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_g,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: this.sheetText['ques-c'].opt_g, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_h, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_c > 74) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_h,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowC.push([{ text: this.sheetText['ques-c'].opt_i, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_j, options: this.fontTextBlock }])
      }
      slideQuesC.addTable(rowC, this.placeTableBlock)

      let slideQuesD = pres.addSlide('I_SLIDE')
      slideQuesD.addText(
        [{ text: this.sheetText['ques-d'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-d'].intro, options: this.fontTextBlock }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_a, options: this.fontTextBlock }])
      rowD.push([{ text: '' }])

      if (this.dataScan.question_a === 'ke1') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + ' ' + this.sheetText['ques-d'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowD.push([{ text: '' }])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowD.push([{ text: this.sheetText['ques-d'].opt_a, options: this.fontTextBlock }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_b, options: this.fontTextBlock }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_c, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + ' ' + this.sheetText['ques-d'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowD.push([{ text: '' }])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowD.push([{ text: this.sheetText['ques-d'].opt_d, options: this.fontTextBlock }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_e, options: this.fontTextBlock }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_f, options: this.fontTextBlock }])
      }
      slideQuesD.addTable(rowD, this.placeTableBlock)

      let slideQuesE = pres.addSlide('I_SLIDE')
      slideQuesE.addText(
        [{ text: this.sheetText['ques-e'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowE = []
      rowE.push([{ text: this.sheetText['ques-e'].intro, options: this.fontTextBlock }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_a, options: this.fontTextBlock }])
      rowE.push([{ text: '' }])

      if (this.dataScan.question_b === 'ke1') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + ' ' + this.sheetText['ques-e'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowE.push([{ text: '' }])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowE.push([{ text: this.sheetText['ques-e'].opt_a, options: this.fontTextBlock }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_b, options: this.fontTextBlock }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_c, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + ' ' + this.sheetText['ques-e'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowE.push([{ text: '' }])
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowE.push([{ text: this.sheetText['ques-e'].opt_d, options: this.fontTextBlock }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_e, options: this.fontTextBlock }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_f, options: this.fontTextBlock }])
      }
      slideQuesE.addTable(rowE, this.placeTableBlock)

      let slideQuesF = pres.addSlide('I_SLIDE')
      slideQuesF.addText(
        [{ text: this.sheetText['ques-f'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowF = []
      rowF.push([{ text: this.sheetText['ques-f'].intro, options: this.fontTextBlock }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['ques-f'].text_a, options: this.fontTextBlock }])
      rowF.push([{ text: '' }])
      rowF.push([
        {
          text: this.sheetText['ques-f'].text_c + '' + this.dataScan.sl_d,
          options: this.fontTextBlock
        }
      ])
      if (this.dataScan.sl_d < -75) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: '' }])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: this.sheetText['ques-f'].opt_a, options: this.fontTextBlock }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_b, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_d < 0 && this.dataScan.sl_d > -76) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: '' }])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: this.sheetText['ques-f'].opt_c, options: this.fontTextBlock }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_d, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_d === 0) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_f,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: '' }])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: this.sheetText['ques-f'].opt_e, options: this.fontTextBlock }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_f, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_d > 0 && this.dataScan.sl_d < 75) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_g,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: '' }])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: this.sheetText['ques-f'].opt_g, options: this.fontTextBlock }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_h, options: this.fontTextBlock }])
      }
      if (this.dataScan.sl_d > 74) {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_h,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: '' }])
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowF.push([{ text: this.sheetText['ques-f'].opt_i, options: this.fontTextBlock }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_j, options: this.fontTextBlock }])
      }
      slideQuesF.addTable(rowF, this.placeTableBlock)

      let slideQuesG = pres.addSlide('I_SLIDE')
      slideQuesG.addText(
        [{ text: this.sheetText['ques-g'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowG = []
      rowG.push([{ text: this.sheetText['ques-g'].intro, options: this.fontTextBlock }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: this.sheetText['ques-g'].text_a, options: this.fontTextBlock }])
      rowG.push([{ text: '' }])

      if (this.dataScan.question_c === 'ke1') {
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_c + ' ' + this.sheetText['ques-g'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowG.push([{ text: '' }])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowG.push([{ text: this.sheetText['ques-g'].opt_a, options: this.fontTextBlock }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_b, options: this.fontTextBlock }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_c, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_c + ' ' + this.sheetText['ques-g'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowG.push([{ text: '' }])
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_k,
            options: this.fontTextBlock
          }
        ])
        rowG.push([{ text: this.sheetText['ques-g'].opt_d, options: this.fontTextBlock }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_e, options: this.fontTextBlock }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_f, options: this.fontTextBlock }])
      }
      slideQuesG.addTable(rowG, this.placeTableBlock)

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
        'Rapportage_cyber_security' +
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
