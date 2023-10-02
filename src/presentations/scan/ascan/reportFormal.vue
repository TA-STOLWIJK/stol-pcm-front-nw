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
import SheetText from '@/json/scan/ascan.json'
import defaultSlideA from '@/mixin/defaultSlideA'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import pptxgen from 'pptxgenjs'
import { toast } from "vue3-toastify";

export default {
  name: 'reportAscan',
  components: { FormalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideA, defaultSlideAll],
  data() {
    return {
      placeRight: {w: 2.86,
        h: 3.57  },
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
    createPowerPoint: function () {
      // eslint-disable-next-line no-undef
      let pres = new pptxgen()
      this.disableBtn = true
      toast.success('Je rapportage wordt samengesteld.')
      pres.defineSlideMaster(this.dataScanA)
      pres.defineSlideMaster(this.dataScanA_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [{ text: 'Noodopvolging', options: this.fontFirstPageHeader }],
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

      let slideIntroA = pres.addSlide('A_SLIDE_Photo')
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

      let slideIntroB = pres.addSlide('A_SLIDE_Photo')
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

      let slideQuesA = pres.addSlide('A_SLIDE')
      slideQuesA.addText(
        [{ text: this.sheetText['ques-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      if (this.dataScan.sl_a <= -25) {
        slideQuesA.addText(
          [
            {
              text: this.sheetText['ques-a'].text_a + ' ' + this.sheetText['ques-a'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_c + ': ' + this.dataScan.sl_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-a'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_c,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_d,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_e,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.sl_a < 0 && this.dataScan.sl_a >= -25) {
        slideQuesA.addText(
          [
            {
              text: this.sheetText['ques-a'].text_a + ' ' + this.sheetText['ques-a'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_c + ': ' + this.dataScan.sl_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-a'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_c,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_d,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_e,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.sl_a === 0) {
        slideQuesA.addText(
          [
            {
              text: this.sheetText['ques-a'].text_a + ' ' + this.sheetText['ques-a'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_c + ': ' + this.dataScan.sl_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-a'].our_f,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_g,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_h,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.sl_a > 0 && this.dataScan.sl_a <= 25) {
        slideQuesA.addText(
          [
            {
              text: this.sheetText['ques-a'].text_a + ' ' + this.sheetText['ques-a'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_c + ': ' + this.dataScan.sl_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-a'].our_i,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_j,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_k,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_h,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.sl_a > 25) {
        slideQuesA.addText(
          [
            {
              text: this.sheetText['ques-a'].text_a + ' ' + this.sheetText['ques-a'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_c + ': ' + this.dataScan.sl_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-a'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-a'].our_l,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_i,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_j,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-a'].our_h,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }

      let slideQuesB = pres.addSlide('A_SLIDE')
      slideQuesB.addText(
        [{ text: this.sheetText['ques-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([
        {
          text: this.sheetText['ques-b'].text_a + this.sheetText['ques-b'].text_b,
          options: this.fontTextBlock
        }
      ])
      if (this.dataScan.question_b === 'ke1') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_c + this.sheetText['ques-b'].text_d,
            options: this.fontTextBlock
          }
        ])
        rowB.push([{ text: '' }])
        rowB.push([
          {
            text: this.sheetText['ques-c'].text_a + this.sheetText['ques-c'].text_b,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.question_c === 'ke1') {
          rowB.push([
            {
              text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_d,
              options: this.fontTextBlock
            }
          ])
          rowB.push([{ text: '', options: this.fontTextBlock }])
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_g,
              options: this.fontTextBlock
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_a,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_b,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_c,
              options: this.fontTextBlockBullet
            }
          ])
        }
        if (this.dataScan.question_c === 'ke2') {
          rowB.push([
            {
              text: this.sheetText['ques-c'].text_c + this.sheetText['ques-c'].text_e,
              options: this.fontTextBlock
            }
          ])
          rowB.push([{ text: '', options: this.fontTextBlock }])
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_g,
              options: this.fontTextBlock
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_a,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_d,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_e,
              options: this.fontTextBlockBullet
            }
          ])
        }
      }
      if (this.dataScan.question_b === 'ke2') {
        rowB.push([
          {
            text: this.sheetText['ques-b'].text_c + this.sheetText['ques-b'].text_e
          }
        ])
        rowB.push([{ text: '' }])
        rowB.push([
          {
            text: this.sheetText['ques-d'].text_a + this.sheetText['ques-d'].text_b,
            options: this.fontTextBlock
          }
        ])
        if (this.dataScan.question_c === 'ke1') {
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_d,
              options: this.fontTextBlock
            }
          ])
          rowB.push([{ text: '', options: this.fontTextBlock }])
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_g,
              options: this.fontTextBlock
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_f,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_g,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_h,
              options: this.fontTextBlockBullet
            }
          ])
        }
        if (this.dataScan.question_c === 'ke2') {
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_e,
              options: this.fontTextBlock
            }
          ])
          rowB.push([{ text: '', options: this.fontTextBlock }])
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_g,
              options: this.fontTextBlock
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_i,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_j,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_k,
              options: this.fontTextBlockBullet
            }
          ])
        }
        if (this.dataScan.question_c === 'ke2') {
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_c + this.sheetText['ques-d'].text_f,
              options: this.fontTextBlock
            }
          ])
          rowB.push([{ text: '', options: this.fontTextBlock }])
          rowB.push([
            {
              text: this.sheetText['ques-d'].text_g,
              options: this.fontTextBlock
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_l,
              options: this.fontTextBlockBullet
            }
          ])
          rowB.push([
            {
              text: this.sheetText['ques-d'].our_m,
              options: this.fontTextBlockBullet
            }
          ])
        }
      }
      slideQuesB.addTable(rowB, this.placeTableBlock)

      let slideQuesE = pres.addSlide('A_SLIDE')
      slideQuesE.addText(
        [{ text: this.sheetText['ques-e'].header, options: this.fontHeader }],
        this.placeHeader
      )
      if (this.dataScan.question_e === 'ke1') {
        slideQuesE.addText(
          [
            {
              text: this.sheetText['ques-e'].text_a + ' ' + this.sheetText['ques-e'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_d,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-e'].text_f,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-e'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-e'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-e'].our_c,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.question_e === 'ke2') {
        slideQuesE.addText(
          [
            {
              text: this.sheetText['ques-e'].text_a + ' ' + this.sheetText['ques-e'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-e'].text_c + this.sheetText['ques-e'].text_e,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-e'].text_f,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-e'].our_d,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-e'].our_e,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-e'].our_f,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-e'].our_g,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }

      let slideQuesF = pres.addSlide('A_SLIDE')
      slideQuesF.addText(
        [{ text: this.sheetText['ques-f'].header, options: this.fontHeader }],
        this.placeHeader
      )
      if (this.dataScan.question_f === 'ke1') {
        slideQuesF.addText(
          [
            {
              text: this.sheetText['ques-f'].text_a + ' ' + this.sheetText['ques-f'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-f'].text_c + this.sheetText['ques-f'].text_d,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-f'].text_f,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-f'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-f'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-f'].our_c,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-f'].our_d,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-f'].our_e,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.question_f === 'ke2') {
        slideQuesF.addText(
          [
            {
              text: this.sheetText['ques-f'].text_a + ' ' + this.sheetText['ques-f'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-f'].text_c + this.sheetText['ques-f'].text_e,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-f'].text_f,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-f'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-f'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-f'].our_c,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }

      let slideQuesG = pres.addSlide('A_SLIDE')
      slideQuesG.addText(
        [{ text: this.sheetText['ques-g'].header, options: this.fontHeader }],
        this.placeHeader
      )
      if (this.dataScan.question_g === 'ke1') {
        slideQuesG.addText(
          [
            {
              text: this.sheetText['ques-g'].text_a + ' ' + this.sheetText['ques-g'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-g'].text_c + this.sheetText['ques-g'].text_d,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-g'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-g'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_c,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_d,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.question_g === 'ke2') {
        slideQuesG.addText(
          [
            {
              text: this.sheetText['ques-g'].text_a + ' ' + this.sheetText['ques-g'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-g'].text_c + this.sheetText['ques-g'].text_e,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-g'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-g'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_e,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_f,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      if (this.dataScan.question_g === 'ke3') {
        slideQuesG.addText(
          [
            {
              text: this.sheetText['ques-g'].text_a + ' ' + this.sheetText['ques-g'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-g'].text_c + this.sheetText['ques-g'].text_f,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-g'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-g'].our_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_e,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-g'].our_f,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlock
        )
      }
      let slidePropA = pres.addSlide('A_SLIDE_Photo')
      slidePropA.addText(
        [{ text: this.sheetText['prop-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slidePropA.addImage({
        path: '../img/aScan/propA.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slidePropA.addText(
        [
          {
            text: this.sheetText['prop-a'].text_a,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-a'].text_b,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-a'].text_c,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-a'].text_d,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-a'].text_e,
            options: this.fontTextBlockHeader
          }
        ],
        this.placeTextBlockLeft
      )
      let slidePropB = pres.addSlide('A_SLIDE_Photo')
      slidePropB.addText(
        [{ text: this.sheetText['prop-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slidePropB.addImage({
        path: '../img/aScan/propB.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      slidePropB.addText(
        [
          {
            text: this.sheetText['prop-b'].text_a,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-b'].text_b,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-b'].text_c,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-b'].text_d,
            options: this.fontTextBlockBullet
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-b'].text_e,
            options: this.fontTextBlockBullet
          },

          { text: '', options: this.fontTextBlock },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-b'].text_f,
            options: this.fontTextBlockHeader
          }
        ],
        this.placeTextBlockLeft
      )
      let slidePropC = pres.addSlide('A_SLIDE_Photo')
      slidePropC.addText(
        [{ text: this.sheetText['prop-c'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slidePropC.addImage({
        path: '../img/aScan/propC.png',
        placeholder: 'Photo',
       w: 2.86,
        h: 3.57
      })
      if (this.dataScan.int_question_a === 'ke1') {
        slidePropC.addText(
          [
            {
              text:
                this.sheetText['prop-c'].text_a +
                this.dataClient.company_name_client +
                this.sheetText['prop-c'].text_b,
              options: this.fontTextBlockHeader
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['prop-c'].text_c,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['prop-c'].text_d,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['prop-c'].text_e,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text:
                this.sheetText['prop-c'].text_f +
                this.dataScan.int_question_b +
                this.sheetText['prop-c'].text_h,
              options: this.fontTextBlock
            },
            {
              text:
                this.sheetText['prop-c'].text_g +
                this.dataScan.int_question_c +
                this.sheetText['prop-c'].text_h,
              options: this.fontTextBlock
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.int_question_a === 'ke2') {
        slidePropC.addText(
          [
            {
              text:
                this.sheetText['prop-c'].text_a +
                this.dataClient.company_name_client +
                this.sheetText['prop-c'].text_b,
              options: this.fontTextBlockHeader
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['prop-c'].text_c,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['prop-c'].text_e,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text:
                this.sheetText['prop-c'].text_f +
                this.dataScan.int_question_d +
                this.sheetText['prop-c'].text_h,
              options: this.fontTextBlock
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.int_question_a === 'ke3') {
        slidePropC.addText(
          [
            {
              text:
                this.sheetText['prop-c'].text_a +
                this.dataClient.company_name_client +
                this.sheetText['prop-c'].text_b,
              options: this.fontTextBlockHeader
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['prop-c'].text_c,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['prop-c'].text_e,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text:
                this.sheetText['prop-c'].text_f +
                this.dataScan.int_question_e +
                this.sheetText['prop-c'].text_h,
              options: this.fontTextBlock
            }
          ],
          this.placeTextBlockLeft
        )
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
