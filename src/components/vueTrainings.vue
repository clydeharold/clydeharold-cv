<template>
    <md-card md-with-hover>
        <md-card-header><div class="md-title"><h2 class="mb-5" style="margin-bottom:10px !important">Trainings</h2></div></md-card-header>
        <md-card-content>
            <div>
            <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
                <md-table-toolbar>
                    <md-field md-clearable class="md-toolbar-section-end">
                        <md-input placeholder="Search by topic..." v-model="search" @input="searchOnTable" />
                    </md-field>
                </md-table-toolbar>

                <md-table-empty-state
                    md-label="No topics found"
                    :md-description="`No topics found for this '${search}' query. Try a different search topic.`">
                    <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
                </md-table-empty-state>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Topic / Title" md-sort-by="topic">{{ item.topic }}</md-table-cell>
            <md-table-cell md-label="Inclusive Dates" md-sort-by="iDate">{{ item.iDate }}</md-table-cell>
            <md-table-cell md-label="Place of Traning" md-sort-by="placeTraining">{{ item.placeTraining }}</md-table-cell>
            </md-table-row>
            </md-table>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.topic).includes(toLower(term)))
    }

    return items
  }

  export default {
    name: 'TableSearch',
    data: () => ({
      search: null,
      searched: [],
      topics: [
        {
          topic: "Research Analytical Tools ",
          iDate: "September 20, 2013",
          placeTraining: "University of Cebu Banilad AVR, Cebu City Philippines"
        },
        {
            topic: "2013 Workshop on Computation: Theories and Practies (WCTP)",
            iDate: "September 27-28, 2013",
            placeTraining: "AVR St Ezekiel Moreno Bldg., University of San Jose Recoletos, Basak Cebu City"
        },
        {
            topic: "CMS/CRM Training with WEBXPRESS’ 60Seconds CMS",
            iDate: "June 10 – 14, 2013",
            placeTraining: "17th Floor, i3 Building IT Park, Lahug Cebu City"
        },
        {
            topic: "Cloud Infrastructure Services",
            iDate: "April 22 – 26, 2013",
            placeTraining: "BCL3, 3rd Floor, St Ezekiel Moreno Bldg., University of San Jose Recoletos, Basak Cebu City"
        },
        {
            topic: "Trainer Training for the Intel Easy Steps Basic Course",
            iDate: "September 20, 2014",
            placeTraining: "University of San Jose Recoletos, Cebu City"
        },
        {
            topic: "Mobile Game Development Training Using Eqela",
            iDate: "November 8-9,15-16, 2014",
            placeTraining: "University of Cebu - Banilad"
        },
        {
            topic: "SWEEPx: Mobile Applications Development Training",
            iDate: "November 17-20,2014",
            placeTraining: "University of Cebu - Banilad"
        },
        {
            topic: "IDEA Global Entrepreneurship Workshop",
            iDate: "February 27 - 28, 2015 & July 9 - 11, 2015",
            placeTraining: "University of San Carlos, Cebu City"
        },
        {
            topic: "Android for Beginners",
            iDate: "May 18-20, 2016",
            placeTraining: "University of Cebu - Banilad"
        },
        {
            topic: "Faculty Professional Development Program: SMP Plus. Mobile Applications Development: Game Design and Animation Track",
            iDate: "May 2 – 26, 2017",
            placeTraining: "University of Cebu - Banilad"
        },
        {
            topic: "USAID STRIDE Public Sector ICT Challenges: Needing Solutions from Industry-Academe Partnerships Innovation Workshop",
            iDate: "September 26, 2017",
            placeTraining: "Casino Español de Cebu"
        },
        {
            topic: "IBM Xternship Program",
            iDate: "May 16, 2018 – July 13, 2018",
            placeTraining: "IBM Cebu"
        },
        {
            topic:"Cisco NetAcad-PH Instructor’s Conference 2019",
            iDate: "January 15 – 17, 2019",
            placeTraining: "Azalea Residences, Baguio City"
        },
        {
            topic:"UC In-Service Training 2019 – Design Sprint",
            iDate: "June 5 – 8, 2019",
            placeTraining: "UC – Banilad Campus"
        },
        {
            topic:"UC In-Service Training 2019 – Python ",
            iDate: "June 10, 2019",
            placeTraining: "UC – Banilad Campus"
        },
        {
            topic:"UC In-Service Training 2019 – IOT/CLOUD Professor Training ",
            iDate: "July 5, 2019",
            placeTraining: "UC – Main Campus"
        },
        {
            topic:"",
            iDate: "",
            placeTraining: ""
        }
      ]
    }),
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.topics, this.search)
      }
    },
    created () {
      this.searched = this.topics
    }
  }
</script>