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
import SheetText from '@/json/scan/cscan.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideC from '@/mixin/defaultSlideC'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportCscan',
  components: { FormalButton },
  props: ['dataScan', 'dataClient', 'dataSpec'],
  mixins: [defaultSlideC, defaultSlideAll],
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
      pres.defineSlideMaster(this.dataScanC)
      pres.defineSlideMaster(this.dataScanC_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [
          {
            text: 'Optimaal financieel pakket',
            options: this.fontFirstPageHeader
          }
        ],
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

      let slideIntroA = pres.addSlide('C_SLIDE_Photo')
      slideIntroA.addImage({
        path: '../img/cScan/intro1.jpg',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slideIntroA.addText(
        [{ text: this.sheetText['intro-1'].header, options: this.fontHeader }],
        this.placeHeader
      )
      // slideIntroA.addImage({ path: "../img/cScan/question_a.png", placeholder: "Photo" });
      slideIntroA.addText(
        [
          {
            text: this.sheetText['intro-1'].text_a + this.sheetText['intro-1'].text_b,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['intro-1'].text_c,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['intro-1'].text_d,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock }
        ],
        this.placeTextBlockLeft
      )

      let slideIntroB = pres.addSlide('C_SLIDE_Photo')
      slideIntroB.addImage({
        path: '../img/cScan/intro2.jpg',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slideIntroB.addText(
        [{ text: this.sheetText['intro-2'].header, options: this.fontHeader }],
        this.placeHeader
      )
      // slideIntroB.addImage({ path: "../img/aScan/introB.png", placeholder: "Photo" });
      slideIntroB.addText(
        [
          {
            text: this.sheetText['intro-2'].text_a,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['intro-2'].text_b,
            options: this.fontTextBlockBullet
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
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['intro-2'].text_h,
            options: this.fontTextBlock
          }
        ],
        this.placeTextBlockLeft
      )

      let slideQuesA = pres.addSlide('C_SLIDE_Photo')
      slideQuesA.addText(
        [{ text: this.sheetText['ques-1'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesA.addImage({
        path: '../img/cScan/question_a.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      let rowA = []
      rowA.push([
        { text: this.sheetText['ques-1'].text_a, options: { bold: true } },
        {
          text: this.sheetText['ques-1'].text_b,
          options: { bold: true, align: 'center' }
        }
      ])
      rowA.push([
        { text: this.sheetText['ques-1'].text_d },
        { text: this.dataScan.sl_a, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-1'].text_e },
        { text: this.dataScan.sl_b, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-1'].text_f },
        { text: this.dataScan.sl_c, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-1'].text_g },
        { text: this.dataScan.sl_d, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-1'].text_h },
        { text: this.dataScan.sl_e, options: { align: 'center' } }
      ])
      rowA.push([
        { text: this.sheetText['ques-1'].text_i },
        { text: this.dataScan.sl_f, options: { align: 'center' } }
      ])
      if (this.dataScan.question_a === 'ke1') {
        rowA.push([
          {
            text: this.sheetText['ques-1'].text_j + this.dataScan.text_a,
            options: { colspan: 2 }
          }
        ])
      }
      if (this.dataScan.question_a === 'ke2') {
        rowA.push([
          { text: this.sheetText['ques-1'].text_k },
          { text: '', options: { align: 'left' } }
        ])
      }
      slideQuesA.addTable(rowA, this.tableBlockLeftTwoCol)

      let slideQuesB = pres.addSlide('C_SLIDE_Photo')
      slideQuesB.addImage({
        path: '../img/cScan/question_b.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slideQuesB.addText(
        [{ text: this.sheetText['ques-3'].header, options: this.fontHeader }],
        this.placeHeader
      )
      if (this.dataScan.question_b === 'ke1') {
        slideQuesB.addText(
          [
            {
              text: this.sheetText['ques-3'].text_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_b,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].question_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].ans_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].opt_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-3'].opt_b,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_b === 'ke2') {
        slideQuesB.addText(
          [
            {
              text: this.sheetText['ques-3'].text_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_b,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].question_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].ans_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].opt_c,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-3'].opt_d,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-3'].opt_b,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_b === 'ke3') {
        slideQuesB.addText(
          [
            {
              text: this.sheetText['ques-3'].text_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_b,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].question_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].ans_c,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_d,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].opt_f,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-3'].opt_g,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-3'].opt_b,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      let slideQuesC = pres.addSlide('C_SLIDE_Photo')
      slideQuesC.addText(
        [{ text: this.sheetText['ques-3'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slideQuesC.addImage({
        path: '../img/cScan/question_c.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      if (this.dataScan.question_c === 'ke1') {
        slideQuesC.addText(
          [
            {
              text: this.sheetText['ques-3'].text_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_b,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].question_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].ans_a,
              options: this.fontTextBlock
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_c === 'ke2') {
        slideQuesC.addText(
          [
            {
              text: this.sheetText['ques-3'].text_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_b,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].question_a,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-3'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-3'].ans_b,
              options: this.fontTextBlock
            }
          ],
          this.placeTextBlockLeft
        )
      }
      let slideQuesD = pres.addSlide('C_SLIDE_Photo')
      slideQuesD.addImage({
        path: '../img/cScan/question_d.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slideQuesD.addText(
        [{ text: this.sheetText['ques-4'].header, options: this.fontHeader }],
        this.placeHeader
      )
      if (this.dataScan.question_c === 'ke1' && this.dataScan.sl_g <= -75) {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_a + this.dataScan.sl_g,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_c,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (
        this.dataScan.question_c === 'ke1' &&
        this.dataScan.sl_g <= -25 &&
        this.dataScan.sl_g > -75
      ) {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_a + this.dataScan.sl_g,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_a,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_b,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_d,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (
        this.dataScan.question_c === 'ke1' &&
        this.dataScan.sl_g > -25 &&
        this.dataScan.sl_g <= 25
      ) {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_a + this.dataScan.sl_g,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_f,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_g,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_h,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (
        this.dataScan.question_c === 'ke1' &&
        this.dataScan.sl_g > 25 &&
        this.dataScan.sl_g < 75
      ) {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_a + this.dataScan.sl_g,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_f,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_g,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_h,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_c === 'ke1' && this.dataScan.sl_g >= 75) {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_b,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_a + this.dataScan.sl_g,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_f,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_i,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_j,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_c === 'ke2' && this.dataScan.question_d === 'ke1') {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_d,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_i,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_e,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_k,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_l,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_m,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_c === 'ke2' && this.dataScan.question_d === 'ke2') {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_d,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_i,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_f,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_n,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_o,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_p,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      if (this.dataScan.question_c === 'ke2' && this.dataScan.question_d === 'ke3') {
        slideQuesD.addText(
          [
            {
              text: this.sheetText['ques-4'].text_g,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_d,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_i,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].text_h,
              options: this.fontTextBlock
            },
            { text: '', options: this.fontTextBlock },
            {
              text: this.sheetText['ques-4'].text_c,
              options: this.fontTextBlock
            },
            {
              text: this.sheetText['ques-4'].opt_q,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_o,
              options: this.fontTextBlockBullet
            },
            {
              text: this.sheetText['ques-4'].opt_p,
              options: this.fontTextBlockBullet
            }
          ],
          this.placeTextBlockLeft
        )
      }
      let slideQuesE = pres.addSlide('C_SLIDE_Photo')
      slideQuesE.addImage({
        path: '../img/cScan/question_e.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slideQuesE.addText(
        [{ text: this.sheetText['ques-5'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowE = []
      rowE.push([{ text: this.sheetText['ques-5'].text_b, options: { colspan: 2 } }])
      rowE.push([{ text: '', options: { colspan: 2 } }])
      rowE.push([
        { text: this.sheetText['ques-5'].text_c, options: { bold: true } },
        {
          text: this.sheetText['ques-5'].text_d,
          options: { bold: true, align: 'center' }
        }
      ])
      rowE.push([
        { text: this.sheetText['ques-5'].text_e },
        { text: this.dataScan.sl_h, options: { align: 'center' } }
      ])
      rowE.push([
        { text: this.sheetText['ques-5'].text_j },
        { text: this.dataScan.sl_i, options: { align: 'center' } }
      ])
      rowE.push([
        { text: this.sheetText['ques-5'].text_f },
        { text: this.dataScan.sl_j, options: { align: 'center' } }
      ])
      rowE.push([
        { text: this.sheetText['ques-5'].text_g },
        { text: this.dataScan.sl_k, options: { align: 'center' } }
      ])
      rowE.push([
        { text: this.sheetText['ques-5'].text_h },
        { text: this.dataScan.sl_l, options: { align: 'center' } }
      ])
      rowE.push([
        { text: this.sheetText['ques-5'].text_i },
        { text: this.dataScan.sl_m, options: { align: 'center' } }
      ])
      slideQuesE.addTable(rowE, this.tableBlockLeftTwoCol)

      let slideQuesF = pres.addSlide('C_SLIDE_Photo')
      slideQuesF.addImage({
        path: '../img/cScan/question_f.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slideQuesF.addText(
        [{ text: this.sheetText['ques-6'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowF = []
      rowF.push([{ text: this.sheetText['ques-6'].text_b }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['ques-6'].text_a }])
      rowF.push([{ text: this.sheetText['ques-6'].text_i }])
      rowF.push([{ text: '' }])
      rowF.push([{ text: this.sheetText['ques-6'].text_c }])
      if (this.dataScan.question_e === 'ke1') {
        rowF.push([{ text: this.sheetText['ques-6'].text_d }])
      }
      if (this.dataScan.question_e === 'ke2') {
        rowF.push([{ text: this.sheetText['ques-6'].text_e }])
      }
      if (this.dataScan.question_e === 'ke3') {
        rowF.push([{ text: this.sheetText['ques-6'].text_f }])
      }
      if (this.dataScan.question_e === 'ke4') {
        rowF.push([{ text: this.sheetText['ques-6'].text_g }])
      }
      if (this.dataScan.question_e === 'ke5') {
        rowF.push([{ text: this.sheetText['ques-6'].text_h + this.dataScan.text_b }])
      }

      slideQuesF.addTable(rowF, this.tableBlockLeftOneCol)

      let slideQuesG = pres.addSlide('C_SLIDE_Photo')
      slideQuesG.addImage({
        path: '../img/cScan/question_g.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
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
      if (this.dataScan.question_f === 'ke1') {
        rowG.push([{ text: this.sheetText['ques-7'].text_d }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-7'].text_f }])
        rowG.push([
          {
            text: this.sheetText['ques-7'].our_a,
            options: { bullet: { indent: 16 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-7'].our_b,
            options: { bullet: { indent: 16 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-7'].our_c,
            options: { bullet: { indent: 16 } }
          }
        ])
      }
      if (this.dataScan.question_f === 'ke2') {
        rowG.push([{ text: this.sheetText['ques-7'].text_e }])
        rowG.push([{ text: '' }])
        rowG.push([{ text: this.sheetText['ques-7'].text_f }])
        rowG.push([
          {
            text: this.sheetText['ques-7'].our_d,
            options: { bullet: { indent: 16 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-7'].our_e,
            options: { bullet: { indent: 16 } }
          }
        ])
        rowG.push([
          {
            text: this.sheetText['ques-7'].our_f,
            options: { bullet: { indent: 16 } }
          }
        ])
      }

      slideQuesG.addTable(rowG, this.tableBlockLeftOneCol)

      let slideQuesH = pres.addSlide('C_SLIDE_Photo')
      slideQuesH.addImage({
        path: '../img/cScan/question_h.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slideQuesH.addText(
        [{ text: this.sheetText['ques-8'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowH = []
      rowH.push([{ text: this.sheetText['ques-8'].text_a }])
      rowH.push([{ text: this.sheetText['ques-8'].text_k }])
      rowH.push([{ text: '' }])
      rowH.push([{ text: this.sheetText['ques-8'].text_c }])
      if (this.dataScan.cb_a) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_d,
            options: { bullet: { indent: 16 } }
          }
        ])
      }
      if (this.dataScan.cb_b) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_e,
            options: { bullet: { indent: 16 } }
          }
        ])
      }
      if (this.dataScan.cb_c) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_f,
            options: { bullet: { indent: 16 } }
          }
        ])
      }
      if (this.dataScan.cb_d) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_g,
            options: { bullet: { indent: 16 } }
          }
        ])
      }
      if (this.dataScan.cb_e) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_h,
            options: { bullet: { indent: 16 } }
          }
        ])
      }

      if (
        !this.dataScan.cb_a &&
        !this.dataScan.cb_b &&
        !this.dataScan.cb_c &&
        !this.dataScan.cb_d &&
        !this.dataScan.cb_e &&
        !this.dataScan.cb_f
      ) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_j,
            options: { bullet: { indent: 16 } }
          }
        ])
      }
      if (this.dataScan.cb_f) {
        rowH.push([
          {
            text: this.sheetText['ques-8'].text_i + this.dataScan.text_c,
            options: { bullet: { indent: 16 } }
          }
        ])
      }
      slideQuesH.addTable(rowH, this.tableBlockLeftOneCol)

      let slidePropA = pres.addSlide('C_SLIDE_Photo')
      slidePropA.addImage({
        path: '../img/cScan/prop_a1.png',
        placeholder: 'Photo',
        w: 3.53,
        h: 4.41
      })
      slidePropA.addText(
        [{ text: this.sheetText['prop-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      slidePropA.addText(
        [
          {
            text: this.sheetText['prop-a'].text_a,
            options: this.fontTextBlockNoNewLine
          },
          {
            text: this.sheetText['prop-a'].text_b,
            options: this.fontTextBlockBold
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-a'].text_d,
            options: this.fontTextBlock
          },
          { text: '', options: this.fontTextBlock },
          {
            text: this.sheetText['prop-a'].text_c,
            options: this.fontTextBlock
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
