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
import SheetText from '@/json/scan/mscan.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideM from '@/mixin/defaultSlideM'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportMscan',
  components: { FormalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideM, defaultSlideAll],
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
      pres.defineSlideMaster(this.dataScanM)
      pres.defineSlideMaster(this.dataScanM_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'GROEI', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('M_SLIDE_Photo')
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

      let slideQuesA = pres.addSlide('M_SLIDE_Photo')
      slideQuesA.addImage({
        path: '../img/dScan/DquestionA.png',
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
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-a'].text_c }])
      if (this.dataScan.question_a === 'ke1') {
        rowA.push([{ text: this.sheetText['ques-a'].text_d }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_q }])
        rowA.push([{ text: this.dataScan.text_a }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_h }])
        rowA.push([{ text: this.sheetText['ques-a'].text_i }])
        rowA.push([{ text: this.sheetText['ques-a'].text_j }])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowA.push([{ text: this.sheetText['ques-a'].text_e }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_q }])
        rowA.push([{ text: this.dataScan.text_a }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_h }])
        rowA.push([{ text: this.sheetText['ques-a'].text_k }])
        rowA.push([{ text: this.sheetText['ques-a'].text_l }])
      }
      if (this.dataScan.question_a === 'ke3') {
        rowA.push([{ text: this.sheetText['ques-a'].text_f }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_q }])
        rowA.push([{ text: this.dataScan.text_a }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_h }])
        rowA.push([{ text: this.sheetText['ques-a'].text_m }])
        rowA.push([{ text: this.sheetText['ques-a'].text_n }])
      }
      if (this.dataScan.question_a === 'ke4') {
        rowA.push([{ text: this.sheetText['ques-a'].text_g }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_q }])
        rowA.push([{ text: this.dataScan.text_a }])
        rowA.push([{ text: '' }])
        rowA.push([{ text: this.sheetText['ques-a'].text_h }])
        rowA.push([{ text: this.sheetText['ques-a'].text_o }])
        rowA.push([{ text: this.sheetText['ques-a'].text_p }])
      }
      slideQuesA.addTable(rowA, this.tableBlockLeftOneCol)

      let slideQuesB = pres.addSlide('M_SLIDE_Photo')
      slideQuesB.addText(
        [{ text: this.sheetText['ques-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesB.addImage({
        path: '../img/dScan/DquestionB.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-b'].text_b, options: { colspan: 2 } }])
      rowB.push([
        { text: this.sheetText['ques-b'].text_r, options: { bold: true } },
        {
          text: this.sheetText['ques-b'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])

      rowB.push([
        { text: this.sheetText['ques-b'].text_e },
        { text: this.dataScan.sl_a, options: { align: 'center' } }
      ])
      rowB.push([
        { text: this.sheetText['ques-b'].text_f },
        { text: this.dataScan.sl_b, options: { align: 'center' } }
      ])
      rowB.push([
        { text: this.sheetText['ques-b'].text_g },
        { text: this.dataScan.sl_c, options: { align: 'center' } }
      ])
      rowB.push([
        { text: this.sheetText['ques-b'].text_h },
        { text: this.dataScan.sl_d, options: { align: 'center' } }
      ])
      rowB.push([
        { text: this.sheetText['ques-b'].text_i },
        { text: this.dataScan.sl_e, options: { align: 'center' } }
      ])
      rowB.push([
        { text: this.sheetText['ques-b'].text_j },
        { text: this.dataScan.sl_f, options: { align: 'center' } }
      ])
      rowB.push([
        {
          text: this.sheetText['ques-b'].text_k,
          options: { colspan: 2, bold: true }
        }
      ])
      rowB.push([{ text: this.dataScan.text_b, options: { colspan: 2 } }])
      rowB.push([
        {
          text: this.sheetText['ques-b'].text_d,
          options: { colspan: 2, bold: true }
        }
      ])
      if (this.dataScan.sl_a >= 7) {
        rowB.push([{ text: this.sheetText['ques-b'].text_l, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_b >= 7) {
        rowB.push([{ text: this.sheetText['ques-b'].text_m, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_c >= 7) {
        rowB.push([{ text: this.sheetText['ques-b'].text_n, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_d >= 7) {
        rowB.push([{ text: this.sheetText['ques-b'].text_o, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_e >= 7) {
        rowB.push([{ text: this.sheetText['ques-b'].text_p, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_f >= 7) {
        rowB.push([{ text: this.sheetText['ques-b'].text_q, options: { colspan: 2 } }])
      }

      slideQuesB.addTable(rowB, this.tableBlockLeftTwoCol)

      let slideQuesC = pres.addSlide('M_SLIDE_Photo')
      slideQuesC.addText(
        [{ text: this.sheetText['ques-c'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesC.addImage({
        path: '../img/dScan/DquestionB.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-c'].text_b, options: { colspan: 2 } }])
      rowC.push([
        { text: this.sheetText['ques-c'].text_r, options: { bold: true } },
        {
          text: this.sheetText['ques-c'].text_c,
          options: { bold: true, align: 'center' }
        }
      ])

      rowC.push([
        { text: this.sheetText['ques-c'].text_e },
        { text: this.dataScan.sl_g, options: { align: 'center' } }
      ])
      rowC.push([
        { text: this.sheetText['ques-c'].text_f },
        { text: this.dataScan.sl_h, options: { align: 'center' } }
      ])
      rowC.push([
        { text: this.sheetText['ques-c'].text_g },
        { text: this.dataScan.sl_i, options: { align: 'center' } }
      ])
      rowC.push([
        { text: this.sheetText['ques-c'].text_h },
        { text: this.dataScan.sl_j, options: { align: 'center' } }
      ])
      rowC.push([
        { text: this.sheetText['ques-c'].text_i },
        { text: this.dataScan.sl_k, options: { align: 'center' } }
      ])
      rowC.push([
        { text: this.sheetText['ques-c'].text_j },
        { text: this.dataScan.sl_l, options: { align: 'center' } }
      ])
      rowC.push([
        {
          text: this.sheetText['ques-c'].text_k,
          options: { colspan: 2, bold: true }
        }
      ])
      rowC.push([{ text: this.dataScan.text_c, options: { colspan: 2 } }])
      rowC.push([
        {
          text: this.sheetText['ques-c'].text_d,
          options: { colspan: 2, bold: true }
        }
      ])
      if (this.dataScan.sl_g >= 7) {
        rowC.push([{ text: this.sheetText['ques-c'].text_l, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_h >= 7) {
        rowC.push([{ text: this.sheetText['ques-c'].text_m, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_i >= 7) {
        rowC.push([{ text: this.sheetText['ques-c'].text_n, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_j >= 7) {
        rowC.push([{ text: this.sheetText['ques-c'].text_o, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_k >= 7) {
        rowC.push([{ text: this.sheetText['ques-c'].text_p, options: { colspan: 2 } }])
      }
      if (this.dataScan.sl_l >= 7) {
        rowC.push([{ text: this.sheetText['ques-c'].text_q, options: { colspan: 2 } }])
      }

      slideQuesC.addTable(rowC, this.tableBlockLeftTwoCol)

      let slideQuesD = pres.addSlide('M_SLIDE_Photo')
      slideQuesD.addImage({
        path: '../img/dScan/DquestionD.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesD.addText(
        [{ text: this.sheetText['ques-d'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-d'].text_b }])
      rowD.push([{ text: this.sheetText['ques-d'].text_a }])
      rowD.push([{ text: this.sheetText['ques-d'].text_c }])
      if (this.dataScan.question_b === 'ke1') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_e + this.sheetText['ques-d'].text_f
          }
        ])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_e + this.sheetText['ques-d'].text_f
          }
        ])
      }
      rowD.push([{ text: this.sheetText['ques-d'].text_d }])
      if (this.dataScan.question_c === 'ke1') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_e + this.sheetText['ques-d'].text_f
          }
        ])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_e + this.sheetText['ques-d'].text_g
          }
        ])
      }
      rowD.push([{ text: '' }])
      rowD.push([
        {
          text: this.sheetText['ques-d'].text_m + this.dataScan.text_d
        }
      ])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_h }])
      if (this.dataScan.question_b === 'ke1') {
        rowD.push([{ text: this.sheetText['ques-d'].text_i }])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowD.push([{ text: this.sheetText['ques-d'].text_j }])
      }
      if (this.dataScan.question_c === 'ke1') {
        rowD.push([{ text: this.sheetText['ques-d'].text_k }])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowD.push([{ text: this.sheetText['ques-d'].text_l }])
      }
      slideQuesD.addTable(rowD, this.tableBlockLeftOneCol)

      let slideQuesE = pres.addSlide('M_SLIDE_Photo')
      slideQuesE.addImage({
        path: '../img/dScan/DquestionD.png',
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
      rowE.push([
        {
          text: this.sheetText['ques-e'].text_c + this.dataScan.text_e
        }
      ])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_d }])

      if (this.dataScan.question_d === 'ke1') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_e
          }
        ])
        rowE.push([{ text: '' }])
        rowE.push([{ text: this.sheetText['ques-e'].text_g }])
      }
      if (this.dataScan.question_d === 'ke2') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_f
          }
        ])
        rowE.push([{ text: '' }])
        rowE.push([{ text: this.sheetText['ques-e'].text_h }])
      }
      slideQuesE.addTable(rowE, this.tableBlockLeftOneCol)

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
