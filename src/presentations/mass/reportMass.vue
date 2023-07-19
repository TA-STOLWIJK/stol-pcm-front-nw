<template>
  <div>
    <MassPowerButton @click="createPowerPoint"></MassPowerButton>
  </div>
</template>

<script>
import MassPowerButton from '@/components/button/mass/MassPowerButton.vue'
import CircleChartThreeVal from '@/json/PowerPoint/CircleChartThreeVal.json'
import final from '@/json/PowerPoint/final.json'
import firstPage from '@/json/PowerPoint/firstPage.json'
import header from '@/json/PowerPoint/header.json'
import massProps from '@/json/PowerPoint/mass.json'
import table from '@/json/PowerPoint/table.json'
import textBlock from '@/json/PowerPoint/textblock.json'
import varFonts from '@/json/PowerPoint/varFonts.json'
import branch from '@/json/branch.json'
import SheetText from '@/json/mass/mass.json'
import scans from '@/json/mass/scansPP.json'
import ownership from '@/json/ownership.json'
import profile from '@/json/profile.json'
import size from '@/json/size.json'
import defaultSlideAll from '@/mixin/defaultSlideAll'
import defaultSlideA from '@/mixin/defaultSlideMass'
import massPowerService from '@/services/mass/MassService'
import pptxgen from 'pptxgenjs'
import { toast } from 'vue3-toastify'

export default {
  name: 'reportMass',
  components: { MassPowerButton },
  props: ['users', 'teams','numberMass'],
  mixins: [defaultSlideA, defaultSlideAll],
  data() {
    return {
      CircleChartThreeVal: CircleChartThreeVal,
      TableBlockLeftMassTwoCol: massProps.TableBlockLeftMassTwoCol,
      TableBlockLeftMassTwoColOther: massProps.TableBlockLeftMassTwoColOther,
      TableBlockRightMassTwoCol: massProps.TableBlockRightMassTwoCol,
      PlaceTextBlockDown: massProps.PlaceTextBlockDown,
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
      sheetText: SheetText,
      dataExt: {
        send: null,
        nameScan: undefined,
        joinedTeams: undefined,
        joinedUsers: undefined
      },
      scans: scans,
      ownership: ownership,
      profile: profile,
      sizes: size,
      branch: branch
    }
  },
  methods: {
    start() {
      this.createPowerPoint()
    },

    getPowerData() {
      let id = this.numberMass
      this.loading = true
      massPowerService
        .getMassPowerDataA(id)
        .then((response) => {
          this.dataExt = response.data.data
        })
        .finally(() => (this.loading = false))
    },

    printDate: function () {
      // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date().toLocaleDateString('nl-nl', options)
    },
    async createPowerPoint() {
      // eslint-disable-next-line no-undef
      let pres = new pptxgen()
      this.disableBtn = true
      // eslint-disable-next-line no-undef
      toast.success('Je rapportage wordt samengesteld.')

      let lT = this.filteredTeams.length
      let kT = lT - 1
      let ArrayTeams = []
      for (let mT = 0; mT <= kT; mT++) {
        ArrayTeams.push(this.filteredTeams[mT].team_name)
      }
      let ArrayTeamsFinal = ''
      ArrayTeamsFinal = ArrayTeams.join(', ')

      let lU = this.filteredUsers.length
      let kU = lU - 1
      let ArrayUsers = []
      for (let mU = 0; mU <= kU; mU++) {
        // eslint-disable-next-line no-undef
        ArrayUsers.push(
          this.filteredUsers[mU].first_name_user + ' ' + this.filteredUsers[mU].last_name_user
        )
      }
      let ArrayUsersFinal = ''
      ArrayUsersFinal = ArrayUsers.join(', ')

      let lB = this.filteredBranches.length
      let kB = lB - 1
      let ArrayBranches = []
      for (let mB = 0; mB <= kB; mB++) {
        // eslint-disable-next-line no-undef
        ArrayBranches.push(this.filteredBranches[mB].desc)
      }
      let ArrayBranchesFinal = ''
      ArrayBranchesFinal = ArrayBranches.join(', ')

      let lS = this.filteredSizes.length
      let kS = lS - 1
      let ArraySizes = []
      for (let mS = 0; mS <= kS; mS++) {
        // eslint-disable-next-line no-undef
        ArraySizes.push(this.filteredSizes[mS].desc)
      }
      let ArraySizesFinal = ''
      ArraySizesFinal = ArraySizes.join(', ')

      let lO = this.filteredOwners.length
      let kO = lO - 1
      let ArrayOwners = []
      for (let mO = 0; mO <= kO; mO++) {
        // eslint-disable-next-line no-undef
        ArrayOwners.push(this.filteredOwners[mO].desc)
      }
      let ArrayOwnersFinal = ''
      ArrayOwnersFinal = ArrayOwners.join(', ')

      let lP = this.filteredProfiles.length
      let kP = lP - 1
      let ArrayProfiles = []
      for (let mP = 0; mP <= kP; mP++) {
        // eslint-disable-next-line no-undef
        ArrayProfiles.push(this.filteredProfiles[mP].desc)
      }
      let ArrayProfilesFinal = ''
      ArrayProfilesFinal = ArrayProfiles.join(', ')

      let labelResponse = ['Ingevuld', 'Nee, na inlog', 'Geen response']
      let dataChartStat1 = [
        {
          labels: labelResponse,
          values: [
            this.dataExt.report,
            this.dataExt.notInt,
            this.dataExt.send - this.dataExt.notInt - this.dataExt.report
          ]
        }
      ]

      pres.defineSlideMaster(this.dataScanA)
      pres.defineSlideMaster(this.dataScanA_Photo)
      pres.defineSlideMaster(this.dataStart)
      pres.defineSlideMaster(this.finalSlide)

      let slideStart = pres.addSlide('FIRST_SLIDE')
      slideStart.addText(
        [
          {
            text: 'Collectieve actie: ' + this.dataExt.nameAction,
            options: this.fontFirstPageHeader
          }
        ],
        this.placeFirstPageHeader
      )
      // slideStart.addText([{ text: this.date + ' ' + this.dataScan.team.place_team  + this.dataClient.last_name_client, options: this.fontFirstPageSubHeader }], this.placeFirstPageSubHeader);
      slideStart.addText(
        [
          {
            text: 'QuickScan: ' + this.filteredScans[0].desc,
            options: this.fontFirstPageSubHeader
          }
        ],
        this.placeFirstPageSubHeader
      )
      slideStart.addText(
        [
          {
            text: 'Datum van genereren rapportage: ' + this.date,
            options: this.fontFirstPageThreeHeader
          }
        ],
        this.placeFirstPageThreeHeader
      )

      let slideSelA = pres.addSlide('A_SLIDE_Photo')
      slideSelA.addImage({
        path: '../img/dScan/DquestionB.png',
        placeholder: 'Photo',
        w: 3.53, h: 4.41
      })
      slideSelA.addText(
        [{ text: this.sheetText['sel-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowA = []
      rowA.push([
        {
          text: this.sheetText['sel-a'].text_a,
          options: { colspan: 2, align: 'center', bold: true }
        }
      ])
      rowA.push([
        { text: this.sheetText['sel-a'].text_b },
        { text: this.sheetText['sel-a'].text_c }
      ])
      rowA.push([
        { text: this.sheetText['sel-a'].text_d },
        { text: this.sheetText['sel-a'].text_e }
      ])
      rowA.push([
        { text: this.sheetText['sel-a'].text_f },
        { text: this.sheetText['sel-a'].text_g }
      ])
      rowA.push([
        { text: this.sheetText['sel-a'].text_h },
        { text: this.sheetText['sel-a'].text_i }
      ])

      slideSelA.addTable(rowA, this.TableBlockLeftMassTwoCol)

      let slideSelB = pres.addSlide('A_SLIDE_Photo')
      slideSelB.addImage({
        path: '../img/dScan/DquestionG.png',
        placeholder: 'Photo',
        w: 3.53, h: 4.41
      })
      slideSelB.addText(
        [{ text: this.sheetText['sel-b'].header, options: this.fontHeader }],
        this.placeHeader
      )
      let rowB = []
      rowB.push([
        {
          text: this.sheetText['sel-b'].text_a,
          options: { colspan: 2, align: 'center', bold: true }
        }
      ])
      rowB.push([{ text: this.sheetText['sel-b'].text_b }, { text: ArrayTeamsFinal }])
      rowB.push([{ text: this.sheetText['sel-b'].text_c }, { text: ArrayUsersFinal }])
      rowB.push([{ text: this.sheetText['sel-b'].text_d }, { text: ArrayBranchesFinal }])
      rowB.push([{ text: this.sheetText['sel-b'].text_e }, { text: ArraySizesFinal }])
      rowB.push([{ text: this.sheetText['sel-b'].text_f }, { text: ArrayOwnersFinal }])
      rowB.push([{ text: this.sheetText['sel-b'].text_g }, { text: ArrayProfilesFinal }])

      slideSelB.addTable(rowB, this.TableBlockLeftMassTwoColOther)

      let respSheetA = pres.addSlide('A_SLIDE')
      respSheetA.addText(
        [{ text: this.sheetText['res-a'].header, options: this.fontHeader }],
        this.placeHeader
      )
      // let extrastat7Data = headerCol.concat(stat7Data);
      // statSheet7.addTable(extrastat7Data, this.TableBlockRightTwoCol);
      respSheetA.addChart(pres.charts.PIE, dataChartStat1, CircleChartThreeVal)
      let rowC = []
      rowC.push([
        {
          text: this.sheetText['res-a'].text_a,
          options: { colspan: 2, align: 'center', bold: true }
        }
      ])
      rowC.push([{ text: this.sheetText['res-a'].text_b }, { text: this.dataExt.send }])
      rowC.push([{ text: this.sheetText['res-a'].text_c }, { text: this.dataExt.report }])
      rowC.push([{ text: this.sheetText['res-a'].text_d }, { text: this.dataExt.notInt }])
      rowC.push([{ text: this.sheetText['res-a'].text_e }, { text: this.dataExt.firstReminder }])
      rowC.push([{ text: this.sheetText['res-a'].text_f }, { text: this.dataExt.secondReminder }])
      rowC.push([{ text: this.sheetText['res-a'].text_g }, { text: this.dataExt.lastReminder }])
      rowC.push([{ text: this.sheetText['res-a'].text_h }, { text: this.dataExt.loggedIn }])

      respSheetA.addTable(rowC, this.TableBlockRightMassTwoCol)

      respSheetA.addText(
        [
          {
            text: this.sheetText['res-a'].text_i,
            options: this.fontTextBlockHeader
          },
          { text: '', options: this.fontTextBlock }
        ],
        this.PlaceTextBlockDown
      )

      this.disableSendBtn = false
      let filename = 'Rapportage_collectieve_actie' + this.date + '.pptx'
      // eslint-disable-next-line no-undef
      await pres.writeFile({ fileName: filename })
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filteredScans() {
      return this.dataExt.nameScan
        ? this.scans.filter((scan) => {
            return scan.name.includes(this.dataExt.nameScan)
          })
        : this.scans
    },

    filteredSizes() {
      return this.sizes.filter((size) => this.dataExt.selSize.includes(size.name))
    },
    filteredTeams() {
      return this.teams.filter((team) => this.dataExt.joinedTeams.includes(team.id))
    },
    filteredUsers() {
      return this.users.filter((user) => this.dataExt.joinedUsers.includes(user.id))
    },
    filteredBranches() {
      return this.branch.filter((br) => this.dataExt.selBranch.includes(br.name))
    },
    filteredOwners() {
      return this.ownership.filter((ow) => this.dataExt.selOwner.includes(ow.name))
    },
    filteredProfiles() {
      return this.profile.filter((pr) => this.dataExt.selProfile.includes(pr.name))
    }
  },
  async created() {
    await this.getPowerData()
  },
  mounted() {
    this.date = this.printDate()
  }
}
</script>

<style scoped></style>
