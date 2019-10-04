Vue.component("student-card", {
  props: [ "student","bisactive", "isactive" ],
  template: "<div class='student' v-bind:class='{cardActive:isactive, cardOut:!isactive }'>{{ student.name }} : {{ student.skill }}</div>",
  template: "<div class='student' v-bind:class='{bcardActive:bisactive, bcardOut:!bisactive }'>{{ student.name }} : {{ student.skill }}</div>"
})

var app = new Vue({
    el: "#app",
    data: {
        students: [
        { name: "Sienna", skill: 2, joy: 0 },
        { name: "Cyan", skill: 0, joy: 5 },
        { name: "Magenta", skill: 3, joy: 3 }
        ],
        currentStudent: { name: "Sienna", skill: 2, joy: 0 },
        curStudentId: 0,
        cardActive: true,
        bcardActive: true
    },
    methods: {

        arrowClicked: function() {
         
            this.cardActive = !this.cardActive;

            setTimeout(()=>{

                //modify the skill of the current student
                //before moving onward:
                this.currentStudent.skill ++;

                //iteration code
                this.curStudentId ++;
                this.currentStudent = this.students[this.curStudentId];

                if(this.curStudentId >= this.students.length-1) {
                    this.curStudentId = -1;
                }
                //animation trigger
                this.cardActive = !this.cardActive;
            }, 300);
        },
        backArrowClicked: function() {
         
            this.bcardActive = !this.bcardActive;

            setTimeout(()=>{

                //modify the skill of the current student
                //before moving onward:
                if(this.currentStudent.skill == 0 ){
                    this.currentStudent.skill = 0;
                }
                else{
                    this.currentStudent.skill --;
                }

                //iteration code
                this.curStudentId ++;
                this.currentStudent = this.students[this.curStudentId];

                if(this.curStudentId >= this.students.length-1) {
                    this.curStudentId = -1;
                }
                //animation trigger
                this.bcardActive = !this.bcardActive;
            }, 300);
        }
        
    }
})