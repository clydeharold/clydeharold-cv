<template>
    <md-card md-with-hover>
        <md-card-header><div class="md-title"><h2 class="mb-5" style="margin-bottom:10px !important">Seminars</h2></div></md-card-header>
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
            <md-table-cell md-label="Place of Traning" md-sort-by="placeTraning">{{ item.placeTraning }}</md-table-cell>
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
            topic: "Delimiting The Research Problem",
            iDate: "August 3, 2012",
            placeTraning:"University of Cebu Banilad AVR, Cebu City Philippines"
        },
        {
            topic: "Theoretical and Conceptual Framework",
            iDate: "September 4, 2012",
            placeTraning:"University of Cebu Banilad AVR, Cebu City Philippines"
        },
        {
            topic: "Ethical Research",
            iDate: "December 11, 2013",
            placeTraning:"University of Cebu Banilad AVR, Cebu City Philippines"
        },
        {
            topic: "Classroom Management Seminar",
            iDate: "November 15, 2013",
            placeTraning:"University of Cebu Banilad AVR, Cebu City Philippines"
        },
        {
            topic: "Outcomes-Based Teaching and Learning (OBTL)",
            iDate: "May 24 – 25, 2013",
            placeTraning:"University of Cebu Main Campus, Cebu City"
        },
        {
            topic: "10NNLPRS Pre-Conference Activity: CSP SIG-NLP Membership Launching for Viz-Min and NLP Research Talks",
            iDate: "January 24, 2014",
            placeTraning:"University of Cebu - Banilad"
        },
        {
            topic: "Laboratory Fire and Safety Seminar",
            iDate: "May 24, 2016",
            placeTraning:"University of Cebu - Banilad, Room 803"
        },
        {
            topic: "Learner Centered Teaching Strategies Seminar",
            iDate: "October 14, 2016",
            placeTraning:"University of Cebu - Banilad - Moot Court"
        },
        {
            topic: "Sharing of Best Practices",
            iDate: "June 1, 2017",
            placeTraning:"University of Cebu - Banilad"
        },
        {
            topic: "Basic and Ethical Conduct of Research",
            iDate: "January 24 – 25, 2019",
            placeTraning:"UC – Banilad Campus"
        },
        {
            topic: "PSITE 15th Regional Convention",
            iDate: "May 2 – 4, 2019",
            placeTraning:"Silliman University, Dumaguete City"
        },
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