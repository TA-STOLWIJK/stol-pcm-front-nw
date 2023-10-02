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
import SheetText from '@/json/scan/escanInf.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideE from '@/mixin/defaultSlideE'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportEscanInf',
  components: { InformalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideE, defaultSlideAll],
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
      pres.defineSlideMaster(this.dataScanE)
      pres.defineSlideMaster(this.dataScanE_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Juridische aspecten', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('E_SLIDE_Photo')
      slideIntroA.addImage({
        path: '../img/eScan/eIntro1.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slideIntroA.addText(
        [{ text: this.sheetText['intro-1'].header, options: this.fontHeader }],
        this.placeHeader
      )
      // slideIntroA.addImage({ path: "../img/cScan/question_a.png", placeholder: "Photo" });
      slideIntroA.addText(
        [
          {
            text: this.sheetText['intro-1'].text_a,
            options: this.fontTextBlock
          },
          {
            text: '',
            options: this.fontTextBlock
          },
          {
            text: this.sheetText['intro-1'].text_b,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['intro-1'].text_c,
            options: this.fontTextBlock
          }
        ],
        this.placeTextBlockLeft
      )

      let slideQuesA = pres.addSlide('E_SLIDE_Photo')
      slideQuesA.addText(
        [{ text: this.sheetText['ques-1'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesA.addImage({
        path: '../img/eScan/eQuestionA.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowA = []
      rowA.push([{ text: this.sheetText['ques-1'].text_a }])
      rowA.push([{ text: '' }])
      rowA.push([
        {
          text: this.sheetText['ques-1'].text_b + this.sheetText['ques-1'].text_c
        }
      ])
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-1'].text_d + this.dataScan.sl_a }])
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-1'].text_e }])
      rowA.push([{ text: this.sheetText['ques-1'].text_f }])
      rowA.push([{ text: this.sheetText['ques-1'].text_g }])
      rowA.push([{ text: this.sheetText['ques-1'].text_h }])
      rowA.push([{ text: this.sheetText['ques-1'].text_i }])
      // rowA.push([{ text: this.sheetText["ques-1"].text_j }]);
      // rowA.push([{ text: this.sheetText["ques-1"].text_k }]);
      // rowA.push([{ text: this.sheetText["ques-1"].text_l }]);
      slideQuesA.addTable(rowA, this.tableBlockLeftOneCol)

      let slideQuesB = pres.addSlide('E_SLIDE_Photo')
      slideQuesB.addText(
        [{ text: this.sheetText['ques-2'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesB.addImage({
        path: '../img/eScan/eQuestionB.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-2'].text_a }])
      rowB.push([
        {
          text: this.sheetText['ques-2'].text_b + this.sheetText['ques-2'].text_c
        }
      ])
      rowB.push([{ text: '' }])
      if (this.dataScan.question_a === 'ke1') {
        rowB.push([
          {
            text: this.sheetText['ques-2'].text_d + this.sheetText['extra'].text_a
          }
        ])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowB.push([
          {
            text: this.sheetText['ques-2'].text_d + this.sheetText['extra'].text_b
          }
        ])
      }
      if (this.dataScan.question_a === 'ke3') {
        rowB.push([
          {
            text: this.sheetText['ques-2'].text_d + this.sheetText['extra'].text_c
          }
        ])
      }
      rowB.push([{ text: '' }])
      rowB.push([{ text: this.sheetText['ques-2'].text_e }])
      rowB.push([{ text: this.sheetText['ques-2'].text_h }])
      rowB.push([{ text: this.sheetText['ques-2'].text_i }])
      slideQuesB.addTable(rowB, this.tableBlockLeftOneCol)

      let slideQuesC = pres.addSlide('E_SLIDE_Photo')
      slideQuesC.addText(
        [{ text: this.sheetText['ques-3'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesC.addImage({
        path: '../img/eScan/eQuestionC.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-3'].text_a }])
      rowC.push([{ text: this.sheetText['ques-3'].text_b }])
      rowC.push([{ text: '' }])
      if (this.dataScan.question_b === 'ke1') {
        rowC.push([
          {
            text: this.sheetText['ques-3'].text_c + this.sheetText['extra'].text_ja
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([{ text: this.sheetText['ques-3'].text_d }])
        rowC.push([{ text: this.sheetText['ques-2'].text_g }])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowC.push([
          {
            text: this.sheetText['ques-3'].text_c + this.sheetText['extra'].text_nee
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([{ text: this.sheetText['ques-3'].text_d }])
        rowC.push([{ text: this.sheetText['ques-2'].text_g }])
      }
      if (this.dataScan.question_b === 'ke3') {
        rowC.push([
          {
            text: this.sheetText['ques-3'].text_c + this.sheetText['extra'].text_onb
          }
        ])
        rowC.push([{ text: '' }])
        rowC.push([{ text: this.sheetText['ques-3'].text_d }])
        rowC.push([{ text: this.sheetText['ques-2'].text_g }])
      }
      slideQuesC.addTable(rowC, this.tableBlockLeftOneCol)

      let slideQuesD = pres.addSlide('E_SLIDE_Photo')
      slideQuesD.addText(
        [{ text: this.sheetText['ques-4'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesD.addImage({
        path: '../img/eScan/eQuestionD.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-4'].text_a }])
      rowD.push([
        {
          text: this.sheetText['ques-4'].text_b + this.sheetText['ques-4'].text_c
        }
      ])
      rowD.push([{ text: '' }])
      if (this.dataScan.question_c === 'ke1') {
        rowD.push([
          {
            text: this.sheetText['ques-4'].text_d + this.sheetText['extra'].text_ja
          }
        ])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-4'].text_f }])
        rowD.push([{ text: this.sheetText['ques-4'].text_g }])
        rowD.push([{ text: this.sheetText['ques-4'].text_h }])
        rowD.push([{ text: this.sheetText['ques-4'].text_i }])
        rowD.push([{ text: this.sheetText['ques-4'].text_j }])
      }
      if (this.dataScan.question_c === 'ke2') {
        rowD.push([
          {
            text: this.sheetText['ques-4'].text_d + this.sheetText['extra'].text_nee
          }
        ])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-4'].text_f }])
        rowD.push([{ text: this.sheetText['ques-4'].text_g }])
        rowD.push([{ text: this.sheetText['ques-4'].text_h }])
        rowD.push([{ text: this.sheetText['ques-4'].text_i }])
        rowD.push([{ text: this.sheetText['ques-4'].text_j }])
      }
      if (this.dataScan.question_c === 'ke3') {
        rowD.push([
          {
            text: this.sheetText['ques-4'].text_d + this.sheetText['extra'].text_onb
          }
        ])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-4'].text_f }])
        rowD.push([{ text: this.sheetText['ques-4'].text_g }])
        rowD.push([{ text: this.sheetText['ques-4'].text_h }])
        rowD.push([{ text: this.sheetText['ques-4'].text_i }])
        rowD.push([{ text: this.sheetText['ques-4'].text_j }])
      }
      if (this.dataScan.question_c === 'ke4') {
        rowD.push([
          {
            text: this.sheetText['ques-4'].text_c + this.sheetText['extra'].text_onb
          }
        ])
        rowD.push([{ text: '' }])
        rowD.push([{ text: this.sheetText['ques-4'].text_f }])
        rowD.push([{ text: this.sheetText['ques-4'].text_k }])
      }
      slideQuesD.addTable(rowD, this.tableBlockLeftOneCol)

      let slideQuesE = pres.addSlide('E_SLIDE_Photo')
      slideQuesE.addText(
        [{ text: this.sheetText['ques-5'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesE.addImage({
        path: '../img/eScan/eQuestionE.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowE = []
      rowE.push([{ text: this.sheetText['ques-5'].text_a }])
      rowE.push([
        {
          text: this.sheetText['ques-5'].text_b + this.sheetText['ques-5'].text_c
        }
      ])
      if (this.dataScan.question_d === 'ke1') {
        rowE.push([
          {
            text: this.sheetText['ques-5'].text_d + this.sheetText['extra'].text_ja
          }
        ])
        rowE.push([{ text: this.sheetText['ques-5'].text_f }])
        if (this.dataScan.question_e === 'ke1') {
          rowE.push([
            {
              text: this.sheetText['ques-5'].text_d + this.sheetText['extra'].text_a
            }
          ])
        }
        if (this.dataScan.question_e === 'ke2') {
          rowE.push([
            {
              text: this.sheetText['ques-5'].text_d + this.sheetText['extra'].text_b
            }
          ])
        }
        if (this.dataScan.question_e === 'ke3') {
          rowE.push([
            {
              text: this.sheetText['ques-5'].text_d + this.sheetText['extra'].text_c
            }
          ])
        }
        rowE.push([{ text: this.sheetText['ques-5'].text_g }])
        rowE.push([{ text: this.sheetText['ques-5'].text_h + this.dataScan.sl_b }])
      }
      if (this.dataScan.question_d === 'ke2') {
        rowE.push([
          {
            text: this.sheetText['ques-5'].text_d + this.sheetText['extra'].text_nee
          }
        ])
      }
      if (this.dataScan.question_d === 'ke3') {
        rowE.push([
          {
            text: this.sheetText['ques-5'].text_d + this.sheetText['extra'].text_onb
          }
        ])
      }
      // rowE.push([{ text: this.sheetText["ques-5"].text_e }]);
      // rowE.push([{ text: this.sheetText["ques-5"].text_i }]);
      // rowE.push([{ text: this.sheetText["ques-5"].text_j }]);
      // rowE.push([{ text: this.sheetText["ques-5"].text_k }]);
      slideQuesE.addTable(rowE, this.tableBlockLeftOneCol)

      let slideQuesF = pres.addSlide('E_SLIDE_Photo')
      slideQuesF.addText(
        [{ text: this.sheetText['ques-6'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesF.addImage({
        path: '../img/eScan/eQuestionF.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowF = []
      rowF.push([{ text: this.sheetText['ques-6'].text_a }])
      rowF.push([{ text: this.sheetText['ques-6'].text_b }])
      rowF.push([{ text: this.sheetText['ques-6'].text_c }])
      if (this.dataScan.question_f === 'ke1') {
        rowF.push([
          {
            text: this.sheetText['ques-6'].text_d + this.sheetText['extra'].text_ja
          }
        ])
      }
      if (this.dataScan.question_f === 'ke2') {
        rowF.push([
          {
            text: this.sheetText['ques-6'].text_d + this.sheetText['extra'].text_nee
          }
        ])
      }
      if (this.dataScan.question_f === 'ke3') {
        rowF.push([
          {
            text: this.sheetText['ques-6'].text_d + this.sheetText['extra'].text_onb
          }
        ])
      }
      if (this.dataScan.question_f === 'ke4') {
        rowF.push([
          {
            text: this.sheetText['ques-6'].text_d + this.sheetText['extra'].text_n_rel1
          }
        ])
      }

      rowF.push([{ text: this.sheetText['ques-6'].text_e }])
      rowF.push([{ text: this.sheetText['ques-6'].text_f }])
      rowF.push([{ text: this.sheetText['ques-6'].text_g }])
      rowF.push([{ text: this.sheetText['ques-6'].text_h }])
      slideQuesF.addTable(rowF, this.tableBlockLeftOneCol)

      let slideQuesG = pres.addSlide('E_SLIDE_Photo')
      slideQuesG.addText(
        [{ text: this.sheetText['ques-7'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesG.addImage({
        path: '../img/eScan/eQuestionG.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowG = []
      rowG.push([{ text: this.sheetText['ques-7'].text_a }])
      rowG.push([
        {
          text: this.sheetText['ques-7'].text_b + this.sheetText['ques-7'].text_c
        }
      ])
      if (this.dataScan.question_g === 'ke1') {
        rowG.push([
          {
            text: this.sheetText['ques-7'].text_d + this.sheetText['extra'].text_ja
          }
        ])
        rowG.push([{ text: this.sheetText['ques-7'].text_f }])
        if (this.dataScan.question_h === 'ke1') {
          rowG.push([
            {
              text: this.sheetText['ques-7'].text_d + this.sheetText['extra'].text_a
            }
          ])
        }
        if (this.dataScan.question_h === 'ke2') {
          rowG.push([
            {
              text: this.sheetText['ques-7'].text_d + this.sheetText['extra'].text_b
            }
          ])
        }
        if (this.dataScan.question_h === 'ke3') {
          rowG.push([
            {
              text: this.sheetText['ques-7'].text_d + this.sheetText['extra'].text_c
            }
          ])
        }
        rowG.push([{ text: this.sheetText['ques-7'].text_g }])
        rowG.push([{ text: this.sheetText['ques-7'].text_h + this.dataScan.sl_b }])
      }
      if (this.dataScan.question_g === 'ke2') {
        rowG.push([
          {
            text: this.sheetText['ques-7'].text_d + this.sheetText['extra'].text_nee
          }
        ])
      }
      if (this.dataScan.question_g === 'ke3') {
        rowG.push([
          {
            text: this.sheetText['ques-7'].text_d + this.sheetText['extra'].text_onb
          }
        ])
      }
      // rowG.push([{ text: this.sheetText["ques-7"].text_e }]);
      // rowG.push([{ text: this.sheetText["ques-7"].text_i }]);
      // rowG.push([{ text: this.sheetText["ques-7"].text_j }]);
      // rowG.push([{ text: this.sheetText["ques-7"].text_k }]);
      slideQuesG.addTable(rowG, this.tableBlockLeftOneCol)

      let slideQuesH = pres.addSlide('E_SLIDE_Photo')
      slideQuesH.addText(
        [{ text: this.sheetText['ques-8'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesH.addImage({
        path: '../img/eScan/eQuestionH.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      let rowH = []
      rowH.push([{ text: this.sheetText['ques-8'].text_a }])
      rowH.push([{ text: this.sheetText['ques-8'].text_b + this.dataScan.text_a }])

      slideQuesH.addTable(rowH, this.tableBlockLeftOneCol)

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
