#!env node
const fs     = require('fs');
const OrdXml = require('ordxml').OrdXml;
let ordxml = new OrdXml({ comments:true });

class Apskel {
	constructor() {
		this.sourceFile = 'application.xml';
		//if( process.argv.length === 2 ) process.argv.push('-h');
		for( let i = 2; i < process.argv.length; i += 1 ) {
			let arg = process.argv[i];
			if( arg[0] === '-' ) {
				switch( process.argv[i] ) {
					case '-h':
					case '--help': 
						console.log('\nUsage Options include:\n');
						console.log('\t-f fileName  (default: "application.xml")');
						console.log('\t-t template  (default: "onsen", refering to the onsen-template folder)');
						break;
					case '-f': sourceFile = process.argv[i+1]; break;
					case '-t': sourceFile = process.argv[i+1]; break;
					default:
						console.error( 'Unknown option: ' + JSON.stringify(arg) );
				}
			}
			else { sourceFile = arg; }
		} // end of for( process.argv )

		// Load Source File
		console.log('Load ' + JSON.stringify(this.sourceFile) + '..');
		this.source = fs.readFileSync( this.sourceFile );
		this.parsed = ordxml.parse( this.source );
		console.log( JSON.stringify(this.parsed,null,'  ') );
	
	} // end of consructor()
} // end of Apskel class

const build = new Apskel();
