<template>
  <div>
    <InformalButton @click="createPowerPoint"></InformalButton>
  </div>
</template>

<script>
import final from '@/json/PowerPoint/final.json'
import firstPage from '@/json/PowerPoint/firstPage.json'
import header from '@/json/PowerPoint/header.json'
import table from '@/json/PowerPoint/table.json'
import textBlock from '@/json/PowerPoint/textblock.json'
import varFonts from '@/json/PowerPoint/varFonts.json'
import SheetText from '@/json/scan/oscanInf.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideO from '@/mixin/defaultSlideO'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'
import InformalButton from "@/components/button/InformalButton.vue";

export default {
  name: 'reportOscan',
  components: { InformalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideO, defaultSlideAll],
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
      pres.defineSlideMaster(this.dataScanO)
      pres.defineSlideMaster(this.dataScanO_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Pensioen', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('O_SLIDE_Photo')
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

      let slideQuesA = pres.addSlide('O_SLIDE_Photo')
      slideQuesA.addImage({
        path: '../img/eScan/eQuestionG.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesA.addText(
        [{ text: this.sheetText['ques-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowA = []
      rowA.push([{ text: this.sheetText['ques-a'].text_a }])
      rowA.push([{ text: this.sheetText['ques-a'].text_b }])
      if (this.dataScan.sl_a > 75) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_c + this.sheetText['ques-a'].text_d
          }
        ])
      }
      if (this.dataScan.sl_a > 0 && this.dataScan.sl_a <= 75) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_c + this.sheetText['ques-a'].text_e
          }
        ])
      }
      if (this.dataScan.sl_a === 0) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_c + this.sheetText['ques-a'].text_f
          }
        ])
      }
      if (this.dataScan.sl_a < 0 && this.dataScan.sl_a >= -75) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_c + this.sheetText['ques-a'].text_g
          }
        ])
      }
      if (this.dataScan.sl_a < -75) {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_c + this.sheetText['ques-a'].text_h
          }
        ])
      }
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-a'].text_i }])
      if (this.dataScan.sl_a > 0) {
        rowA.push([{ text: this.sheetText['ques-a'].opt_a }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_b }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_c }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_d }])
      }
      if (this.dataScan.sl_a < 0) {
        rowA.push([{ text: this.sheetText['ques-a'].opt_e }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_f }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_g }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_h }])
      }
      if (this.dataScan.sl_a === 0) {
        rowA.push([{ text: this.sheetText['ques-a'].opt_i }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_j }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_k }])
        rowA.push([{ text: this.sheetText['ques-a'].opt_l }])
      }

      slideQuesA.addTable(rowA, this.tableBlockLeftOneCol)

      let slideQuesB = pres.addSlide('O_SLIDE_Photo')
      slideQuesB.addImage({
        path: '../img/cScan/question_g.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesB.addText(
        [{ text: this.sheetText['ques-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-b'].text_a }])
      rowB.push([{ text: this.sheetText['ques-b'].text_b }])
      rowB.push([{ text: '' }])
      rowB.push([{ text: this.sheetText['ques-b'].text_c }])

      if (this.dataScan.question_a === 'ke1') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_d + this.dataScan.question_b
          }
        ])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_e
          }
        ])
      }
      if (this.dataScan.question_a === 'ke3') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_f
          }
        ])
      }
      if (this.dataScan.question_a === 'ke4') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_g
          }
        ])
      }
      rowB.push([{ text: '' }])
      rowB.push([{ text: this.sheetText['ques-b'].text_h }])
      if (this.dataScan.question_a === 'ke1') {
        rowB.push([{ text: this.sheetText['ques-b'].opt_a }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_b }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_c }])
      } else {
        rowB.push([{ text: this.sheetText['ques-b'].opt_d }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_e }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_f }])
      }

      slideQuesB.addTable(rowB, this.tableBlockLeftOneCol)

      let slideQuesC = pres.addSlide('O_SLIDE_Photo')
      slideQuesC.addImage({
        path: '../img/cScan/question_e.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesC.addText(
        [{ text: this.sheetText['ques-c'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-c'].text_a }])
      rowC.push([{ text: this.sheetText['ques-c'].text_b }])
      if (this.dataScan.sl_b > 75) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_d
          }
        ])
      }
      if (this.dataScan.sl_b > 0 && this.dataScan.sl_b <= 75) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_e
          }
        ])
      }
      if (this.dataScan.sl_b === 0) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_f
          }
        ])
      }
      if (this.dataScan.sl_b < 0 && this.dataScan.sl_b >= -75) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_g
          }
        ])
      }
      if (this.dataScan.sl_b < -75) {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_h
          }
        ])
      }
      rowC.push([{ text: '' }])
      rowC.push([{ text: this.sheetText['ques-c'].text_i }])
      if (this.dataScan.sl_b > 0) {
        rowC.push([{ text: this.sheetText['ques-c'].opt_a }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_b }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_c }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_d }])
      }
      if (this.dataScan.sl_b < 0) {
        rowC.push([{ text: this.sheetText['ques-c'].opt_e }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_f }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_g }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_h }])
      }
      if (this.dataScan.sl_b === 0) {
        rowC.push([{ text: this.sheetText['ques-c'].opt_i }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_j }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_k }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_l }])
      }

      slideQuesC.addTable(rowC, this.tableBlockLeftOneCol)

      let slideQuesD = pres.addSlide('O_SLIDE_Photo')
      slideQuesD.addImage({
        path: '../img/aScan/propC.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesD.addText(
        [{ text: this.sheetText['ques-d'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-d'].text_a }])
      rowD.push([{ text: this.sheetText['ques-d'].text_b }])
      if (this.dataScan.sl_c > 75) {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_d
          }
        ])
      }
      if (this.dataScan.sl_c > 0 && this.dataScan.sl_c <= 75) {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_e
          }
        ])
      }
      if (this.dataScan.sl_c === 0) {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_f
          }
        ])
      }
      if (this.dataScan.sl_c < 0 && this.dataScan.sl_c >= -75) {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_g
          }
        ])
      }
      if (this.dataScan.sl_c < -75) {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_h
          }
        ])
      }
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_i }])
      if (this.dataScan.sl_c > 0) {
        rowD.push([{ text: this.sheetText['ques-d'].opt_a }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_b }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_c }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_d }])
      }
      if (this.dataScan.sl_c < 0) {
        rowD.push([{ text: this.sheetText['ques-d'].opt_e }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_f }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_g }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_h }])
      }
      if (this.dataScan.sl_c === 0) {
        rowD.push([{ text: this.sheetText['ques-d'].opt_i }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_j }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_k }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_l }])
      }

      slideQuesD.addTable(rowD, this.tableBlockLeftOneCol)

      let slideQuesE = pres.addSlide('O_SLIDE_Photo')
      slideQuesE.addImage({
        path: '../img/cScan/question_h.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesE.addText(
        [{ text: this.sheetText['ques-e'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowE = []
      rowE.push([{ text: this.sheetText['ques-e'].text_a }])
      rowE.push([{ text: this.sheetText['ques-e'].text_b }])
      rowE.push([{ text: '' }])

      if (this.dataScan.question_c === 'ke1') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_d
          }
        ])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_e
          }
        ])
      }
      rowE.push([{ text: this.sheetText['ques-e'].text_f }])
      rowE.push([{ text: this.sheetText['ques-e'].text_g + this.dataScan.text_a }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_h }])
      if (this.dataScan.question_a === 'ke1') {
        rowE.push([{ text: this.sheetText['ques-e'].opt_a }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_b }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_c }])
      } else {
        rowE.push([{ text: this.sheetText['ques-e'].opt_d }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_e }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_f }])
      }

      slideQuesE.addTable(rowE, this.tableBlockLeftOneCol)

      let slideQuesF = pres.addSlide('O_SLIDE_Photo')
      slideQuesF.addImage({
        path: '../img/nScan/familie_groen.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesF.addText(
        [{ text: this.sheetText['ques-f'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowF = []
      rowF.push([{ text: this.sheetText['ques-f'].text_a }])
      rowF.push([{ text: this.sheetText['ques-f'].text_b }])
      rowF.push([{ text: '' }])

      if (this.dataScan.question_d === 'ke1') {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_c + this.sheetText['ques-f'].text_d
          }
        ])
      }
      if (this.dataScan.question_d === 'ke2') {
        rowF.push([
          {
            text: this.sheetText['ques-f'].text_c + this.sheetText['ques-f'].text_e
          }
        ])
      }
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['ques-f'].text_h }])
      if (this.dataScan.question_d === 'ke1') {
        rowF.push([{ text: this.sheetText['ques-f'].opt_a }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_b }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_c }])
      } else {
        rowF.push([{ text: this.sheetText['ques-f'].opt_d }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_e }])
        rowF.push([{ text: this.sheetText['ques-f'].opt_f }])
      }

      slideQuesF.addTable(rowF, this.tableBlockLeftOneCol)

      let slideQuesG = pres.addSlide('O_SLIDE_Photo')
      slideQuesG.addImage({
        path: '../img/nScan/update_watch.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesG.addText(
        [{ text: this.sheetText['ques-g'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowG = []
      rowG.push([{ text: this.sheetText['ques-g'].text_a }])
      rowG.push([{ text: this.sheetText['ques-g'].text_b }])
      rowG.push([{ text: '' }])

      if (this.dataScan.question_e === 'ke1') {
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_c + this.sheetText['ques-g'].text_d
          }
        ])
      }
      if (this.dataScan.question_e === 'ke2') {
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_c + this.sheetText['ques-g'].text_e
          }
        ])
      }
      if (this.dataScan.question_e === 'kef') {
        rowG.push([
          {
            text: this.sheetText['ques-g'].text_c + this.sheetText['ques-g'].text_f
          }
        ])
      }
      rowG.push([{ text: '' }])
      rowG.push([{ text: this.sheetText['ques-g'].text_h }])
      if (this.dataScan.question_e === 'ke1') {
        rowG.push([{ text: this.sheetText['ques-g'].opt_a }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_b }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_c }])
      } else if (this.dataScan.question_e === 'ke2') {
        rowG.push([{ text: this.sheetText['ques-g'].opt_d }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_e }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_f }])
      } else {
        rowG.push([{ text: this.sheetText['ques-g'].opt_g }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_h }])
        rowG.push([{ text: this.sheetText['ques-g'].opt_i }])
      }

      slideQuesG.addTable(rowG, this.tableBlockLeftOneCol)

      let slideQuesH = pres.addSlide('O_SLIDE_Photo')
      slideQuesH.addImage({
        path: '../img/cScan/question_f.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesH.addText(
        [{ text: this.sheetText['ques-h'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowH = []
      rowH.push([{ text: this.sheetText['ques-h'].text_a }])
      rowH.push([{ text: this.sheetText['ques-h'].text_b }])
      rowH.push([{ text: '' }])

      if (this.dataScan.question_f === 'ke1') {
        rowH.push([
          {
            text: this.sheetText['ques-h'].text_c + this.sheetText['ques-h'].text_d
          }
        ])
      }
      if (this.dataScan.question_f === 'ke2') {
        rowH.push([
          {
            text: this.sheetText['ques-h'].text_c + this.sheetText['ques-h'].text_e
          }
        ])
      }
      rowH.push([{ text: '' }])
      rowH.push([{ text: this.sheetText['ques-h'].text_h }])
      if (this.dataScan.question_f === 'ke1') {
        rowH.push([{ text: this.sheetText['ques-h'].opt_a }])
        rowH.push([{ text: this.sheetText['ques-h'].opt_b }])
        rowH.push([{ text: this.sheetText['ques-h'].opt_c }])
      } else {
        rowH.push([{ text: this.sheetText['ques-h'].opt_d }])
        rowH.push([{ text: this.sheetText['ques-h'].opt_e }])
        rowH.push([{ text: this.sheetText['ques-h'].opt_f }])
      }

      slideQuesH.addTable(rowH, this.tableBlockLeftOneCol)

      let slideQuesI = pres.addSlide('O_SLIDE_Photo')
      slideQuesI.addImage({
        path: '../img/nScan/bulb.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesI.addText(
        [{ text: this.sheetText['ques-i'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowI = []
      rowI.push([{ text: this.sheetText['ques-i'].text_a }])
      rowI.push([{ text: this.sheetText['ques-i'].text_b }])
      rowI.push([{ text: '' }])

      if (this.dataScan.question_g === 'ke1') {
        rowI.push([
          {
            text: this.sheetText['ques-i'].text_c + this.sheetText['ques-i'].text_d
          }
        ])
      }
      if (this.dataScan.question_g === 'ke2') {
        rowI.push([
          {
            text: this.sheetText['ques-i'].text_c + this.sheetText['ques-i'].text_e
          }
        ])
      }
      rowI.push([{ text: '' }])
      rowI.push([{ text: this.sheetText['ques-i'].text_h }])
      if (this.dataScan.question_g === 'ke1') {
        rowI.push([{ text: this.sheetText['ques-i'].opt_a }])
        rowI.push([{ text: this.sheetText['ques-i'].opt_b }])
        rowI.push([{ text: this.sheetText['ques-i'].opt_c }])
      } else {
        rowI.push([{ text: this.sheetText['ques-i'].opt_d }])
        rowI.push([{ text: this.sheetText['ques-i'].opt_e }])
        rowI.push([{ text: this.sheetText['ques-i'].opt_f }])
      }

      slideQuesI.addTable(rowI, this.tableBlockLeftOneCol)

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
