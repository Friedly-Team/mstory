const game = {
  day: 1,
  time: 600,

  addTime: function() {
    if (this.time % 100 === 0) {
      this.time += 30;
    } else {
      this.time += 70;
    }
  },

  getTimeStr: function() {
    return this.time / 100 + ":" + (this.time % 100);
  }
};

export default game;
