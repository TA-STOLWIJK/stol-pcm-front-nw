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
import SheetText from '@/json/scan/jscanInf.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideJ from '@/mixin/defaultSlideJ'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportJscanInformal',
  components: { InformalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideJ, defaultSlideAll],
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
      pres.defineSlideMaster(this.dataScanJ)
      pres.defineSlideMaster(this.dataScanJ_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Digitale strategie', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('J_SLIDE_Photo')
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

      let slideIntroB = pres.addSlide('J_SLIDE_Photo')
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

      let slideQuesA = pres.addSlide('J_SLIDE_Photo')
      slideQuesA.addImage({
        path: '../img/dScan/DquestionB.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideQuesA.addText(
        [{ text: this.sheetText['ques-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowA = []
      rowA.push([{ text: this.sheetText['ques-a'].text_a, options: { colspan: 2 } }])
      rowA.push([
        { text: this.sheetText['ques-a'].text_c },
        { text: this.dataScan.sl_a, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-a'].text_d },
        { text: this.dataScan.sl_b, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-a'].text_e },
        { text: this.dataScan.sl_c, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-a'].text_f },
        { text: this.dataScan.sl_d, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-a'].text_g },
        { text: this.dataScan.sl_e, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-a'].text_h },
        { text: this.dataScan.sl_f, options: { align: 'center' } }
      ])
      slideQuesA.addTable(rowA, this.tableBlockLeftTwoCol)

      let slideQuesB = pres.addSlide('J_SLIDE')
      slideQuesB.addText(
        [{ text: this.sheetText['ques-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-b'].intro, options: this.fontTextBlock }])
      rowB.push([{ text: '' }])
      rowB.push([{ text: this.sheetText['ques-b'].text_a, options: this.fontTextBlock }])
      rowB.push([{ text: '' }])

      if (this.dataScan.question_a === 'ke1') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_c + this.sheetText['ques-b'].text_d,
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
        rowB.push([{ text: this.sheetText['ques-b'].opt_c, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_c + this.sheetText['ques-b'].text_e,
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
        rowB.push([{ text: this.sheetText['ques-b'].opt_d, options: this.fontTextBlock }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_e, options: this.fontTextBlock }])
        rowB.push([{ text: this.sheetText['ques-b'].opt_f, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_a === 'ke3') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_c + this.sheetText['ques-b'].text_f,
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
        rowB.push([{ text: this.sheetText['ques-b'].opt_i, options: this.fontTextBlock }])
      }
      slideQuesB.addTable(rowB, this.placeTableBlock)

      let slideQuesC = pres.addSlide('J_SLIDE')
      slideQuesC.addText(
        [{ text: this.sheetText['ques-c'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-c'].intro, options: this.fontTextBlock }])
      rowC.push([{ text: '' }])
      rowC.push([{ text: this.sheetText['ques-c'].text_a, options: this.fontTextBlock }])
      if (this.dataScan.question_b === 'ke1') {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_d,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_e,
            options: this.fontTextBlock
          }
        ])
      }
      rowC.push([{ text: this.sheetText['ques-c'].text_f, options: this.fontTextBlock }])
      if (this.dataScan.question_c === 'ke1') {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_d,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_e,
            options: this.fontTextBlock
          }
        ])
      }
      rowC.push([{ text: '' }])
      rowC.push([{ text: this.sheetText['ques-c'].text_k, options: this.fontTextBlock }])
      if (this.dataScan.question_b === 'ke1' && this.dataScan.question_c === 'ke1') {
        rowC.push([{ text: this.sheetText['ques-c'].opt_a, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_b, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_b === 'ke1' && this.dataScan.question_c === 'ke2') {
        rowC.push([{ text: this.sheetText['ques-c'].opt_c, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_d, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_b === 'ke2' && this.dataScan.question_c === 'ke1') {
        rowC.push([{ text: this.sheetText['ques-c'].opt_e, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_f, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_b === 'ke2' && this.dataScan.question_c === 'ke2') {
        rowC.push([{ text: this.sheetText['ques-c'].opt_g, options: this.fontTextBlock }])
        rowC.push([{ text: this.sheetText['ques-c'].opt_h, options: this.fontTextBlock }])
      }
      slideQuesC.addTable(rowC, this.placeTableBlock)

      let slideQuesD = pres.addSlide('J_SLIDE')
      slideQuesD.addText(
        [{ text: this.sheetText['ques-d'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-d'].intro, options: this.fontTextBlock }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_a, options: this.fontTextBlock }])
      if (this.dataScan.question_d === 'ke1') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_f,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.text_a === '' || this.dataScan.text_a === null) {
          rowD.push([
            {
              text: this.sheetText['ques-d'].text_h + this.sheetText['ques-d'].text_i,
              options: this.fontTextBlock
            }
          ])
        } else {
          rowD.push([
            {
              text: this.sheetText['ques-d'].text_h + this.dataScan.text_a,
              options: this.fontTextBlock
            }
          ])
        }
      }
      if (this.dataScan.question_d === 'ke2') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_e,
            options: this.fontTextBlock
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_g,
            options: this.fontTextBlock
          }
        ])
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_h + this.sheetText['ques-d'].text_e,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.text_a === '' || this.dataScan.text_a === null) {
          rowD.push([
            {
              text: this.sheetText['ques-d'].text_h + this.sheetText['ques-d'].text_i,
              options: this.fontTextBlock
            }
          ])
        } else {
          rowD.push([
            {
              text: this.sheetText['ques-d'].text_h + this.dataScan.text_a,
              options: this.fontTextBlock
            }
          ])
        }
      }

      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_k, options: this.fontTextBlock }])
      if (this.dataScan.question_c === 'ke1') {
        rowD.push([{ text: this.sheetText['ques-d'].opt_a, options: this.fontTextBlock }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_b, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowD.push([{ text: this.sheetText['ques-d'].opt_c, options: this.fontTextBlock }])
        rowD.push([{ text: this.sheetText['ques-d'].opt_d, options: this.fontTextBlock }])
      }
      slideQuesD.addTable(rowD, this.placeTableBlock)

      let slideQuesE = pres.addSlide('J_SLIDE')
      slideQuesE.addText(
        [{ text: this.sheetText['ques-e'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowE = []
      rowE.push([{ text: this.sheetText['ques-e'].intro, options: this.fontTextBlock }])
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_a, options: this.fontTextBlock }])
      if (this.dataScan.text_b === '' || this.dataScan.text_b === null) {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_d,
            options: this.fontTextBlock
          }
        ])
      } else {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.dataScan.text_b,
            options: this.fontTextBlock
          }
        ])
      }
      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_e, options: this.fontTextBlock }])
      if (this.dataScan.question_e === 'ke1') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_f,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_e === 'ke2') {
        rowE.push([
          {
            text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_g,
            options: this.fontTextBlock
          }
        ])
      }

      rowE.push([{ text: '' }])
      rowE.push([{ text: this.sheetText['ques-e'].text_k, options: this.fontTextBlock }])
      if (this.dataScan.question_c === 'ke1') {
        rowE.push([{ text: this.sheetText['ques-e'].opt_a, options: this.fontTextBlock }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_b, options: this.fontTextBlock }])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowE.push([{ text: this.sheetText['ques-e'].opt_c, options: this.fontTextBlock }])
        rowE.push([{ text: this.sheetText['ques-e'].opt_d, options: this.fontTextBlock }])
      }
      slideQuesE.addTable(rowE, this.placeTableBlock)

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
        'Rapportage_digitale_strategie' +
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
