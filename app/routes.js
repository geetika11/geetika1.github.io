//require express
var express=require('express')

var path=require('path')

//create router object
var router=express.Router()

//export the router
module.exports=router


//route for homepage
router.get('/',function(req,res)
{
	//res.send('hello geet')
	res.sendFile(path.join(__dirname,'../index.html'))
})
// route for the person page
router.get('/person',function(req,res)
{
	res.sendFile(path.join(__dirname,'../person.html'))

})


// route for interest page
router.get('/interest',function(req,res)
{
	res.sendFile(path.join(__dirname,'../interest.html'))

})


// route for contact page
router.get('/contact',function(req,res)
{
	res.sendFile(path.join(__dirname,'../contact.html'))

})

