class Message {
  constructor(text, newDate = new Date()) {
    this.text = text;
    this.newDate = newDate;
  }

  getText(){
    return this.text;
  }

  getDate(){
    return this.newDate;
  }

}