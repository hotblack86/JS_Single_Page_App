describe('Message', function(){

  it('Makes a new instance of Message', function(){
    var message1 = new Message();
    expect(message1 instanceof Message).toBeTruthy();
  });

  it('Returns the text of the message', function(){
    var message1 = new Message('Hello World')
    expect(message1.text).toEqual('Hello World')
  })

  it('Returns the full text of the message', function(){
    var message1 = new Message('Hello World')
    expect(message1.getText()).toEqual('Hello World')
  })
})