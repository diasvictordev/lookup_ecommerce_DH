const menuController = {
    smartphones: (req, res)=>{
        res.render('smartphones')
    },
    perifericos: (req, res)=>{
        res.render('perifericos')
    },
    audio: (req, res)=>{
        res.render('audio')
    },
    cadeiras: (req, res)=>{
        res.render('cadeiras')
    },
    hardware: (req, res)=>{
        res.render('hardware')
    },
    tablet: (req, res)=>{
        res.render('tablet')
    },
    tv: (req, res)=>{
        res.render('tv')
    }
}

module.exports = menuController