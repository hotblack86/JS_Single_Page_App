class Message {
  constructor(text, time = new Date) {
    this.text = text;
    this.time = time
  }

  getText(){
    return this.text;
  }

  getDate(){
    return this.time;
  }

}