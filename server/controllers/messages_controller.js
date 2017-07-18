let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push( { text, time, id } );
    id++;
    res.send( messages );
  },

  read: (req, res) => {
    res.send( messages );
  },

  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex((message) => {
      return message.id == updateID;
    })
    let message = messages[ messageIndex ];

    messages[ messageIndex ] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.send( messages );
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    messageIndex = messages.findIndex((message) => {
      return message.id == deleteID;
    });
    messages.splice(messageIndex, 1);
    res.send( messages );
  }
}
