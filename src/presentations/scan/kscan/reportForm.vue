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
import SheetText from '@/json/scan/kscan.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideK from '@/mixin/defaultSlideK'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportIscan',
  components: { FormalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideAll, defaultSlideK],
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
      pres.defineSlideMaster(this.dataScanK)
      pres.defineSlideMaster(this.dataScanK_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Privé situatie', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('K_SLIDE_Photo')
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
        path: '../img/kScan/kIntroA.jpeg',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      if (this.dataScan.question_b === 'ke2') {
        slideIntroA.addText(
          [
            {
              text: this.sheetText['sheet-one'].text_f + this.sheetText['sheet-one'].text_d,
              options: this.fontTextBlockHeader
            },
            {
              text: '',
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['sheet-one'].text_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['sheet-one'].text_b,
              options: this.fontTextBlock
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_b === 'ke1') {
        slideIntroA.addText(
          [
            {
              text: this.sheetText['sheet-one'].text_f + this.sheetText['sheet-one'].text_e,
              options: this.fontTextBlockHeader
            },
            {
              text: '',
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['sheet-one'].text_c,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['sheet-one'].text_b,
              options: this.fontTextBlock
            }
          ],
          this.placeTextBlockLeft
        )
      }

      let slideQuesA = pres.addSlide('K_SLIDE_Photo')
      slideQuesA.addText(
        [{ text: this.sheetText['ques-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesA.addImage({
        path: '../img/kScan/kIntroB.jpeg',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      let rowA = []
      rowA.push([{ text: this.sheetText['ques-a'].intro, options: this.fontTextBlock }])
      rowA.push([{ text: '' }])
      rowA.push([
        {
          text: this.sheetText['ques-a'].text_a,
          options: this.fontTextBlockBold
        }
      ])
      if (this.dataScan.question_b === 'ke2') {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_c,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_b === 'ke1') {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_d,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_a === 'ke1') {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_e,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_f,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_b === 'ke2') {
        rowA.push([
          {
            text: this.sheetText['ques-a'].text_g,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.question_c === 'ke1') {
          rowA.push([
            {
              text: this.sheetText['ques-a'].text_h,
              options: this.fontTextBlock
            }
          ])
          if (this.dataScan.question_d === 'ke1') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_k,
                options: this.fontTextBlock
              }
            ])
          }
          if (this.dataScan.question_d === 'ke2') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_l,
                options: this.fontTextBlock
              }
            ])
          }
          if (this.dataScan.question_d === 'ke3') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_m,
                options: this.fontTextBlock
              }
            ])
          }
          if (this.dataScan.question_d === 'ke4') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_n,
                options: this.fontTextBlock
              }
            ])
          }
        }
        if (this.dataScan.question_c === 'ke2') {
          rowA.push([
            {
              text: this.sheetText['ques-a'].text_i,
              options: this.fontTextBlock
            }
          ])
        }
        if (this.dataScan.question_c === 'ke3') {
          rowA.push([
            {
              text: this.sheetText['ques-a'].text_j,
              options: this.fontTextBlock
            }
          ])
        }
        if (
          this.dataScan.question_c === 'ke1' ||
          this.dataScan.question_c === 'ke2' ||
          this.dataScan.question_c === 'ke3' ||
          this.dataScan.question_c === 'ke4'
        ) {
          if (this.dataScan.question_e === 'ke1') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_o,
                options: this.fontTextBlock
              }
            ])
          }
          if (this.dataScan.question_e === 'ke2') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_p,
                options: this.fontTextBlock
              }
            ])
          }
          if (this.dataScan.question_e === 'ke3') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_q,
                options: this.fontTextBlock
              }
            ])
          }
          if (this.dataScan.question_e === 'ke4') {
            rowA.push([
              {
                text: this.sheetText['ques-a'].text_r,
                options: this.fontTextBlock
              }
            ])
          }
        }
      }
      rowA.push([{ text: '' }])
      rowA.push([{ text: this.sheetText['ques-a'].text_s, options: this.fontTextBlock }])

      rowA.push([{ text: this.sheetText['ques-a'].opt_a, options: this.fontTextBlock }])
      rowA.push([{ text: this.sheetText['ques-a'].opt_b, options: this.fontTextBlock }])

      slideQuesA.addTable(rowA, this.placeTableBlock)

      let slideQuesB = pres.addSlide('K_SLIDE')
      slideQuesB.addText(
        [{ text: this.sheetText['ques-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([{ text: this.sheetText['ques-b'].intro, options: this.fontTextBlock }])
      rowB.push([{ text: '' }])
      rowB.push([
        {
          text: this.sheetText['ques-b'].text_m,
          options: this.fontTextBlockBold
        }
      ])
      if (this.dataScan.question_g === 'ke1') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_a,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.question_h === 'ke1') {
          rowB.push([
            {
              text: this.sheetText['ques-b'].text_d,
              options: this.fontTextBlock
            }
          ])
        }
        if (this.dataScan.question_h === 'ke2') {
          rowB.push([
            {
              text: this.sheetText['ques-b'].text_e,
              options: this.fontTextBlock
            }
          ])
        }
        if (this.dataScan.question_h === 'ke3') {
          rowB.push([
            {
              text: this.sheetText['ques-b'].text_f,
              options: this.fontTextBlock
            }
          ])
        }
      }
      if (this.dataScan.question_g === 'ke2') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_c,
            options: this.fontTextBlock
          }
        ])
      }

      rowB.push([{ text: '' }])
      if (this.dataScan.question_i === 'ke1') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_g,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.question_j === 'ke1') {
          rowB.push([
            {
              text: this.sheetText['ques-b'].text_i,
              options: this.fontTextBlock
            }
          ])
        }
        if (this.dataScan.question_j === 'ke2') {
          rowB.push([
            {
              text: this.sheetText['ques-b'].text_i,
              options: this.fontTextBlock
            }
          ])
        }
        if (this.dataScan.question_j === 'ke3') {
          rowB.push([
            {
              text: this.sheetText['ques-b'].text_i,
              options: this.fontTextBlock
            }
          ])
        }
      }
      if (this.dataScan.question_i === 'ke2') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_h,
            options: this.fontTextBlock
          }
        ])
      }

      rowB.push([{ text: '' }])
      rowB.push([{ text: this.sheetText['ques-b'].text_l, options: this.fontTextBlock }])
      rowB.push([{ text: this.sheetText['ques-b'].opt_a, options: this.fontTextBlock }])
      rowB.push([{ text: this.sheetText['ques-b'].opt_b, options: this.fontTextBlock }])

      slideQuesB.addTable(rowB, this.placeTableBlock)

      let slideQuesC = pres.addSlide('K_SLIDE')
      slideQuesC.addText(
        [{ text: this.sheetText['ques-c'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowC = []
      rowC.push([{ text: this.sheetText['ques-c'].intro, options: this.fontTextBlock }])
      rowC.push([{ text: '' }])
      if (this.dataScan.question_k === 'ke1') {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_a,
            options: this.fontTextBlock
          }
        ])
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_d,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.question_l === 'ke1') {
          rowC.push([
            {
              text: this.sheetText['ques-c'].text_e,
              options: this.fontTextBlock
            }
          ])
        }
        if (this.dataScan.question_l === 'ke2') {
          rowC.push([
            {
              text: this.sheetText['ques-c'].text_f,
              options: this.fontTextBlock
            }
          ])
        }
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_g,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.question_m === 'ke1') {
          rowC.push([
            {
              text: this.sheetText['ques-c'].text_h,
              options: this.fontTextBlock
            }
          ])
        }
        if (this.dataScan.question_m === 'ke2') {
          rowC.push([
            {
              text: this.sheetText['ques-c'].text_i,
              options: this.fontTextBlock
            }
          ])
        }
      }
      if (this.dataScan.question_k === 'ke2') {
        rowC.push([
          {
            text: this.sheetText['ques-c'].text_c,
            options: this.fontTextBlock
          }
        ])
      }
      rowC.push([{ text: '' }])
      rowC.push([{ text: this.sheetText['ques-c'].text_k, options: this.fontTextBlock }])
      rowC.push([{ text: this.sheetText['ques-c'].opt_a, options: this.fontTextBlock }])
      rowC.push([{ text: this.sheetText['ques-c'].opt_b, options: this.fontTextBlock }])
      slideQuesC.addTable(rowC, this.placeTableBlock)

      let slideQuesD = pres.addSlide('K_SLIDE')
      slideQuesD.addText(
        [{ text: this.sheetText['ques-d'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowD = []
      rowD.push([{ text: this.sheetText['ques-d'].intro, options: this.fontTextBlock }])
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_a, options: this.fontTextBlock }])
      if (this.dataScan.text_a === '' || this.dataScan.text_a === null) {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_d,
            options: this.fontTextBlock
          }
        ])
      } else {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.dataScan.text_a,
            options: this.fontTextBlock
          }
        ])
      }
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_e, options: this.fontTextBlock }])
      if (this.dataScan.question_n === 'ke1') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_f,
            options: this.fontTextBlock
          }
        ])
      }
      if (this.dataScan.question_n === 'ke2') {
        rowD.push([
          {
            text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_g,
            options: this.fontTextBlock
          }
        ])
      }
      rowD.push([{ text: '' }])
      rowD.push([{ text: this.sheetText['ques-d'].text_k, options: this.fontTextBlock }])
      rowD.push([{ text: this.sheetText['ques-d'].opt_a, options: this.fontTextBlock }])
      rowD.push([{ text: this.sheetText['ques-d'].opt_b, options: this.fontTextBlock }])
      slideQuesD.addTable(rowD, this.placeTableBlock)

      this.disableSendBtn = false
      let filename =
        'Rapportage_prive_situatie_' +
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
