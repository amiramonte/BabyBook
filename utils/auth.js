const withAuth = (req, res, next)=>{
    if(!req.session.userId){
        res.redirect('/sign-in')
    }else{
        next()
    }
}

module.exports =  withAuth;