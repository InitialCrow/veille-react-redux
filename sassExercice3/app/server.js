// my server stuf
let path = require('path')

// my express stuff
let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')
let cookieParser = require('cookie-parser');
// my express conf
let app = express()

app.set('views', './dist/views')
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname + '/')))
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(cookieParser());
app.use(session({
	secret: '1234',
    name: 'Invaders-sess',
    proxy: true,
    resave: true,

    saveUninitialized: true
  
}))


// my mysql conf
let mysql = require('mysql');
let conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'phpmyadmin',
  password : '0000',
  database : 'form_redux'

});

conn.connect()

// my routing 
app.get('/', function(req,res){
	res.render('index')
	res.end()
})

app.post('/adduser', function(req,res){
	let data = {
		first : req.body.first,
		last : req.body.last,
		mail : req.body.mail,
		
		escape : function(data){
			let regex = /[<>*{}/()=&'"+#%$~!:;]/ig
			for (let prop in data){
				
				if( typeof(data[prop])=== 'string'){
					if(data[prop].match(regex) != null){
						
						data.valid = false
						return 
						break
					}else{
						data.valid = true
					}
				}	
			}
		}

	}
	data.escape(data)
	if(data.valid === true){
		let insertQuery = "INSERT INTO user (??, ??, ??) values (?,?,?)"
		let insert = ['first','last','mail', data.first,data.last,data.mail]
		conn.query( insertQuery, insert, function (error, results, fields) {
			if (error) throw error;
				
				
				res.redirect('/')
				res.end()
			});
	}else{
		req.session.name='fail'
		console.log(req.session.name)
		res.redirect('/')
		res.end()
		
	}

})
app.get('/dashboard', function(req,res){
	res.redirect('/')
	res.end()

	
})

app.get('/api/get-user', function(req,res){
	
	let selectQuery = "select ??,??,?? from ??"
	let select = ['first', 'last', 'mail','user']
	conn.query(selectQuery, select, function(err,results, fields){
		if(err) throw err;

		res.send(results)
		res.end()
	})
	// res.send(req.session.name)
	
})

app.listen(8000, function(){
	console.log('=====================8000=====================')
})