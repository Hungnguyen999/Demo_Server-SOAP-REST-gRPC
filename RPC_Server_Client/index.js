const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('notes.proto');
const notesProto = grpc.loadPackageDefinition(packageDefinition);
const uuidv1 = require('uuid'); //import như này này chứ ko phải const uuidv1 = require('uuid/v1')
const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
]
const server = new grpc.Server()
server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
    insert: (call, callback) => {
        let note = call.request
        note.id = uuidv1;   //Chỗ này sửa lại thành uuidv1 không phải là uuidv1()
        notes.push(note)
        callback(null, note)
    }
})
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()

//https://codelabs.developers.google.com/codelabs/cloud-grpc/index.html?index=..%2F..index#5