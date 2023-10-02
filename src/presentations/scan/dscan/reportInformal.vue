<template>
  <div>
    <InformalButton @click="createPowerPoint"></InformalButton>
  </div>
</template>

<script>
import InformalButton from '@/components/button/InformalButton.vue'
import final from '@/json/PowerPoint/final.json'
import firstPage from '@/json/PowerPoint/firstPage.json'
import header from '@/json/PowerPoint/header.json'
import table from '@/json/PowerPoint/table.json'
import textBlock from '@/json/PowerPoint/textblock.json'
import varFonts from '@/json/PowerPoint/varFonts.json'
import SheetText from '@/json/scan/dscanInf.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideD from '@/mixin/defaultSlideD'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportDscan',
  components: { InformalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideAll, defaultSlideD],
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
      pres.defineSlideMaster(this.dataScanD)
      pres.defineSlideMaster(this.dataScanD_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Sturen op resultaat', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('D_SLIDE_Photo')
      slideIntroA.addText(
        [{ text: this.sheetText['intro-1'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideIntroA.addImage({
        path: '../img/dScan/Dintro1.jpg',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideIntroA.addText(
        [
          {
            text: this.sheetText['intro-1'].text_a,
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['intro-1'].text_b,
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['intro-1'].text_c,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['intro-1'].text_d,
            options: this.fontTextBlock
          }
        ],
        this.placeTextBlockLeft
      )

      let slideIntroB = pres.addSlide('D_SLIDE_Photo')
      slideIntroB.addText(
        [{ text: this.sheetText['intro-2'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideIntroB.addImage({
        path: '../img/dScan/Dintro2.jpg',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideIntroB.addText(
        [
          {
            text: this.sheetText['intro-2'].text_a + this.sheetText['intro-2'].text_b,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['intro-2'].text_i,
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['intro-2'].text_c,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['intro-2'].text_d,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['intro-2'].text_e,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['intro-2'].text_f,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['intro-2'].text_g,
            options: this.fontTextBlockBullet
          },
          {
            text: this.sheetText['intro-2'].text_h,
            options: this.fontTextBlockBullet
          }
        ],
        this.placeTextBlockLeft
      )

      let slideQuesA = pres.addSlide('D_SLIDE_Photo')
      slideQuesA.addImage({
        path: '../img/dScan/DquestionA.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesA.addText(
        [{ text: this.sheetText['ques-1'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowA = []
      rowA.push([{ text: this.sheetText['ques-1'].text_a }])
      rowA.push([{ text: this.sheetText['ques-1'].text_b }])
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-1'].text_c }])
      if (this.dataScan.question_a === 'ke1') {
        rowA.push([{ text: this.sheetText['ques-1'].text_d }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-1'].text_h }])
        rowA.push([{ text: this.sheetText['ques-1'].text_i }])
        rowA.push([{ text: this.sheetText['ques-1'].text_j }])
        rowA.push([{ text: this.sheetText['ques-1'].text_k }])
        rowA.push([{ text: this.sheetText['ques-1'].text_l }])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowA.push([{ text: this.sheetText['ques-1'].text_e }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-1'].text_h }])
        rowA.push([{ text: this.sheetText['ques-1'].text_m }])
        rowA.push([{ text: this.sheetText['ques-1'].text_n }])
        rowA.push([{ text: this.sheetText['ques-1'].text_o }])
        rowA.push([{ text: this.sheetText['ques-1'].text_p }])
      }
      if (this.dataScan.question_a === 'ke3') {
        rowA.push([{ text: this.sheetText['ques-1'].text_f }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-1'].text_h }])
        rowA.push([{ text: this.sheetText['ques-1'].text_q }])
        rowA.push([{ text: this.sheetText['ques-1'].text_r }])
        rowA.push([{ text: this.sheetText['ques-1'].text_s }])
        rowA.push([{ text: this.sheetText['ques-1'].text_t }])
      }
      if (this.dataScan.question_a === 'ke4') {
        rowA.push([{ text: this.sheetText['ques-1'].text_g }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-1'].text_h }])
        rowA.push([{ text: this.sheetText['ques-1'].text_u }])
        rowA.push([{ text: this.sheetText['ques-1'].text_v }])
        rowA.push([{ text: this.sheetText['ques-1'].text_w }])
        rowA.push([{ text: this.sheetText['ques-1'].text_x }])
        rowA.push([{ text: this.sheetText['ques-1'].text_y }])
      }
      if (this.dataScan.question_a === 'ke5') {
        rowA.push([{ text: this.sheetText['ques-1'].text_g }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-1'].text_z + this.dataScan.text_a }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-1'].text_h }])
      }
      slideQuesA.addTable(rowA, this.tableBlockLeftOneCol)

      let slideQuesB = pres.addSlide('D_SLIDE_Photo')
      slideQuesB.addImage({
        path: '../img/dScan/DquestionB.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesB.addText(
        [{ text: this.sheetText['ques-2'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-2'].text_a, options: { colspan: 2 } }])
      rowB.push([{ text: '', options: { colspan: 2 } }])
      rowB.push([
        { text: this.sheetText['ques-2'].text_b, options: { bold: true } },
        {
          text: this.sheetText['ques-2'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])
      if (this.dataScan.cb_a) {
        rowB.push([
          { text: this.sheetText['ques-2'].text_d },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_a) {
        rowB.push([
          { text: this.sheetText['ques-2'].text_d },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_b) {
        rowB.push([
          { text: this.sheetText['ques-2'].text_e },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_b) {
        rowB.push([
          { text: this.sheetText['ques-2'].text_e },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_c) {
        rowB.push([
          { text: this.sheetText['ques-2'].text_f },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_c) {
        rowB.push([
          { text: this.sheetText['ques-2'].text_f },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_d) {
        rowB.push([
          {
            text: this.sheetText['ques-2'].text_g + this.dataScan.text_b,
            options: { colspan: 2 }
          }
        ])
      }
      slideQuesB.addTable(rowB, this.tableBlockLeftTwoCol)

      let slideQuesC = pres.addSlide('D_SLIDE_Photo')
      slideQuesC.addImage({
        path: '../img/dScan/DquestionC.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesC.addText(
        [{ text: this.sheetText['ques-3'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-3'].text_a, options: { colspan: 2 } }])
      rowC.push([{ text: '', options: { colspan: 2 } }])
      rowC.push([
        { text: this.sheetText['ques-3'].text_b, options: { bold: true } },
        {
          text: this.sheetText['ques-3'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])
      if (this.dataScan.cb_e) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_d },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_e) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_d },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_f) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_e },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_f) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_e },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_g) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_f },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_g) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_f },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_h) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_g },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_h) {
        rowC.push([
          { text: this.sheetText['ques-3'].text_g },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_i) {
        rowC.push([
          {
            text: this.sheetText['ques-3'].text_h + this.dataScan.text_c,
            options: { colspan: 2 }
          }
        ])
      }
      slideQuesC.addTable(rowC, this.tableBlockLeftTwoCol)

      let slideQuesD = pres.addSlide('D_SLIDE_Photo')
      slideQuesD.addImage({
        path: '../img/dScan/DquestionD.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesD.addText(
        [{ text: this.sheetText['ques-4'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-4'].text_a }])
      rowD.push([{ text: this.sheetText['ques-4'].text_b }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-4'].text_c }])
      if (this.dataScan.question_b === 'ke1') {
        rowD.push([{ text: this.sheetText['ques-4'].text_d }])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-4'].text_f }])
        rowD.push([{ text: this.sheetText['ques-4'].text_g }])
        rowD.push([{ text: this.sheetText['ques-4'].text_h }])
        rowD.push([{ text: this.sheetText['ques-4'].text_i }])
        rowD.push([{ text: this.sheetText['ques-4'].text_j }])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowD.push([{ text: this.sheetText['ques-4'].text_e }])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-4'].text_f }])
        rowD.push([{ text: this.sheetText['ques-4'].text_k }])
        rowD.push([{ text: this.sheetText['ques-4'].text_l }])
        rowD.push([{ text: this.sheetText['ques-4'].text_m }])
        rowD.push([{ text: this.sheetText['ques-4'].text_n }])
      }
      slideQuesD.addTable(rowD, this.tableBlockLeftOneCol)

      let slideQuesE = pres.addSlide('D_SLIDE_Photo')
      slideQuesE.addImage({
        path: '../img/dScan/DquestionE.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesE.addText(
        [{ text: this.sheetText['ques-5'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowE = []
      rowE.push([{ text: this.sheetText['ques-5'].text_a }])
      rowE.push([{ text: this.sheetText['ques-5'].text_b }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-5'].text_c }])
      if (this.dataScan.question_c === 'ke1') {
        rowE.push([{ text: this.sheetText['ques-5'].text_d }])
        rowE.push([{ text: '' }])
        rowE.push([{ text: this.sheetText['ques-5'].text_m }])
        rowE.push([{ text: this.sheetText['ques-5'].text_g }])
        rowE.push([{ text: this.sheetText['ques-5'].text_h }])
        rowE.push([{ text: this.sheetText['ques-5'].text_i }])
        rowE.push([{ text: this.sheetText['ques-5'].text_j }])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowE.push([{ text: this.sheetText['ques-5'].text_e }])
        rowE.push([{ text: '' }])
        rowE.push([{ text: this.sheetText['ques-5'].text_m }])
        rowE.push([{ text: this.sheetText['ques-5'].text_h }])
        rowE.push([{ text: this.sheetText['ques-5'].text_i }])
        rowE.push([{ text: this.sheetText['ques-5'].text_n }])
      }
      if (this.dataScan.question_c === 'ke3') {
        rowE.push([{ text: this.sheetText['ques-5'].text_f }])
        rowE.push([{ text: '' }])
        rowE.push([{ text: this.sheetText['ques-5'].text_m }])
        rowE.push([{ text: this.sheetText['ques-5'].text_k }])
        rowE.push([{ text: this.sheetText['ques-5'].text_l }])
      }
      slideQuesE.addTable(rowE, this.tableBlockLeftOneCol)

      let slideQuesF = pres.addSlide('D_SLIDE_Photo')
      slideQuesF.addImage({
        path: '../img/dScan/DquestionF.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesF.addText(
        [{ text: this.sheetText['ques-6'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowF = []
      rowF.push([{ text: this.sheetText['ques-6'].text_a }])
      rowF.push([{ text: this.sheetText['ques-6'].text_b }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['ques-6'].text_c }])
      if (this.dataScan.question_d === 'ke1') {
        rowF.push([{ text: this.sheetText['ques-6'].text_d }])
        rowF.push([{ text: this.sheetText['ques-6'].text_h }])
        rowF.push([{ text: this.sheetText['ques-6'].text_i }])
        rowF.push([{ text: this.sheetText['ques-6'].text_j }])
        rowF.push([{ text: this.sheetText['ques-6'].text_k }])
        rowF.push([{ text: this.sheetText['ques-6'].text_l }])
      }
      if (this.dataScan.question_d === 'ke2') {
        rowF.push([{ text: this.sheetText['ques-6'].text_e }])
        rowF.push([{ text: this.sheetText['ques-6'].text_h }])
        rowF.push([{ text: this.sheetText['ques-6'].text_i }])
        rowF.push([{ text: this.sheetText['ques-6'].text_m }])
        rowF.push([{ text: this.sheetText['ques-6'].text_l }])
        rowF.push([{ text: this.sheetText['ques-6'].text_n }])
      }
      if (this.dataScan.question_d === 'ke3') {
        rowF.push([{ text: this.sheetText['ques-6'].text_f }])
        rowF.push([{ text: this.sheetText['ques-6'].text_h }])
        rowF.push([{ text: this.sheetText['ques-6'].text_o }])
        rowF.push([{ text: this.sheetText['ques-6'].text_p }])
        rowF.push([{ text: this.sheetText['ques-6'].text_q }])
      }
      if (this.dataScan.question_d === 'ke4') {
        rowF.push([{ text: this.sheetText['ques-6'].text_g }])
        rowF.push([{ text: this.sheetText['ques-6'].text_h }])
        rowF.push([{ text: this.sheetText['ques-6'].text_r }])
        rowF.push([{ text: this.sheetText['ques-6'].text_s }])
        rowF.push([{ text: this.sheetText['ques-6'].text_q }])
      }
      slideQuesF.addTable(rowF, this.tableBlockLeftOneCol)

      let slideQuesG = pres.addSlide('D_SLIDE_Photo')
      slideQuesG.addImage({
        path: '../img/dScan/DquestionG.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesG.addText(
        [{ text: this.sheetText['ques-7'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowG = []
      rowG.push([{ text: this.sheetText['ques-7'].text_a }])
      rowG.push([{ text: this.sheetText['ques-7'].text_b }])
      rowG.push([{ text: '' }])
      rowG.push([{ text: this.sheetText['ques-7'].text_c }])
      if (this.dataScan.question_e === 'ke1') {
        rowG.push([{ text: this.sheetText['ques-7'].text_d }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-7'].text_t }])
        rowG.push([{ text: this.sheetText['ques-7'].text_h }])
        rowG.push([{ text: this.sheetText['ques-7'].text_i }])
        rowG.push([{ text: this.sheetText['ques-7'].text_j }])
        rowG.push([{ text: this.sheetText['ques-7'].text_k }])
      }
      if (this.dataScan.question_e === 'ke2') {
        rowG.push([{ text: this.sheetText['ques-7'].text_e }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-7'].text_t }])
        rowG.push([{ text: this.sheetText['ques-7'].text_h }])
        rowG.push([{ text: this.sheetText['ques-7'].text_i }])
        rowG.push([{ text: this.sheetText['ques-7'].text_j }])
        rowG.push([{ text: this.sheetText['ques-7'].text_k }])
      }
      if (this.dataScan.question_e === 'ke3') {
        rowG.push([{ text: this.sheetText['ques-7'].text_f }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-7'].text_t }])
        rowG.push([{ text: this.sheetText['ques-7'].text_l }])
        rowG.push([{ text: this.sheetText['ques-7'].text_m }])
        rowG.push([{ text: this.sheetText['ques-7'].text_n }])
        rowG.push([{ text: this.sheetText['ques-7'].text_o }])
      }
      if (this.dataScan.question_e === 'ke4') {
        rowG.push([{ text: this.sheetText['ques-7'].text_g }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-7'].text_t }])
        rowG.push([{ text: this.sheetText['ques-7'].text_p }])
        rowG.push([{ text: this.sheetText['ques-7'].text_q }])
        rowG.push([{ text: this.sheetText['ques-7'].text_r }])
        rowG.push([{ text: this.sheetText['ques-7'].text_s }])
      }
      slideQuesG.addTable(rowG, this.tableBlockLeftOneCol)

      let slideQuesH = pres.addSlide('D_SLIDE_Photo')
      slideQuesH.addImage({
        path: '../img/dScan/DquestionH.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesH.addText(
        [{ text: this.sheetText['ques-8'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowH = []
      rowH.push([{ text: this.sheetText['ques-8'].text_a, options: { colspan: 2 } }])
      rowH.push([{ text: '', options: { colspan: 2 } }])
      rowH.push([
        { text: this.sheetText['ques-8'].text_b, options: { bold: true } },
        {
          text: this.sheetText['ques-8'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])
      if (this.dataScan.cb_j) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_d },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_j) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_d },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_k) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_e },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_k) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_e },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_l) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_f },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_l) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_f },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_m) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_g },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_m) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_g },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_n) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_h },
          { text: 'Ja', options: { align: 'center' } }
        ])
      }
      if (!this.dataScan.cb_n) {
        rowH.push([
          { text: this.sheetText['ques-8'].text_h },
          { text: 'Nee', options: { align: 'center' } }
        ])
      }
      if (this.dataScan.cb_o) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_i + this.dataScan.text_c,
            options: { colspan: 2 }
          }
        ])
      }
      slideQuesH.addTable(rowH, this.tableBlockLeftTwoCol)

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
