var Mongo = {
  isValid: function(s){
    return /^[a-f\d]{24}$/.test(s);
  },
  getTimestamp: function(s){
    return this.isValid(s) && new Date(parseInt(s.substr(0, 8), 16) * 1000);
  }
}
