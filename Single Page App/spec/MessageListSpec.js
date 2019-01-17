describe('MessageList', function(){

  beforeEach( () => {
    messages = new MessageList();
  });

  it('Makes a new instance of MessageList', function(){
    expect(messages instanceof MessageList).toBeTruthy();
  });

  it('Initializes with an empty List', function(){
    expect(messages.list).toEqual([]);
  });
})