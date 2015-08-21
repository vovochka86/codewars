var zlib = require('zlib');
var databse = [[],[],[],[],[],[],[],[]]; // 8 bits in byte
var bitmasks = [1,2,4,8,16,32,64,128];


function store (buf) {
	var db = buf[0];
	var key = buf.readUInt8(1); //read 8 bit integer at 0x1

	if (buf[2] === 0x78) { // 0x78 first byte of zlib data
		zlib.inflate(buf.slice(2),function (er,inflatedBuf) { // data starts from 2 byte
			if (er) return console.error(er);
			var data =inflatedBuf.toString();

			bitmasks.forEach(function(bitmask, index){
		  		if ((db & bitmask) === bitmask) {
		  // found match for store database index
		  			  database[index][key] = data;
		  }

		}) ;
			console.log('updated db',database);
	});
	}

}
// testing protocol
var header = new Buffer(2);
zlib.deflate('lablabla', function(er,deflateBuf){
	var header = new Buffer(2);
	header[0] = 0x8;
	header[1] = 0;

	var message =Buffer.concat([header,deflateBuf]);
	store(message);
});
