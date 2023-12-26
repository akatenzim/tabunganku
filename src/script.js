const App = Vue.createApp({
  data() {
    return {
      state: true,
      greeting: "Selamat datang, sobat menabungku",
      firstLabel: "Berapa nih targetnya?",
      secondLabel: "Sehari mau nabung berapa rupiah nih?",
      firstInput: "",
      secondInput: "",
      secBtnClicked: false,
      error: "",
      showError: false,
      firstCompleted: false,
      secondCompleted: false,
      daysCalculated: false,
      daysResult: 0,
      arrayDays: [],
    };
  },
  methods: {
    welcomeMessage() {
      return this.greeting;
    },

    firstQuest() {
      return this.firstLabel;
    },

    secondQuest() {
      return this.secondLabel;
    },

    toFirstInput() {
      this.secBtnClicked = true;
      this.state = false;
    },

    firstGenerate() {
      let fInput = this.firstInput;
      if (fInput === "") {
        this.showError = true;
        this.error = "tidak boleh kosong";
        this.secBtnClicked = true;
      } else {
        this.firstInput = fInput;
        console.log(this.firstInput);
        this.firstCompleted = true;
        this.state = false;
        this.secBtnClicked = false;
        this.showError = false;
        this.error = "";
      }
    },

    secondGenerate() {
      let sInput = this.secondInput;
      if (sInput === "") {
        this.showError = true;
        this.error = "tidak boleh kosong";
        this.firstCompleted = true;
      } else {
        this.secondInput = sInput;
        console.log(this.secondInput);
        this.firstCompleted = false;
        this.secondCompleted = true;
        this.state = false;
        this.showError = false;
        this.error = "";
        this.calculateDays();
      }
    },

    calculateDays() {
      this.daysResult = Math.floor(
        parseFloat(this.firstInput) / parseFloat(this.secondInput)
      );

      return this.daysResult;
    },

    startProgress() {
      this.secondCompleted = false;
      for (let i = 0; i < this.daysResult; i++) {
        this.arrayDays.push(this.secondInput);
      }
      this.daysCalculated = true;
      console.log(this.arrayDays);
      return this.arrayDays;
    },

    saveProgress() {
      let saves = [];

      let saveInfo = {
        value: days.innerText,
        completed: days.classList.contains("completed"),
      };

      saves.push(saveInfo);

      localStorage.setItem("saves", JSON.stringify(saves));
      console.log("done");
    },
  },
}).mount("#app");
